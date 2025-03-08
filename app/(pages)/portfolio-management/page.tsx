"use client";

import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define interfaces for type safety
interface Stock {
  symbol: string;
  price: string;
  change: string;
}

interface Stats {
  trained: number;
  coached: number;
  loans: number;
  portfolios: number;
}

const PortfolioManagement = () => {
  const [stockData, setStockData] = useState<Stock[]>([]);
  const [stats] = useState<Stats>({
    trained: 5000,
    coached: 100000,
    loans: 3400000,
    portfolios: 10000000,
  }); // Static stats, no counting

  const stockControls = useAnimation();
  const statsControls = useAnimation();

  // Fetch real stock data from Alpha Vantage API
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Expanded list of stock symbols (maximize within Alpha Vantage free tier limits)
        const symbols = [
          "AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "JPM", "V", "DIS",
          "NFLX", "PYPL", "INTC", "AMD", "IBM", "CSCO", "ORCL", "WMT", "BA", "GE",
          "KO", "PEP", "MCD", "NKE", "ADBE", "CRM", "SHOP", "SQ",
        ];
        const stockPromises = symbols.map(async (symbol) => {
          const response = await fetch(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=ADQJ6Q8IKG4H7WLD`
          );
          const data = await response.json();
          if (data["Global Quote"]) {
            const quote = data["Global Quote"];
            return {
              symbol: quote["01. symbol"],
              price: quote["05. price"],
              change: quote["10. change percent"]?.replace("%", "") || "0",
            };
          }
          return null;
        });

        const results = await Promise.all(stockPromises);
        const validStocks = results.filter((stock): stock is Stock => stock !== null);
        setStockData(validStocks);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setStockData([]);
      }
    };

    fetchStockData();
    const interval = setInterval(fetchStockData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Stock ticker animation at top
  useEffect(() => {
    if (stockData.length > 0) {
      stockControls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: stockData.length * 2,
            ease: "linear",
          },
        },
      });
    }
  }, [stockData, stockControls]);

  // Animate Achievements content continuously
  useEffect(() => {
    statsControls.start({
      scale: [1, 1.05, 1], // Pulse effect
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    });
  }, [statsControls]);

  const partnerLogos = ["/images/yammer.png", "/images/amazon.png", "/images/mastercard.png", "/images/leica.png",];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Stock Ticker at Top */}
      <div className="w-full bg-gradient-to-r from-black to-gray-800 py-2 shadow-lg sticky top-0 z-20">
        <motion.div
          className="flex space-x-6 whitespace-nowrap text-sm"
          animate={stockControls}
          style={{ willChange: "transform" }}
        >
          {stockData.length > 0 ? (
            stockData.map((stock, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="font-semibold text-white">{stock.symbol}</span>
                <span className="text-gray-300">Price: ${stock.price}</span>
                <span className={parseFloat(stock.change) >= 0 ? "text-green-400" : "text-red-400"}>
                  {parseFloat(stock.change) >= 0 ? "+" : ""}{stock.change}%
                </span>
              </div>
            ))
          ) : (
            <span className="text-gray-400">Loading stock prices...</span>
          )}
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="pt-0 pb-40 relative">
        {/* Section 1: Hero */}
        <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 opacity-40"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <Image
              src="/images/portfolio-hero.jpg"
              alt="Portfolio Hero"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg"
            >
              Invest Confidently, Stay in Control
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg md:text-xl text-gray-300 mb-10"
            >
              We simplify capital markets investing with research-driven strategies that maximize returns while you retain full control of your CDS/trading account. Our mission is to empower you with informed decisions while keeping full access to your capital.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link href="#solutions">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-white hover:text-black transition-all duration-300">
                  Discover Solutions <ArrowRight size={24} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Trusted Guide */}
        <section className="w-full max-w-7xl mx-auto px-6 py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Trusted Guide to Smarter Investing
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We partner with CMSA & CMA licensed brokers and financial institutions to provide seamless access to capital markets. Through expert-driven portfolio strategies, we identify high-return opportunities while minimizing risk. You retain full control of your capital, while we handle the complexities of the market on your behalf.
              </p>
              <Link href="#partners">
                <button className="bg-transparent text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300">
                  See How We Do Business <ChevronRight size={20} />
                </button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/trusted-guide.jpg"
                alt="Trusted Guide"
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section id="solutions" className="w-full max-w-7xl mx-auto px-6 py-28 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
          >
            Why Choose Our Portfolio Structuring Solutions?
          </motion.h2>
          <div className="space-y-16">
            {[
              {
                title: "Expert Market Research & Insights",
                desc: "We analyze financial markets, identify profitable opportunities, and create strategic investment plans tailored to your financial goals. Our research-driven approach ensures that you invest wisely without having to study the markets yourself.",
              },
              {
                title: "Direct Market Access—Full Control of Your Funds",
                desc: "Unlike traditional fund management services where your money is pooled with others, we guide you in investing directly through your own CDS/trading account. This means:\n• You retain full ownership of your investments.\n• No hidden charges or management fees eating into your returns.\n• We simply provide the expertise—you make the final investment decisions.",
              },
              {
                title: "Maximized Returns, Lower Costs",
                desc: "By structuring your portfolio efficiently and eliminating unnecessary fees, we help you achieve higher returns compared to indirect investment vehicles. Over the years, our portfolio structuring strategies have helped clients achieve an average return of 3% per month (36% annually)—without them having to navigate their investments daily.",
              },
              {
                title: "Access to Local & Regional Capital Markets",
                desc: "Through our partnerships with:\n• Capital Markets & Securities Authority (CMSA) – Tanzania, we provide access to investment opportunities in Tanzanian capital markets.\n• Capital Markets Authority (CMA) – Kenya, we enable investors to explore diversified investments within the East African Community (EAC) and Southern African Development Community (SADC) markets.\nThis ensures that your portfolio benefits from cross-border diversification and regulated market access.",
              },
              {
                title: "Transparent, Professional, and Personalized Advisory",
                desc: "We are not a fund management service—we are your personal investment research and strategy team. We help you navigate the market with clear insights, risk management strategies, and ongoing portfolio performance reviews.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 whitespace-pre-line">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Who We Serve */}
        <section className="w-full max-w-7xl mx-auto px-6 py-28 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
          >
            Who We Serve
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Busy Professionals & Business Owners",
                desc: "Grow your wealth without the hassle of daily market tracking.",
                image: "/images/professionals.jpg",
              },
              {
                title: "Organizations & Institutions",
                desc: "Achieve financial objectives through structured investment strategies.",
                image: "/images/institutions.jpg",
              },
              {
                title: "New & Experienced Investors",
                desc: "Whether you’re just starting or looking to enhance your portfolio, we provide expert guidance to help you invest wisely.",
                image: "/images/investors.jpg",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3, duration: 1 }}
                className="relative h-[400px] rounded-xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Partners & How It Works */}
        <section id="partners" className="w-full bg-black py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link href="#partners">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-2xl font-semibold flex items-center gap-2 mx-auto hover:bg-white hover:text-black transition-all duration-300">
                See How We Do Business <ChevronRight size={24} />
              </button>
            </Link>
          </motion.div>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white"
            >
              Our Partners
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto"
            >
              We collaborate with CMSA (Tanzania) and CMA (Kenya) licensed brokers and financial institutions to ensure regulated, seamless market access.
            </motion.p>
            <div className="flex justify-center gap-12 mb-16">
              {partnerLogos.map((logo, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                  className="w-32 h-32"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${idx + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="drop-shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-semibold text-center mb-12 text-white"
            >
              How It Works
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "Step 1: Understanding Your Goals",
                  desc: "We begin by understanding your financial objectives, risk tolerance, and investment preferences.",
                },
                {
                  step: "Step 2: Structuring Your Portfolio",
                  desc: "Based on in-depth market research and proven strategies, we structure a diversified portfolio tailored to your needs. And one that can sustain the ever-changing economic weather.",
                },
                {
                  step: "Step 3: Broker Account Opening & Onboarding",
                  desc: "In just 7 minutes, we assist you with the account opening process with your broker of choice. Our quick onboarding equips you with the tools to earn returns effortlessly, freeing you from the hassle of constantly monitoring the market.",
                },
                {
                  step: "Step 4: Performance Review & Active Market Reporting",
                  desc: "Aside from your Broker’s Daily account activity reports, we provide ongoing performance advisory reports and consultations to help you stay updated and make well-informed investment decisions as your portfolio grows.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <h4 className="text-xl font-semibold text-white mb-4">{item.step}</h4>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Highlights of Our Support */}
        <section className="w-full max-w-7xl mx-auto px-6 py-28 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
          >
            Highlights of Our Support
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Educational Resources",
                desc: "In 2018, we launched a new resource center that provides educational content and advice to help early-stage and established investors achieve their goals.",
                image: "/images/education.jpg",
              },
              {
                title: "One-On-One Coaching",
                desc: "We’ve trained seasoned investment coaches across multiple regions to offer personalized mentoring and guidance to investors. Since launching our coaching program, we have empowered hundreds of individuals to navigate their investment journeys effectively.",
                image: "/images/coaching.jpg",
              },
              {
                title: "Dynamic Market Insights",
                desc: "Stay ahead in an ever-changing financial landscape with our cutting-edge market analysis, powered by advanced AI insights. We leverage data-driven approaches to provide you with timely information and trends, ensuring you make informed investment decisions that align with market dynamics.",
                image: "/images/insights.jpg",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3, duration: 1 }}
                className="relative h-[400px] rounded-xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 7: Achievements */}
        <section className="w-full bg-gray-800 py-28 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-12 text-white"
          >
            Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-gray-300 mb-16"
          >
            Data as of Dec 2024
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
            {[
              { label: "Small and mid-sized corporate trained individuals", value: "5K+", key: "trained" },
              { label: "Participants coached globally since 2018", value: "100K+", key: "coached" },
              { label: "Consultation loans and lines of credit to SME businesses in 5 years", value: "$3.4M+", key: "loans" },
              { label: "Combined individual and corporate portfolio structured solutions across Africa", value: "$10M+", key: "portfolios" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                animate={{
                  scale: [1, 1.05, 1], // Pulse effect
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <motion.h3
                  className="text-3xl font-bold text-white mb-2"
                  animate={{
                    scale: [1, 1.05, 1], // Pulse effect for numbers
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  animate={{
                    scale: [1, 1.05, 1], // Pulse effect for labels
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <Link href="/enroll">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-2 mx-auto hover:bg-white hover:text-black transition-all duration-300">
                Start Your Journey <ArrowRight size={24} />
              </button>
            </Link>
          </motion.div>
        </section>

        {/* Section 8: Live Stock Prices (Table Format) */}
        <section className="w-full max-w-7xl mx-auto px-6 py-28 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white"
          >
            Live Markets
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300 border-collapse">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-4 font-semibold text-white">Symbol</th>
                  <th className="p-4 font-semibold text-white">Price</th>
                  <th className="p-4 font-semibold text-white">Change</th>
                  <th className="p-4 font-semibold text-white">Graph</th>
                </tr>
              </thead>
              <tbody>
                {stockData.length > 0 ? (
                  stockData.map((stock, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="border-b border-gray-600 hover:bg-gray-700"
                    >
                      <td className="p-4">{stock.symbol}</td>
                      <td className="p-4">${stock.price}</td>
                      <td className={parseFloat(stock.change) >= 0 ? "p-4 text-green-400" : "p-4 text-red-400"}>
                        {parseFloat(stock.change) >= 0 ? "+" : ""}{stock.change}%
                      </td>
                      <td className="p-4">
                        {/* Placeholder graph (static SVG) */}
                        <svg width="100" height="40" className="text-gray-500">
                          <polyline
                            points="0,40 20,30 40,35 60,20 80,25 100,15"
                            fill="none"
                            stroke={parseFloat(stock.change) >= 0 ? "#34D399" : "#F87171"}
                            strokeWidth="2"
                          />
                        </svg>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-gray-400">
                      Loading stock prices...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioManagement;