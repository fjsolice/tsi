"use client"
import { jsPDF } from "jspdf";
import { motion } from "framer-motion";


const AdmissionPDFOverview = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(22);
    doc.text("Admissions Process Overview", 20, 30);

    // Add content
    doc.setFontSize(16);
    doc.text("Considering attending a program at TSI?", 20, 50);
    doc.text("Print this admissions process overview for easy reference.", 20, 60);

    // Add a download link or button (optional)
    doc.text("Download PDF", 20, 80);

    // Save or download the PDF
    doc.save("admissions-process-overview.pdf");
  };

  return (
    <div className="bg-white py-28 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col h-[400px] justify-between relative"
        >
          {/* Title */}
          <h2 className="text-2xl font-bold">
            Considering attending a program at TSI?
          </h2>
          {/* Subtitle with reduced margin */}
          <p className="mt-4 text-lg text-gray-300">
            Print this admissions process overview for easy reference.
          </p>
          {/* Button with PDF generation */}
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded-md flex items-center gap-2 mt-auto w-max"
            onClick={generatePDF} // Trigger PDF generation
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
              backgroundImage: `url('/images/investorpic.jpg')`, // Ensure image has a file extension
            }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdmissionPDFOverview;
