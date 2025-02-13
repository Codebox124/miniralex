import Image from "next/image";

const ExplorationHighlights = () => {
    return (
        <div className="exploreimg">
            <section className=" text-white max-w-7xl mx-auto py-16 px-6 md:px-16 flex flex-col md:flex-row items-center">
                {/* Left Content */}
                <div className="md:w-1/2 space-y-6">
                    <p className="text-yellow-400 font-semibold uppercase border-l-2 border-yellow-400 pl-2">
                        Exploration Highlights
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Bringing the World <br />
                        <span className="text-yellow-400">On-Chain</span>
                    </h2>
                    <p className="text-gray-300 max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        nsectetur adipiscing elit, sed do Lorem ipsum dolor sit a.
                    </p>

                    {/* Stats */}
                    <div className="flex space-x-10">
                        <div>
                            <p className="text-4xl font-bold text-yellow-400">$1B+</p>
                            <p className="text-gray-300">Yearly Growth</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-yellow-400">500K+</p>
                            <p className="text-gray-300">Monthly Growth</p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 transition">
                        Explore Now →
                    </button>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <Image
                        src="/map.png" // Replace with actual image path
                        alt="African Map with Highlights"
                        width={400}
                        height={400}
                        className=" max-w-lg"
                    />
                </div>
            </section>
        </div>
    );
};

export default ExplorationHighlights;
