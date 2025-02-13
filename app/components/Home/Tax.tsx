import Image from "next/image";

const TokenomicsSection = () => {
    return (
        <div className="bg-white">
            <section className=" py-16 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center ">
                {/* Left Image */}
                <div className="">
                    <Image
                        src="/tax.png"
                        alt="Workers in the field"
                        width={500}
                        height={500}
                        className="w-full rounded-xl"
                    />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 md:pl-10 space-y-6">
                    <p className="text-blue-900 font-semibold uppercase border-l-2 border-blue-900 pl-2">
                        Tokenomics
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-500">
                        A Dual-Token System
                    </h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, co ipiscing elit, sed do nsectetur
                        adipiscing elit, sed do Lorem ipsum dolor sit a.
                    </p>

                    {/* Icons & Subheadings */}
                    <div className="flex space-x-10">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="text-center">
                                <span className="text-4xl text-blue-900">💡</span>
                                <p className="text-blue-900 font-bold">Subheading</p>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <button className="border-2 border-blue-900 text-blue-900 font-bold px-6 py-3 rounded-md shadow-md hover:bg-blue-900 hover:text-white transition">
                        See Tokenization →
                    </button>
                </div>
            </section>
        </div>
    );
};

export default TokenomicsSection;
