import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Import Firestore
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const BookAnAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "", // ✅ Added time
    location: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Save appointment to Firestore
      await addDoc(collection(db, "appointments"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      // ✅ Success alert
      alert("✅ Your appointment has been booked successfully!");

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "", // ✅ Reset time
        location: "",
      });
    } catch (error) {
      console.error("Error saving appointment:", error);
      alert("❌ Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-rose-500 via-black to-gray-900 py-10 px-4 mt-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white text-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-4">
          Book Your Appointment
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in your details below and we’ll confirm your booking.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            placeholder="Enter your name"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            placeholder="Enter your email"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            placeholder="Enter your phone number"
          />

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
          />

          {/* ✅ Time */}
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            placeholder="Select time" // ✅ Added placeholder
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
            placeholder="Enter location"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 transition"
          >
            Send Appointment
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default BookAnAppointment;
