import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Import videos from assets
import oluchi1 from "../assets/oluchi1.mp4";
import oluchi2 from "../assets/oluchi2.mp4";
import oluchi3 from "../assets/oluchi3.mp4";
import oluchi4 from "../assets/Oluchi4.mp4";
import oluchi5 from "../assets/oluchi5.mp4";
import oluchi6 from "../assets/oluchi6.mp4";
import oluchi7 from "../assets/oluchi7.mp4";
import oluchi8 from "../assets/oluchi8.mp4";
import oluchi9 from "../assets/oluchi9.mp4";
import oluchi10 from "../assets/oluchi10.mp4";
import oluchi11 from "../assets/oluchi11.mp4";
import oluchi12 from "../assets/oluchi12.mp4";
import oluchi13 from "../assets/oluchi13.mp4";
import oluchi14 from "../assets/oluchi14.mp4";
import oluchi15 from "../assets/oluchi15.mp4";
import oluchi16 from "../assets/oluchi16.mp4";
import oluchi17 from "../assets/oluchi17.mp4";
import oluchi18 from "../assets/oluchi18.mp4";
import oluchi19 from "../assets/oluchi19.mp4";
import oluchi20 from "../assets/oluchi20.mp4";
import oluchi21 from "../assets/oluchi21.mp4";
import oluchi22 from "../assets/oluchi22.mp4";
import oluchi23 from "../assets/oluchi23.mp4";
import oluchi24 from "../assets/oluchi24.mp4";

// ✅ Video data array
const videos = [
  {
    src: oluchi1,
    title: "Bridal Glam",
    description: "Soft and radiant bridal makeup that enhances natural beauty.",
  },
  {
    src: oluchi2,
    title: "Editorial Look",
    description:
      "High-fashion editorial makeup with bold and striking details.",
  },
  {
    src: oluchi3,
    title: "Classic Party Look",
    description: "Elegant evening glam for parties and special occasions.",
  },
  {
    src: oluchi4,
    title: "Bold Transformation",
    description: "Vibrant colors and artistic flair for bold makeup lovers.",
  },
  {
    src: oluchi5,
    title: "Natural Glow",
    description: "Minimal glam that enhances your everyday radiant look.",
  },
  {
    src: oluchi6,
    title: "Bridal Trial",
    description: "Testing perfect shades for a stunning bridal appearance.",
  },
  {
    src: oluchi7,
    title: "Traditional Glam",
    description: "A touch of culture with makeup for traditional weddings.",
  },
  {
    src: oluchi8,
    title: "Corporate Look",
    description:
      "Professional yet stylish look for office and business events.",
  },
  {
    src: oluchi9,
    title: "Birthday Glam",
    description: "Special celebration makeup for birthdays and anniversaries.",
  },
  {
    src: oluchi10,
    title: "Smokey Eyes",
    description: "Intense smokey eye for a glamorous night-out look.",
  },
  {
    src: oluchi11,
    title: "Bridesmaids Look",
    description: "Fresh and uniform makeup for bridal team and friends.",
  },
  {
    src: oluchi12,
    title: "Engagement Shoot",
    description: "Soft glam for capturing timeless engagement photos.",
  },
  {
    src: oluchi13,
    title: "Matte Perfection",
    description: "Oil-free matte finish for long-lasting wear.",
  },
  {
    src: oluchi14,
    title: "Glitter Glam",
    description: "Sparkle and shine with glitter-infused makeup looks.",
  },
  {
    src: oluchi15,
    title: "Photo Shoot Glam",
    description: "Makeup tailored for professional photography sessions.",
  },
  {
    src: oluchi16,
    title: "Red Carpet Look",
    description: "Luxurious makeup designed for spotlight events.",
  },
  {
    src: oluchi17,
    title: "Traditional Ceremony",
    description: "Glamorous touch for cultural ceremonies and events.",
  },
  {
    src: oluchi18,
    title: "Simple Elegance",
    description: "A classy and minimalist look for formal occasions.",
  },
  {
    src: oluchi19,
    title: "Runway Makeup",
    description: "Bold artistic glam designed for runway fashion shows.",
  },
  {
    src: oluchi20,
    title: "Evening Dinner Look",
    description: "Elegant dinner party glam to leave lasting impressions.",
  },
  {
    src: oluchi21,
    title: "Festival Glam",
    description: "Creative and colorful glam for fun festival events.",
  },
  {
    src: oluchi22,
    title: "Beach Photoshoot",
    description: "Soft bronzed look for glowing beach photos.",
  },
  {
    src: oluchi23,
    title: "Casual Day Out",
    description: "Fresh natural glam for casual outings.",
  },
  {
    src: oluchi24,
    title: "Bridal Reception",
    description: "Glamorous look perfect for bridal receptions.",
  },
];

const VideoGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-black to-gray-900 py-12 px-6 mt-20">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 drop-shadow-lg">
        Video Gallery
      </h1>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((video, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-tr from-black via-gray-900 to-rose-500 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <video
                src={video.src}
                controls
                className="w-full h-50 object-contain relative z-10"
                style={{ pointerEvents: "auto" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {video.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2">
                  {video.description}
                </p>
                <a
                  href={video.src}
                  download
                  className="inline-block mt-4 px-4 py-2 bg-rose-500 text-white font-semibold rounded-lg shadow hover:bg-rose-600 transition duration-300"
                >
                  Download Video
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoGallery;
