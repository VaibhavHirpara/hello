import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    title: "UNIFIT DIAMOND @ UNIPATH",
    price: "₹1400",
    params: "22 Parameters Included",
    img: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "UNIFIT DIAMOND @ UNIPATH",
    price: "₹1400",
    params: "22 Parameters Included",
    img: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "UNIFIT DIAMOND @ UNIPATH",
    price: "₹1400",
    params: "22 Parameters Included",
    img: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "UNIFIT DIAMOND @ UNIPATH",
    price: "₹1400",
    params: "22 Parameters Included",
    img: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "UNIFIT DIAMOND @ UNIPATH",
    price: "₹1400",
    params: "22 Parameters Included",
    img: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "UNIFIT DIAMOND @ UNIPATH",
    price: "₹1400",
    params: "22 Parameters Included",
    img: "https://via.placeholder.com/300x200",
  },
  {
    id: 7,
    title: "UNIFIT DIAMOND @ UNIPATH",
    price: "₹1400",
    params: "22 Parameters Included",
    img: "https://via.placeholder.com/300x200",
  },
  {
    id: 8,
    title: "UNIFIT DIAMOND @ UNIPATH",
    price: "₹1400",
    params: "22 Parameters Included",
    img: "https://via.placeholder.com/300x200",
  },
];


const Packge = () => {
  return (
    <>
     <section className="max-w-7xl mx-auto bg-white py-12 ">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">
          Health Packages
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Popular Health Packages
        </h2>
      </div>

      {/* Packages Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={pkg.img}
              alt={pkg.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-sm text-gray-900">
                {pkg.title}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-600 text-sm">{pkg.params}</p>
                <p className="text-lg font-semibold text-gray-900">{pkg.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
       <Link to="/UNIFIT-PLUS"> <button className="flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
          View All Packages <ArrowRight size={18} />
        </button></Link>
      </div>

      {/* Emergency Banner */}
      <div className="mt-16 bg-gradient-to-r from-sky-500 to-sky-600 text-white p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-xl md:text-2xl font-bold text-center md:text-left">
          Need help on Emergency? Book Your Appointment Today.
        </h3>
        <button className="mt-4 md:mt-0 flex items-center gap-2 bg-white text-sky-600 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
          Make Appointment <ArrowRight size={18} />
        </button>
      </div>
    </section>
    </>
  )
}

export default Packge