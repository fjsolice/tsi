"use client";

import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const PortfolioManagement = () => {
  // Mock forex data since FCS API is not working
  const forexData = [
    { symbol: "EUR/USD", bid: "1.0823", ask: "1.0825", changes: "0.15" },
    { symbol: "GBP/USD", bid: "1.2650", ask: "1.2653", changes: "-0.07" },
    { symbol: "USD/JPY", bid: "150.12", ask: "150.15", changes: "0.10" },
    { symbol: "USD/CHF", bid: "0.8725", ask: "0.8728", changes: "-0.05" },
    { symbol: "AUD/USD", bid: "0.6450", ask: "0.6452", changes: "0.08" },
    { symbol: "USD/CAD", bid: "1.3520", ask: "1.3523", changes: "0.03" },
    { symbol: "NZD/USD", bid: "0.5950", ask: "0.5953", changes: "-0.09" },
    { symbol: "EUR/GBP", bid: "0.8550", ask: "0.8552", changes: "0.06" },
    { symbol: "EUR/JPY", bid: "162.45", ask: "162.48", changes: "0.12" },
    { symbol: "GBP/JPY", bid: "189.75", ask: "189.78", changes: "-0.04" },
  ];

  const controls = useAnimation();

  // Animation for forex ticker
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: forexData.length * 2, // Smooth scroll
          ease: "linear",
        },
      },
    });
  }, [controls]); // Ensure proper closure of useEffect

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Forex Ticker */}
      <div className="w-full bg-gradient-to-r from-black to-gray-800 py-2 shadow-lg sticky top-0 z-20">
        <motion.div
          className="flex space-x-6 whitespace-nowrap text-sm"
          animate={controls}
          style={{ willChange: "transform" }}
        >
          {forexData.map((pair, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="font-semibold text-white">{pair.symbol}</span>
              <span className="text-gray-300">Bid: {pair.bid}</span>
              <span className="text-gray-300">Ask: {pair.ask}</span>
              <span className={parseFloat(pair.changes) >= 0 ? "text-green-400" : "text-red-400"}>
                {parseFloat(pair.changes) >= 0 ? "+" : ""}{pair.changes}%
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="pt-0 pb-40 relative">
        {/* Section 1: Hero - Invest Confidently */}
        <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 opacity-40"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <Image
              src="/images/portfolio-hero.jpg" // Replace with actual image path
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
              Let us structure your portfolio for you. We simplify capital markets investing with research-driven strategies that maximize returns while you retain full control of your CDS/trading account. Our mission is to empower you with informed decisions while you keep full access to your funds.
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
                src="/images/trusted-guide.jpg" // Replace with actual image path
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
                image: "/images/professionals.jpg", // Replace with actual image path
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
                image: "/images/education.jpg", // Replace with actual image path
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

        {/* Section 7: Achieving More Together */}
        <section className="w-full bg-gray-800 py-28 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-12 text-white"
          >
            Achieving More Together
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
              { value: "5K+", label: "Small and mid-sized corporate trained individuals" },
              { value: "100K+", label: "Participants coached globally since 2018" },
              { value: "$3.4M+", label: "Consultation loans and lines of credit to SME businesses in 5 years" },
              { value: "$10M+", label: "Combined individual and corporate portfolio structured solutions across Africa" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioManagement;