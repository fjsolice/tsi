"use client";

import React, { useState, useEffect } from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { supabase } from "../../lib/supabase"; // Ensure this path is correct

interface PortfolioData {
  totalPortfolioBal: string;
  initialPortfolioBal: string;
  totalReturns: string;
  targetReturn: string;
  executedOrders: string;
  outperformance: string;
}

interface AssetClass {
  asset_type: string;
  percentage: number | null;
  trend: string | null;
}

interface AssetClassesData {
  labels: string[];
  datasets: { data: number[]; backgroundColor: string[]; borderWidth: number }[];
  options: { plugins: { legend: { labels: { font: { size: number } } } }; maintainAspectRatio: boolean };
}

interface EquityBalanceData {
  labels: string[];
  datasets: { label: string; data: number[]; borderColor: string; backgroundColor: string; fill: boolean }[];
  options: { plugins: { legend: { labels: { font: { size: number } } } }; scales: { x: { ticks: { font: { size: number } } }; y: { ticks: { font: { size: number } } } }; maintainAspectRatio: boolean };
}

interface RiskExposureData {
  label: string;
  data: [number, number];
}

const PortfolioPage = () => {
  const [reportPeriod, setReportPeriod] = useState<"Weekly" | "Monthly" | "Yearly">("Weekly");
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    totalPortfolioBal: "USD 0",
    initialPortfolioBal: "USD 0",
    totalReturns: "0%",
    targetReturn: "0%",
    executedOrders: "0",
    outperformance: "0%",
  });
  const [assetClassesData, setAssetClassesData] = useState<AssetClassesData>({
    labels: ["Stocks", "Commodity", "Currency", "Cash"],
    datasets: [{ data: [0, 0, 0, 0], backgroundColor: ["#EF4444", "#F97316", "#8B5CF6", "#6B7280"], borderWidth: 0 }],
    options: { plugins: { legend: { labels: { font: { size: 12 } } } }, maintainAspectRatio: false },
  });
  const [equityBalanceData, setEquityBalanceData] = useState<EquityBalanceData>({
    labels: ["January", "February", "March"],
    datasets: [
      { label: "Equity", data: [0, 0, 0], borderColor: "#F472B6", backgroundColor: "#F472B6", fill: false },
      { label: "Balance", data: [0, 0, 0], borderColor: "#1D4ED8", backgroundColor: "#1D4ED8", fill: false },
    ],
    options: {
      plugins: { legend: { labels: { font: { size: 12 } } } },
      scales: { x: { ticks: { font: { size: 12 } } }, y: { ticks: { font: { size: 12 } } } },
      maintainAspectRatio: false,
    },
  });
  const [riskExposureData, setRiskExposureData] = useState<RiskExposureData[]>([]);
  const [username, setUsername] = useState<string>("Loading...");
  const [assetClasses, setAssetClasses] = useState<AssetClass[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !sessionData?.session) {
        console.error("No active session:", sessionError);
        setUsername("Guest");
        return;
      }

      const userId = sessionData.session.user.id;
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("username")
        .eq("id", userId)
        .single();
      if (userError) {
        console.error("Error fetching user:", userError.message || JSON.stringify(userError));
        setUsername("Unknown User");
      } else {
        setUsername(userData.username);
      }

      const { data: portfolio, error: portfolioError } = await supabase
        .from("portfolios")
        .select("*")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false }) // Get the latest portfolio
        .maybeSingle();
      if (portfolioError) {
        console.error("Error fetching portfolio:", portfolioError.message || JSON.stringify(portfolioError));
      } else if (portfolio) {
        setPortfolioData({
          totalPortfolioBal: `USD ${portfolio.total_portfolio_bal.toFixed(2)}`,
          initialPortfolioBal: `USD ${portfolio.initial_portfolio_bal.toFixed(2)}`,
          totalReturns: `${portfolio.total_returns.toFixed(1)}%`,
          targetReturn: `${portfolio.target_return.toFixed(1)}%`,
          executedOrders: portfolio.executed_orders.toString(),
          outperformance: `${portfolio.outperformance.toFixed(1)}%`,
        });
      } else {
        console.warn("No portfolio data found for user:", userId);
        setPortfolioData({
          totalPortfolioBal: "USD 0",
          initialPortfolioBal: "USD 0",
          totalReturns: "0%",
          targetReturn: "0%",
          executedOrders: "0",
          outperformance: "0%",
        });
      }

      // Only fetch dependent data if portfolio exists
      if (portfolio) {
        const { data: assetClassesDataFromSupabase, error: assetClassesError } = await supabase
          .from("asset_classes")
          .select("asset_type, percentage, trend")
          .eq("portfolio_id", portfolio.id)
          .order("asset_type");
        if (assetClassesError) {
          console.error("Error fetching asset classes:", assetClassesError.message || JSON.stringify(assetClassesError));
        } else {
          const data = assetClassesDataFromSupabase.map((ac) => ac.percentage || 0);
          setAssetClassesData((prev) => ({ ...prev, datasets: [{ ...prev.datasets[0], data }] }));
          setAssetClasses(assetClassesDataFromSupabase);
        }

        const { data: equityBalances, error: equityError } = await supabase
          .from("equity_balances")
          .select("month, equity, balance")
          .eq("portfolio_id", portfolio.id)
          .order("month");
        if (equityError) {
          console.error("Error fetching equity balances:", equityError.message || JSON.stringify(equityError));
        } else {
          setEquityBalanceData((prev) => ({
            ...prev,
            labels: equityBalances.map((eb) => eb.month || ""),
            datasets: [
              { ...prev.datasets[0], data: equityBalances.map((eb) => eb.equity || 0) },
              { ...prev.datasets[1], data: equityBalances.map((eb) => eb.balance || 0) },
            ],
          }));
        }

        const { data: riskExposures, error: riskError } = await supabase
          .from("risk_exposures")
          .select("period_label, risk_percentage, safe_percentage")
          .eq("portfolio_id", portfolio.id)
          .eq("report_period", reportPeriod); // Keep this filter for risk exposures
        if (riskError) {
          console.error("Error fetching risk exposures:", riskError.message || JSON.stringify(riskError));
        } else {
          setRiskExposureData(
            riskExposures.map((re) => ({
              label: re.period_label || "",
              data: [re.risk_percentage || 0, re.safe_percentage || 0],
            }))
          );
        }
      }
    };

    fetchData();
  }, [reportPeriod]);

  const chartOptions = {
    plugins: { legend: { labels: { font: { size: 12 } } } },
    scales: { x: { ticks: { font: { size: 12 } } }, y: { ticks: { font: { size: 12 } } } },
    maintainAspectRatio: false,
  };

  const riskChartOptions = {
    plugins: { legend: { labels: { font: { size: 10 } } } },
    maintainAspectRatio: false,
  };

  const getDynamicBalanceData = () => {
    const labels =
      reportPeriod === "Weekly"
        ? ["Mon", "Tue", "Wed", "Thu", "Fri"]
        : reportPeriod === "Monthly"
        ? ["Week 1", "Week 2", "Week 3", "Week 4"]
        : ["Jan", "Feb", "Mar", "Apr", "May"];
    const initialValue = Number(portfolioData.initialPortfolioBal.replace("USD ", "")) || 0;
    const finalValue = Number(portfolioData.totalPortfolioBal.replace("USD ", "")) || 0;
    const data = [initialValue];
    if (labels.length > 1) {
      const step = (finalValue - initialValue) / (labels.length - 1);
      for (let i = 1; i < labels.length; i++) {
        data.push(initialValue + step * i);
      }
    } else {
      data.push(finalValue);
    }
    return {
      labels,
      datasets: [
        {
          label: "Portfolio Balance (USD)",
          data,
          borderColor: "#3B82F6",
          backgroundColor: "#3B82F6",
          fill: false,
        },
      ],
    };
  };

  const dynamicBalanceData = getDynamicBalanceData();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-indigo-50"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(45, 212, 191, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%), url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')",
      }}
    >
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">Individual Portfolio Report</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Last Updated: {new Date().toLocaleString("en-US", { timeZone: "Africa/Nairobi", dateStyle: "full", timeStyle: "short" })}</p>
          </div>
          <div className="text-gray-800 text-base sm:text-xl font-semibold mt-2 sm:mt-0">{username}</div>
        </div>

        {/* Main Content */}
        <div className="space-y-4 sm:space-y-6">
          {/* Portfolio Overview */}
          <div className="bg-white/80 backdrop-blur-lg rounded-lg border border-indigo-200/50 shadow-sm p-3 sm:p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800">Portfolio Overview</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setReportPeriod("Weekly")}
                  className={`px-3 py-1 rounded text-xs sm:text-sm ${
                    reportPeriod === "Weekly"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } focus:outline-none transition-colors`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setReportPeriod("Monthly")}
                  className={`px-3 py-1 rounded text-xs sm:text-sm ${
                    reportPeriod === "Monthly"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } focus:outline-none transition-colors`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setReportPeriod("Yearly")}
                  className={`px-3 py-1 rounded text-xs sm:text-sm ${
                    reportPeriod === "Yearly"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } focus:outline-none transition-colors`}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-0.5 text-xs sm:text-sm leading-relaxed">
                <p>
                  Total Portfolio Bal <span className="font-bold text-blue-600">{portfolioData.totalPortfolioBal}</span>
                </p>
                <p>
                  Initial Portfolio Bal <span className="font-bold text-blue-600">{portfolioData.initialPortfolioBal}</span>
                </p>
                <p>
                  Total Returns <span className="font-bold text-blue-600">{portfolioData.totalReturns}</span>
                </p>
                <p>
                  Target Return <span className="font-bold text-blue-600">{portfolioData.targetReturn}</span>
                </p>
                <p>
                  Executed Orders <span className="font-bold text-blue-600">{portfolioData.executedOrders}</span>
                </p>
                <p>
                  Outperformance <span className="font-bold text-blue-600">{portfolioData.outperformance}</span>
                </p>
              </div>
              <div className="w-full h-36 sm:h-48">
                <Line data={dynamicBalanceData} options={chartOptions} />
              </div>
            </div>
          </div>

          {/* Asset Classes and Performance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Asset Classes */}
            <div className="bg-white/80 backdrop-blur-lg rounded-lg border border-indigo-200/50 shadow-sm p-3 sm:p-4">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Asset Classes Traded</h2>
              <ul className="space-y-0.5 text-xs sm:text-sm leading-relaxed">
                {assetClassesData.labels.map((label, index) => {
                  const asset = assetClassesData.datasets[0].data[index] || 0;
                  const trend = assetClasses.find((ac) => ac.asset_type === label)?.trend || "▲";
                  return (
                    <li key={index} className="flex items-center">
                      <span
                        className="w-3 h-3 rounded-full mr-1 sm:mr-2"
                        style={{ backgroundColor: assetClassesData.datasets[0].backgroundColor[index] }}
                      ></span>
                      {label}{" "}
                      <span className="ml-1 text-blue-600">{asset}%</span>{" "}
                      <span className={`ml-1 ${trend === "▲" ? "text-green-600" : "text-red-600"}`}>{trend}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Performance by Asset Class */}
            <div className="bg-white/80 backdrop-blur-lg rounded-lg border border-indigo-200/50 shadow-sm p-3 sm:p-4">
              <h2 className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Performance by Asset Class</h2>
              <div className="w-full h-36 sm:h-48">
                <Pie data={assetClassesData} options={assetClassesData.options} />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 text-center">Commodity 92.5%</p>
            </div>
          </div>

          {/* Equity and Balance Session */}
          <div className="bg-white/80 backdrop-blur-lg rounded-lg border border-indigo-200/50 shadow-sm p-3 sm:p-4">
            <h2 className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Equity and Balance Session (Last Quarter)</h2>
            <div className="w-full h-36 sm:h-48">
              <Line data={equityBalanceData} options={equityBalanceData.options} />
            </div>
          </div>

          {/* Portfolio Manager's Commentary */}
          <div className="bg-white/80 backdrop-blur-lg rounded-lg border border-indigo-200/50 shadow-sm p-3 sm:p-4">
            <h2 className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Portfolio Managers Commentary</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              This {reportPeriod.toLowerCase()} performance of {portfolioData.totalReturns} is a result of disciplined strategy execution and proactive adjustments in response to market dynamics. Our target return is set at {portfolioData.targetReturn}, making this {reportPeriod.toLowerCase()} performance an outperformance of {portfolioData.outperformance}.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              We maintained a balanced but agile portfolio posture, allowing us to capture opportunities across EAC, SADC, and global markets. This performance reinforces the effectiveness of our investment process and ongoing market monitoring.
            </p>
          </div>

          {/* Expected Risk Exposure */}
          <div className="bg-white/80 backdrop-blur-lg rounded-lg border border-indigo-200/50 shadow-sm p-3 sm:p-4">
            <h2 className="text-sm sm:text-lg font-semibold text-gray-800 mb-3">Expected Risk Exposure ({reportPeriod})</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {riskExposureData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-full h-20 sm:h-24">
                    <Pie
                      data={{
                        labels: ["Risk", "Safe"],
                        datasets: [{ data: data.data, backgroundColor: ["#EF4444", "#3B82F6"], borderWidth: 0 }],
                      }}
                      options={riskChartOptions}
                    />
                  </div>
                  <p className="text-center text-xs sm:text-sm text-gray-500 mt-1">{data.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;