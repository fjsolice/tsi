"use client";

import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import { useRef } from "react";

const AdmissionPDFOverview = () => {
  const pdfRef = useRef(null);

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Colors for black, white, and gray theme
    const black = "#000000"; // Full black background
    const white = "#FFFFFF"; // Pure white for primary text
    const lightGray = "#D1D5DB"; // Light gray for secondary text
    const midGray = "#6B7280"; // Mid gray for accents

    // Background (Solid Black)
    doc.setFillColor(black);
    doc.rect(0, 0, 210, 297, "F"); // Full page black background

    // Title Section
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(white);
    doc.text("Tanzania School of Investments", 20, 20, { align: "left" });
    doc.setFontSize(20);
    doc.setTextColor(midGray);
    doc.text("Admissions Overview", 20, 35, { align: "left" });

    // Welcome Section
    doc.setFontSize(16);
    doc.setTextColor(white);
    doc.text("Welcome to the Future of Financial Mastery", 20, 50);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(lightGray);
    doc.text(
      "At Tanzania School of Investments (TSI), we are committed to providing world-class financial education tailored for the modern investor. Our programs are designed to equip individuals with the skills, knowledge, and insights needed to navigate and excel in the dynamic world of finance and investments. Whether you are an aspiring investor, entrepreneur, or financial professional, our structured courses and hands-on mentorship will transform your financial future.",
      20,
      60,
      { maxWidth: 170 }
    );

    // Who Should Apply Section
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(white);
    doc.text("Who Should Apply?", 20, 100);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(lightGray);
    const whoText = [
      "Our programs are ideal for:",
      "• Ambitious individuals looking to build a strong foundation in financial markets.",
      "• Entrepreneurs and professionals aiming to optimize their investment strategies.",
      "• Corporate executives seeking advanced portfolio management insights.",
      "• Anyone eager to enhance their financial literacy and wealth-building capabilities.",
    ];
    doc.text(whoText, 20, 110, { maxWidth: 170 });

    // Fast-Track Your Admission Section
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(white);
    doc.text("Fast-Track Your Admission in 5 Steps", 20, 150);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(lightGray);

    const steps = [
      "Step 1: Explore Our Offerings",
      "We provide comprehensive financial education programs that blend theoretical learning with practical application. Our courses range from 1 to 4 months, followed by an extended mentorship phase to ensure long-term success. To select the best program for you, review our course catalog or consult our Admissions Advisors for a tailored recommendation.",
      "Step 2: Submit Your Application",
      "The application process is simple and efficient. Complete the online application form with your details and financial goals. Ensure you provide all required information for a seamless evaluation. Our admissions team is available to assist you at every step.",
      "Step 3: Fast-Track Onboarding",
      "Once accepted, our onboarding process is quick, typically completed within a week. Students gain immediate access to essential learning resources, financial toolkits, and AI-powered market analysis tools to kickstart their journey.",
      "Step 4: Begin Your Learning & Practical Training",
      "Our programs combine structured learning with hands-on experience. The first 1 to 4 months focus on core financial principles, strategy development, and market simulations. The remainder of the year provides extensive mentorship, where students work closely with experts to build and manage their own investment portfolios in real-time market conditions.",
      "Step 5: Join the Elite TSI Alumni Network",
      "Upon course completion, you become part of an exclusive network of financial professionals and investors. Stay connected through our alumni community, networking events, and continuous education opportunities to further enhance your expertise.",
    ];

    let yOffset = 160;
    steps.forEach((step, index) => {
      if (index % 2 === 0) {
        doc.setFont("Helvetica", "bold");
        doc.setTextColor(midGray); // Use mid gray for step titles
      } else {
        doc.setFont("Helvetica", "normal");
        doc.setTextColor(lightGray);
      }
      doc.text(step, 20, yOffset, { maxWidth: 170 });
      yOffset += index % 2 === 0 ? 10 : 20;
    });

    // New Page for Exclusive Benefits
    doc.addPage();
    doc.setFillColor(black);
    doc.rect(0, 0, 210, 297, "F");

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(white);
    doc.text("Exclusive Benefits of Joining TSI", 20, 20);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(lightGray);
    const benefits = [
      "• World-Class Curriculum: Designed with industry-leading methodologies and real-world case studies.",
      "• AI-Driven Market Insights: Gain access to cutting-edge financial technology and market analytics.",
      "• Practical Portfolio Development: Build and manage real investment portfolios under expert guidance.",
      "• Close-Knit Mentorship: Receive one-on-one coaching and strategic advisory support.",
      "• Global Networking Opportunities: Connect with like-minded professionals and investment experts.",
    ];
    doc.text(benefits, 20, 30, { maxWidth: 170 });

    // Call to Action
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(white);
    doc.text("Take the First Step Towards Financial Mastery", 20, 80);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(lightGray);
    doc.text(
      "Are you ready to unlock your financial potential? Apply today and embark on a transformative learning experience with Tanzania School of Investments. For inquiries, contact our Admissions Office at admissions@tsi.ac.tz or +255 123 456 789.",
      20,
      90,
      { maxWidth: 170 }
    );

    // Add Image (Placeholder - Requires an actual image file)
    doc.addImage("/images/tsi.png", "PNG", 150, 250, 40, 40); // Replace with actual image path

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(white);
    doc.text("© 2025 Tanzania School of Investments", 20, 285, { align: "left" });
    doc.setTextColor(midGray);
    doc.text("www.tsi.ac.tz", 180, 285, { align: "right" });

    // Save the PDF
    doc.save("TSI_Admissions_Process_Overview.pdf");
  };

  return (
    <div className="bg-white py-28 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        ref={pdfRef}
      >
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col h-[400px] justify-between relative"
        >
          <h2 className="text-2xl font-bold">
            Considering attending a program at TSI?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Print this admissions process overview for easy reference.
          </p>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-md flex items-center gap-2 mt-auto w-max"
            onClick={generatePDF}
          >
            Process Overview PDF
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 12a1 1 0 102 0V4a1 1 0 10-2 0v8zM5 11a1 1 0 10-2 0v3.586l-.293-.293a1 1 0 00-1.414 0l-.293.293V11a1 1 0 10-2 0v3a2 2 0 002 2h12a2 2 0 002-2v-3a1 1 0 10-2 0v3.586l-.293-.293a1 1 0 00-1.414 0L13 14.586V11a1 1 0 10-2 0v3a1 1 0 10-2 0v-3z" />
            </svg>
          </button>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg shadow-lg overflow-hidden h-[400px]"
        >
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/investorpic.jpg')`, // Ensure image exists
            }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdmissionPDFOverview;