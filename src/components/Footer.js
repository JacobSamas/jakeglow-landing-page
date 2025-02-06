"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    setTriggerAnimation(inView);
  }, [inView]);

  return (
    <footer ref={ref} className="bg-dark py-10 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Logo & Tagline */}
        <h2 className="text-3xl font-bold text-primary">JakeGlow</h2>
        <p className="mt-2 text-gray-400">Experience the best in luxury salon services.</p>

        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-300">
          {["Home", "Services", "Pricing", "Testimonials", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition text-lg"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-6">
          {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-gray-400 hover:text-primary transition"
              whileHover={{ scale: 1.2 }}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-8 text-gray-500 text-sm">&copy; {new Date().getFullYear()} JakeGlow. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
}
