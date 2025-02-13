import { div } from 'framer-motion/client';
import Image from 'next/image';

export default function CommunityImpact() {
    return (
        <div className='  bg-white'>
            <section className="flex flex-col max-w-7xl mx-auto md:flex-row items-center  px-6 md:px-20 py-12">
                {/* Left Side - Images */}
                <div className="flex flex-row gap-4 w-full md:w-1/2">
                    <div className="relative  ">
                        <Image
                            src="/com.png"
                            alt="Mining operation"
                            width={250}
                            height={500}
                            className=""
                        />
                    </div>
                    <div className="relative mt-9 ">
                        <Image
                            src="/com_2.png"
                            alt="Worker at factory"
                            width={250}
                            height={500}
                            className=""
                        />
                    </div>
                </div>

                {/* Right Side - Text Content */}
                <div className="w-full md:w-1/2 text-left md:pl-12">
                    <h3 className="text-blue-800 font-bold text-lg uppercase">Community Impact</h3>
                    <h2 className="text-yellow-500 font-bold text-3xl md:text-4xl mt-2">We Want To Move Forward Together</h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul.
                    </p>
                    <button className="mt-6 bg-blue-900 text-white font-semibold py-3 px-6 rounded-md">
                        Our Projects For Future
                    </button>
                </div>
            </section>
        </div>
    );
}
