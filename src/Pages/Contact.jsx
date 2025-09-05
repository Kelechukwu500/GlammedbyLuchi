import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const mapCenter = [6.4491, 3.4826]; // Approx coordinates for Lekki Phase 1

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-rose-500 via-black to-black py-16 px-6 flex flex-col items-center mt-20">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 drop-shadow-lg mt-16 md:mt-0">
        Contact
      </h1>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        {/* Left Section: Contact Details */}
        <div className="bg-white/90 shadow-2xl rounded-2xl p-8 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-rose-600 mb-6">
            Get in Touch With Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We’d love to hear from you! Whether you want to book a service, ask
            questions, or just say hello, we’re always here for you. <br />{" "}
            <br />
            Visit our Lekki office for a warm welcome or reach out through any
            of our channels below. Let’s connect and make your experience
            unforgettable.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg shadow">
              <h3 className="font-semibold">📍 Address</h3>
              <p>
                26 Isujeh Street, Palm Springs,
                <br />
                Lekki Phase 1, Lagos, Nigeria.
              </p>
            </div>

            <div className="p-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg shadow">
              <h3 className="font-semibold">📞 Phone</h3>
              <p>08160023604</p>
            </div>

            {/* ✅ Added Email Section */}
            <div className="p-4 bg-gradient-to-r from-gray-700 to-black text-white rounded-lg shadow">
              <h3 className="font-semibold">📧 Email</h3>
              <p>Eresabaoluchi@gmail.com</p>
            </div>

            <div className="flex items-center gap-6 mt-4">
              {/* You can add social icons here if needed */}
            </div>
          </div>
        </div>

        {/* Right Section: Map */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <MapContainer
            center={mapCenter}
            zoom={15}
            style={{ height: "100%", minHeight: "450px", width: "100%" }}
            className="rounded-2xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={mapCenter}>
              <Popup>
                <strong>Our Office</strong> <br />
                26 Isujeh Street, Palm Springs,
                <br />
                Lekki Phase 1, Lagos, Nigeria.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
