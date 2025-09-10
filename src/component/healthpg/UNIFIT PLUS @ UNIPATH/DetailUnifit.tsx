import { useState } from "react";
import { ArrowRight } from "lucide-react";

const parameters = [
    "Haemoglobin (HO)",
    "RBC Count (HO)",
    "Hematocrit (HO)",
    "MCH (HO)",
    "MCHC (HO)",
    "RDW (HO)",
    "Nucleated RBC(NRBC)",
    "WBC Count (HO)",
    "Neutrophils (HO)",
    "Lymphocytes (HO)",
    "Monocytes (HO)",
    "Basophils (HO)",
    "IMG (HO)",
    "Absolute Neutrophil Count",
    "Eosinophils (HO)",
    "Absolute Basophil Count",
    "Absolute Eosinophil Count",
    "Platelet Count (HO)",
    "Absolute Monocyte Count",
    "MPV (HO)",
    "Absolute Lymphocyte Count",
];

const DetailUnifit = () => {
    const [showAll, setShowAll] = useState(true);
    return (
        <>
            <section className="max-w-7xl mx-auto bg-white py-12 ">
                {/* Title & Price */}
                <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        UNIFIT PLUS @ UNIPATH
                    </h1>
                    <p className="text-xl font-semibold text-gray-800 mt-2">₹250</p>
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Fasting"
                            className="w-10 h-10"
                        />
                        <div>
                            <p className="text-xs text-gray-600">Fasting Required</p>
                            <p className="text-sm font-semibold">Not Required</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Report"
                            className="w-10 h-10"
                        />
                        <div>
                            <p className="text-xs text-gray-600">Report Within</p>
                            <p className="text-sm font-semibold">Same Day</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Recommended"
                            className="w-10 h-10"
                        />
                        <div>
                            <p className="text-xs text-gray-600">Recommended</p>
                            <p className="text-sm font-semibold">Male, Female</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Schedule"
                            className="w-10 h-10"
                        />
                        <div>
                            <p className="text-xs text-gray-600">Schedule</p>
                            <p className="text-sm font-semibold">For Every Day</p>
                        </div>
                    </div>
                </div>

                {/* Call Button */}
                <div className="flex justify-end mb-6">
                    <button className="flex items-center gap-2 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
                        Please Call <ArrowRight size={18} />
                    </button>
                </div>

                {/* Parameters Section */}
                <div className="bg-gray-50 border rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-900">
                            Parameters Included in CBC
                        </h3>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
                        >
                            {showAll ? "View Less" : "View All"} <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-700">
                        {(showAll ? parameters : parameters.slice(0, 8)).map((param, i) => (
                            <p key={i}>• {param}</p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailUnifit