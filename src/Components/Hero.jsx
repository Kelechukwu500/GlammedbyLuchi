import React from "react";
import { Link } from "react-router-dom";
import oluchi from "../assets/oluchi.jpg";

const Hero = () => {
  return (
    <>
      {/* Added pt-28 so Hero doesn't overlap Navbar */}
      <div className="w-screen min-h-screen bg-gradient-to-b from-rose-500 via-black to-black relative pt-28">
        {/* Image */}
        <div className="absolute top-39 left-1/2 -translate-x-[35%] overflow-hidden">
          <img
            className="h-[180px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[420px] 2xl:h-[480px] object-contain"
            src={oluchi}
            alt="Oluchi Linda Eresaba"
          />
        </div>

        {/* Hero Section */}
        <div className="lg:px-16 px-4 pb-4 h-full flex flex-col sm:flex-row sm:items-center mt-[300px] sm:mt-0 text-white">
          {/* col -1  */}
          <div className="w-full flex flex-col z-10">
            <h4 className="text-lg font-semibold text-gray-200 xl:text-2xl">
              Hello Beautiful
            </h4>
            <h1 className="2xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold font-serif mt-2">
              I'm <span className="text-white">Oluchi Linda</span>
            </h1>
            <h1 className="md:text-6xl sm:text-4xl text-3xl font-semibold font-serif text-white">
              Eresaba
            </h1>
            <h4 className="text-rose-400 mt-4 lg:text-2xl xl:3xl">
              -- Professional Makeup Artist
            </h4>

            <p className="lg:w-[70%] w-full text-gray-100 text-md mt-4 md:text-lg 2xl:text-2xl leading-relaxed">
              Enhancing natural beauty with flawless artistry. I specialize in
              bridal, editorial, and event makeup that highlights confidence,
              elegance, and individuality. With a passion for creativity, I
              transform every face into a masterpiece.
            </p>

            <div>
              <Link to="/book-an-appointment">
                <button className="mt-6 px-6 py-2 bg-rose-500 text-rose-500 text-lg rounded-md lg:text-2xl hover:bg-rose-600 transition">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>

          {/* col-2 - Stats Section (mobile-friendly) */}
          <div className="w-full flex flex-col sm:flex-col justify-center mt-6 sm:mt-0 gap-6 bg-black/40 sm:bg-transparent p-4 rounded-lg z-10">
            <div className="flex flex-col sm:items-end items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold text-white">
                  3
                </h2>
                <h2 className="text-rose-400 xl:text-6xl md:text-7xl sm:text-4xl text-3xl font-extrabold">
                  +
                </h2>
              </div>
              <h4 className="text-sm sm:text-lg xl:text-2xl text-gray-200 text-center">
                Years of Experience
              </h4>
            </div>

            <div className="flex flex-col sm:items-end items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold text-white">
                  250
                </h2>
                <h2 className="text-rose-400 xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold">
                  +
                </h2>
              </div>
              <h4 className="text-sm sm:text-lg xl:text-2xl text-gray-200 text-center">
                Happy Clients
              </h4>
            </div>

            <div className="flex flex-col sm:items-end items-center">
              <div className="inline-flex gap-1 items-center">
                <h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold text-white">
                  100
                </h2>
                <h2 className="text-rose-400 xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold">
                  +
                </h2>
              </div>
              <h4 className="text-sm sm:text-lg xl:text-2xl text-gray-200 text-center">
                Bridal Looks Created
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
