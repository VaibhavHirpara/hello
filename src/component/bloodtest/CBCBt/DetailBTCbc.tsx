const parameters = [
  "Haemoglobin (Hb)",
  "RBC Count (Hb)",
  "Hematocrit (Hct)",
  "MCH (Hb)",
  "MCHC (Hb)",
  "RDW (Hb)",
  "Nucleated RBC (NRBC)",
  "WBC Count (Hb)",
  "Neutrophils (Hb)",
  "Lymphocytes (Hb)",
  "Monocytes (Hb)",
  "Basophils (Hb)",
  "IMG (Hb)",
  "Absolute Neutrophil Count",
  "Eosinophils (Hb)",
  "Absolute Basophil Count",
  "Absolute Eosinophil Count",
  "Platelet Count (Hb)",
  "Absolute Monocyte Count",
  "MPV (Hb)",
  "Absolute Lymphocyte Count",
];

const sections = [
  {
    title: "Red Platelets (RBCs):",
    content: [
      {
        label: "Portrayal",
        text: "RBCs are answerable for conveying oxygen from the lungs to the remainder of the body and taking carbon dioxide back to the lungs to be breathed out.",
      },
      {
        label: "Estimation",
        text: "The test includes the quantity of RBCs in a given volume of blood.",
      },
    ],
  },
  {
    title: "White Platelets (WBCs):",
    content: [
      {
        label: "Portrayal",
        text: "WBCs are essential for the safe framework and assist the body with battling contamination and different illnesses.",
      },
      {
        label: "Estimation",
        text: "The test includes the quantity of WBCs in a given volume of blood.",
      },
    ],
  },
  {
    title: "Hemoglobin (Hgb):",
    content: [
      {
        label: "Depletion",
        text: "Hemoglobin is a protein in red platelets that conveys oxygen. It gives blood its red tone.",
      },
      {
        label: "Estimation",
        text: "The test estimates how much hemoglobin is in the blood.",
      },
    ],
  },
  {
    title: "Hematocrit (Hct):",
    content: [
      {
        label: "Portrayal",
        text: "Hematocrit estimates the extent of blood that is comprised of red platelets. It is communicated as a rate.",
      },
      {
        label: "Estimation",
        text: "The test estimates the proportion of the volume of red platelets to the total volume of blood.",
      },
    ],
  },
  {
    title: "Platelets:",
    content: [
      {
        label: "Portrayal",
        text: "Platelets are little cell sections that assume a critical role in blood thickening and wound recuperating.",
      },
      {
        label: "Estimation",
        text: "The test includes the quantity of platelets in a given volume of blood.",
      },
    ],
  },
  {
    title: "Mean Corpuscular Volume (MCV):",
    content: [
      {
        label: "Depletion",
        text: "MCV estimates the typical size of red platelets.",
      },
      {
        label: "Estimation",
        text: "The test works out the normal volume of a red platelet.",
      },
    ],
  },
  {
    title: "Mean Corpuscular Hemoglobin (MCH):",
    content: [
      {
        label: "Depletion",
        text: "MCH estimates the typical measure of hemoglobin in a solitary red platelet.",
      },
      {
        label: "Estimation",
        text: "The test works out the normal mass of hemoglobin per red platelet.",
      },
    ],
  },
  {
    title: "Mean Corpuscular Hemoglobin Focus (MCHC):",
    content: [
      {
        label: "Depletion",
        text: "MCHC estimates the typical grouping of hemoglobin in a given volume of red platelets.",
      },
      {
        label: "Estimation",
        text: "The test works out the centralization of hemoglobin in a given volume of stuffed red platelets.",
      },
    ],
  },
];

const DetailBTCbc = () => {
  return (
   <>
   
     <div className="min-h-screen max-w-7xl mx-auto p-8 my-20" >
      {/* Parameters Section */}
      <div className="bg-white  p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Parameters Included in CBC</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-gray-700 text-sm">
          {parameters.map((param, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-md text-gray-800"
            >
              {param}
            </span>
          ))}
        </div>
      </div>

      {/* Test Description */}
      <div className="bg-white  p-6">
        <h2 className="text-xl font-bold mb-4">Test Description</h2>
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          A Total Blood Count (CBC) is a broadly utilized indicative blood test
          that assesses the general strength of your blood and identifies
          various problems, like diseases, pallor, and leukemia. Here is a
          depiction of the principal parts estimated in a CBC:
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {section.content.map((c, i) => (
                  <li key={i}>
                    <span className="font-medium">{c.label}:</span> {c.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
   </>
  )
}

export default DetailBTCbc