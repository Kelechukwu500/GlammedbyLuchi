import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Import videos from assets
import video1 from "../assets/oluchi1.mp4";
import video2 from "../assets/oluchi2.mp4";
import video3 from "../assets/oluchi3.mp4";
import video4 from "../assets/oluchi4.mp4";
import video5 from "../assets/oluchi5.mp4";
import video6 from "../assets/oluchi6.mp4";
import video7 from "../assets/oluchi7.mp4";
import video8 from "../assets/oluchi8.mp4";
import video9 from "../assets/oluchi9.mp4";
import video10 from "../assets/oluchi10.mp4";
import video11 from "../assets/oluchi11.mp4";
import video12 from "../assets/oluchi12.mp4";
import video13 from "../assets/oluchi13.mp4";
import video14 from "../assets/oluchi14.mp4";
import video15 from "../assets/oluchi15.mp4";
import video16 from "../assets/oluchi16.mp4";
import video17 from "../assets/oluchi17.mp4";
import video18 from "../assets/oluchi18.mp4";
import video19 from "../assets/oluchi19.mp4";
import video20 from "../assets/oluchi20.mp4";
import video21 from "../assets/oluchi21.mp4";
import video22 from "../assets/oluchi22.mp4";
import video23 from "../assets/oluchi23.mp4";
import video24 from "../assets/oluchi24.mp4";

// ✅ Video data array
const videos = [
  {
    src: video1,
    title: "Bridal Glam",
    description: "Soft and radiant bridal makeup that enhances natural beauty.",
  },
  {
    src: video2,
    title: "Editorial Look",
    description:
      "High-fashion editorial makeup with bold and striking details.",
  },
  {
    src: video3,
    title: "Classic Party Look",
    description: "Elegant evening glam for parties and special occasions.",
  },
  {
    src: video4,
    title: "Bold Transformation",
    description: "Vibrant colors and artistic flair for bold makeup lovers.",
  },
  {
    src: video5,
    title: "Natural Glow",
    description: "Minimal glam that enhances your everyday radiant look.",
  },
  {
    src: video6,
    title: "Bridal Trial",
    description: "Testing perfect shades for a stunning bridal appearance.",
  },
  {
    src: video7,
    title: "Traditional Glam",
    description: "A touch of culture with makeup for traditional weddings.",
  },
  {
    src: video8,
    title: "Corporate Look",
    description:
      "Professional yet stylish look for office and business events.",
  },
  {
    src: video9,
    title: "Birthday Glam",
    description: "Special celebration makeup for birthdays and anniversaries.",
  },
  {
    src: video10,
    title: "Smokey Eyes",
    description: "Intense smokey eye for a glamorous night-out look.",
  },
  {
    src: video11,
    title: "Bridesmaids Look",
    description: "Fresh and uniform makeup for bridal team and friends.",
  },
  {
    src: video12,
    title: "Engagement Shoot",
    description: "Soft glam for capturing timeless engagement photos.",
  },
  {
    src: video13,
    title: "Matte Perfection",
    description: "Oil-free matte finish for long-lasting wear.",
  },
  {
    src: video14,
    title: "Glitter Glam",
    description: "Sparkle and shine with glitter-infused makeup looks.",
  },
  {
    src: video15,
    title: "Photo Shoot Glam",
    description: "Makeup tailored for professional photography sessions.",
  },
  {
    src: video16,
    title: "Red Carpet Look",
    description: "Luxurious makeup designed for spotlight events.",
  },
  {
    src: video17,
    title: "Traditional Ceremony",
    description: "Glamorous touch for cultural ceremonies and events.",
  },
  {
    src: video18,
    title: "Simple Elegance",
    description: "A classy and minimalist look for formal occasions.",
  },
  {
    src: video19,
    title: "Runway Makeup",
    description: "Bold artistic glam designed for runway fashion shows.",
  },
  {
    src: video20,
    title: "Evening Dinner Look",
    description: "Elegant dinner party glam to leave lasting impressions.",
  },
  {
    src: video21,
    title: "Festival Glam",
    description: "Creative and colorful glam for fun festival events.",
  },
  {
    src: video22,
    title: "Beach Photoshoot",
    description: "Soft bronzed look for glowing beach photos.",
  },
  {
    src: video23,
    title: "Casual Day Out",
    description: "Fresh natural glam for casual outings.",
  },
  {
    src: video24,
    title: "Bridal Reception",
    description: "Glamorous look perfect for bridal receptions.",
  },
];

const VideoGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-black to-gray-900 py-12 px-6 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 drop-shadow-lg">
        Video Gallery
      </h1>

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
