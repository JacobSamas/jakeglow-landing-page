"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    setTriggerAnimation(inView);
  }, [inView]);

  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div ref={ref} className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-primary"
        >
          Get in Touch
        </motion.h2>

        {/* Email Icon Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-6"
        >
          <Mail className="text-primary w-14 h-14 animate-bounce" />
        </motion.div>

        {/* Contact Form */}
        <div className="mt-12">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-3xl mx-auto"
          >
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-gray-300 text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-gray-300 text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-gray-300 text-lg font-medium mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-primary text-white rounded-xl flex items-center gap-2 font-semibold hover:bg-opacity-90 transition"
            >
              Send Message <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
