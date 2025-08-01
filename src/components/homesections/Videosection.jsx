import React from "react";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://media.istockphoto.com/id/686312178/video/ball-bearing.mp4?s=mp4-640x640-is&k=20&c=SivLzPksP8JEP1JnOHaRRVCTergRPpAHuGNCJlloCwo="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content and Button */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Empowering Industries with Precision Bearings
        </h1>
        <p className="text-lg md:text-lg max-w-3xl mb-4">
          For over 40 years, we've been a trusted name in supplying
          high-performance industrial and automotive bearings to clients around
          the globe. Our expertise ensures operational excellence across diverse
          industries.
        </p>

        <Link href="/products">
          <button className="bg-green-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            View Our Bearings
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
