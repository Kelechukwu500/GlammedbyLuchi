import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const About = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: closingRef, inView: closingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gradient-to-b from-rose-500 via-black to-black text-white py-16 px-6 md:px-16 min-h-screen mt-20">
      {/* Section Heading */}
      <motion.div
        ref={headingRef}
        variants={fadeUp}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg mt-16 md:mt-0">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Behind every flawless look is a passion for beauty, creativity, and
          confidence. I’m dedicated to making every client feel extraordinary,
          empowered, and picture-perfect for their special moments.
        </p>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        ref={cardsRef}
        variants={fadeUp}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {/* Card 1 */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-xl border border-rose-500/40 p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-rose-400 mb-4">My Journey</h3>
          <p className="text-gray-200 leading-relaxed">
            With over 5 years of experience in the beauty industry, I’ve
            mastered the art of makeup that enhances natural beauty without
            overshadowing individuality. My journey began with a love for
            colors, artistry, and confidence-building. Over time, I’ve worked
            with brides, celebrities, and countless amazing clients to create
            looks that last a lifetime in memories and photographs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-xl border border-rose-500/40 p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-rose-400 mb-4">
            My Philosophy
          </h3>
          <p className="text-gray-200 leading-relaxed">
            I believe makeup is more than just beauty — it’s a form of art that
            tells a story. My philosophy is centered around elegance, subtle
            glam, and enhancing confidence. Every client is unique, and I strive
            to tailor each look to highlight individuality, whether it’s for a
            wedding, editorial shoot, red carpet event, or everyday glow.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl shadow-xl border border-rose-500/40 p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-rose-400 mb-4">My Services</h3>
          <p className="text-gray-200 leading-relaxed">
            I specialize in bridal looks, traditional events, editorial and
            fashion shoots, celebrity glam, and personal makeup classes. My goal
            is to provide an experience where beauty meets professionalism —
            ensuring that every client not only looks flawless but also feels
            pampered, relaxed, and radiant. Whether it’s soft glam or bold
            statement looks, I bring artistry and precision to every session.
          </p>
        </div>
      </motion.div>

      {/* Closing Statement */}
      <motion.div
        ref={closingRef}
        variants={fadeUp}
        initial="hidden"
        animate={closingInView ? "visible" : "hidden"}
        className="mt-16 text-center max-w-4xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
          At the heart of my work is a passion for making women feel confident
          and empowered. Makeup is more than a transformation — it’s an
          experience. I’m here to create timeless beauty that celebrates who you
          are and what makes you shine.
        </p>
        {/* ✅ Routed Button */}
        <Link to="/book-an-appointment">
          <button className="mt-8 px-10 py-4 bg-rose-500 text-lg rounded-xl font-semibold hover:bg-rose-600 transition shadow-lg hover:shadow-rose-500/40">
            Book an Appointment
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
