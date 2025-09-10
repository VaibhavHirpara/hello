
import { ArrowUpRight, Check } from "lucide-react"; // install lucide-react for icons

const tests = [
  {
    id: 1,
    name: "CBC (HO)",
    parameters: "22 Parameters",
    price: "₹1400",
  },
  {
    id: 2,
    name: "CBC (HO)",
    parameters: "22 Parameters",
    price: "₹1400",
  },
  {
    id: 3,
    name: "CBC (HO)",
    parameters: "22 Parameters",
    price: "₹1400",
  },
  {
    id: 4,
    name: "CBC (HO)",
    parameters: "22 Parameters",
    price: "₹1400",
  },
  {
    id: 5,
    name: "CBC (HO)",
    parameters: "22 Parameters",
    price: "₹1400",
  },
];


const packages = [
  {
    id: 1,
    title: "UNIFIT BOSYPRO 1500",
    subtitle: "Health Check-up Packages",
    features: ["CBC", "ESR 1 Hour", "FBS", "PPBS"],
    price: 1400,
    oldPrice: 2100,
    discount: "UP TO 50% OFF",
    color: "bg-sky-500",
  },
  {
    id: 2,
    title: "UNIFIT SENIOR CITIZEN MALE",
    subtitle: "Health Check-up (Male)",
    features: ["CBC", "ESR 1 Hour", "FBS", "PPBS"],
    price: 1400,
    oldPrice: 2100,
    discount: "UP TO 50% OFF",
    color: "bg-yellow-600",
  },
];

export default function BloodTests() {
  return (
    <>
      <div className=" max-w-7xl mx-auto py-16 px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-blue-500 uppercase tracking-wide text-sm font-semibold">
            Lorem Ipsum
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Blood Tests</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-500 text-2xl">💧</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg">{test.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{test.parameters}</p>


              {/* Book Now Button */}
              <div className="flex justify-between items-center ">
                <p className="text-xl font-bold mb-4">{test.price}</p>
                <button className="bg-blue-500  text-white p-2 rounded-full hover:bg-blue-600 transition">

                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-yellow-500 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-600 transition">
            View All Tests <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
      <div className="my-15 bg-white flex items-center justify-center p-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl w-full">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${pkg.color} relative text-white rounded-xl p-6 shadow-lg`}
            >
              {/* Discount Badge */}
              <div className="absolute -top-4 right-6 bg-black text-white text-xs font-bold px-3 py-2 rounded-b-lg">
                {pkg.discount}
              </div>

              {/* Content */}
              <h2 className="text-lg font-bold">{pkg.title}</h2>
              <p className="text-sm mb-4">{pkg.subtitle}</p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-lg font-bold">
                ₹ {pkg.price}
                <span className="text-sm font-normal line-through ml-2">
                  ₹ {pkg.oldPrice}
                </span>
              </div>

              {/* Button */}
              <button className="mt-4 flex items-center bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                Book Now <ArrowUpRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
