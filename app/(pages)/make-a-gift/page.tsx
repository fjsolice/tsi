"use client";

import Footer from "@/app/ui-components/footer";
import Header from "@/app/ui-components/header";
import { useState } from "react";

const MakeAGift = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");

  const presetAmounts = [10000, 25000, 50000, 75000, 100000, 500000, 1000000];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add donation processing logic here
    console.log("Donation submitted:", { donationAmount, donorName, email });
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Gift</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Support TSI’s mission by making a donation. Your gift helps us 
            empower the next generation of leaders and innovators in Tanzania.
          </p>
        </div>

        {/* Donation Form */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Donation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Preset Donation Amounts */}
              <div className="flex flex-wrap gap-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setDonationAmount(amount.toString())}
                    className={`px-6 py-2 rounded-full border ${
                      donationAmount === amount.toString()
                        ? "bg-white text-black"
                        : "border-gray-600 hover:border-white"
                    } transition-all duration-200`}
                  >
                    TZS{amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Or enter custom amount (TZS)
                </label>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:border-white"
                  placeholder="Enter amount"
                  min="1"
                />
              </div>

              {/* Donor Information */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:border-white"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:border-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200"
              >
                Donate Now
              </button>
            </form>
          </div>

          {/* Impact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Your Impact</h2>
            <div className="space-y-4 text-gray-300">
              <p>Your contribution directly supports:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Scholarships for talented Tanzanian students</li>
                <li>Modern educational facilities and resources</li>
                <li>Innovative programs in entrepreneurship</li>
                <li>Community development initiatives</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-md">
              <p className="text-sm text-gray-400">
                Tanzania School of Investments is a registered non-profit. All 
                donations are tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default MakeAGift;