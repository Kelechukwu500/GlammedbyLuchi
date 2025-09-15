import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Video data array (pointing to public/videos)
const videos = [
  {
    src: "/videos/oluchi18.mp4",
    title: "Bridal Glam",
    description: "A classy and minimalist look for formal occasions.",
  },
  {
    src: "/videos/oluchi2.mp4",
    title: "Editorial Look",
    description:
      "High-fashion editorial makeup with bold and striking details.",
  },
  {
    src: "/videos/oluchi3.mp4",
    title: "Classic Party Look",
    description: "Elegant evening glam for parties and special occasions.",
  },
  {
    src: "/videos/oluchi4.mp4",
    title: "Bold Transformation",
    description: "Vibrant colors and artistic flair for bold makeup lovers.",
  },
  {
    src: "/videos/oluchi5.mp4",
    title: "Natural Glow",
    description: "Minimal glam that enhances your everyday radiant look.",
  },
  {
    src: "/videos/oluchi6.mp4",
    title: "Bridal Trial",
    description: "Testing perfect shades for a stunning bridal appearance.",
  },
  {
    src: "/videos/oluchi7.mp4",
    title: "Corporate Look",
    description: "A touch of culture with makeup for traditional weddings.",
  },
  {
    src: "/videos/oluchi8.mp4",
    title: "Traditional Glam",
    description:
      "Professional yet stylish look for office and business events.",
  },
  {
    src: "/videos/oluchi9.mp4",
    title: "Birthday Glam",
    description: "Special celebration makeup for birthdays and anniversaries.",
  },
  {
    src: "/videos/oluchi25.mp4",
    title: "Smokey Eyes",
    description: "Intense smokey eye for a glamorous night-out look.",
  },
  {
    src: "/videos/oluchi11.mp4",
    title: "Bridesmaids Look",
    description: "Fresh and uniform makeup for bridal team and friends.",
  },
  {
    src: "/videos/oluchi12.mp4",
    title: "Engagement Shoot",
    description: "Soft glam for capturing timeless engagement photos.",
  },
  {
    src: "/videos/oluchi13.mp4",
    title: "Matte Perfection",
    description: "Oil-free matte finish for long-lasting wear.",
  },
  {
    src: "/videos/oluchi14.mp4",
    title: "Glitter Glam",
    description: "Sparkle and shine with glitter-infused makeup looks.",
  },
  {
    src: "/videos/oluchi15.mp4",
    title: "Photo Shoot Glam",
    description: "Makeup tailored for professional photography sessions.",
  },
  {
    src: "/videos/oluchi16.mp4",
    title: "Red Carpet Look",
    description: "Luxurious makeup designed for spotlight events.",
  },
  {
    src: "/videos/oluchi17.mp4",
    title: "Traditional Ceremony",
    description: "Glamorous touch for cultural ceremonies and events.",
  },
  {
    src: "/videos/oluchi1.mp4",
    title: "Simple Elegance",
    description: "Soft and radiant bridal makeup that enhances natural beauty.",
  },
  {
    src: "/videos/oluchi19.mp4",
    title: "Runway Makeup",
    description: "Bold artistic glam designed for runway fashion shows.",
  },
  {
    src: "/videos/oluchi20.mp4",
    title: "Evening Dinner Look",
    description: "Elegant dinner party glam to leave lasting impressions.",
  },
  {
    src: "/videos/oluchi21.mp4",
    title: "Festival Glam",
    description: "Creative and colorful glam for fun festival events.",
  },
  {
    src: "/videos/oluchi22.mp4",
    title: "Beach Photoshoot",
    description: "Soft bronzed look for glowing beach photos.",
  },
  {
    src: "/videos/oluchi26.mp4",
    title: "Casual Day Out",
    description: "Fresh natural glam for casual outings.",
  },
  {
    src: "/videos/oluchi24.mp4",
    title: "Bridal Reception",
    description: "Glamorous look perfect for bridal receptions.",
  },
];

const VideoGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-black to-gray-900 py-12 px-6 mt-32 sm:mt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 drop-shadow-lg">
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
