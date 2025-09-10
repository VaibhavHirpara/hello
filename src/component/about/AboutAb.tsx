import { CheckCircle } from "lucide-react";

const AboutAb = () => {
    return (
        <>
            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Images */}
                    <div className="relative flex justify-center">
                        {/* First Image */}
                        <img
                            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" // replace with your image path
                            alt="Laboratory"
                            className="rounded-xl shadow-lg w-80 h-64 object-cover"
                        />
                        {/* Second Image (overlapping) */}
                        <img
                            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" // replace with your image path
                            alt="Research"
                            className="rounded-xl shadow-lg w-72 h-56 object-cover absolute -bottom-20 right-10 border-4 border-white"
                        />
                        {/* Decorative Circle */}
                        <div className="absolute top-50 left-90 w-24 h-24 border-2 border-dotted border-blue-400 rounded-full"></div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
                            Who We Are
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                            About Our Labratory & Research Center
                        </h2>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0 mt-1" />
                                <span>
                                    At SKY, we put in a lot of effort every day to make sure that our reports are of
                                    high quality and that our customers have an exceptional experience.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0 mt-1" />
                                <span>
                                    SKY is a multi-specialty pathology laboratory that serves the fields of Molecular
                                    Pathology, Cytopathology, Biochemistry, Immunology, Serology, Hematopathology, Flow
                                    Cytometry, Histopathology, Cytogenetics, and Microbiology. All of these disciplines
                                    are housed under the same roof.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0 mt-1" />
                                <span>
                                    In addition to providing a wide range of clinical laboratory tests for the purpose
                                    of prognosis, early detection, diagnosis, and monitoring of diseases, SKY boasts of
                                    having state-of-the-art technology that has been built to produce excellent reports
                                    in the shortest amount of time feasible.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


        </>
    )
}

export default AboutAb