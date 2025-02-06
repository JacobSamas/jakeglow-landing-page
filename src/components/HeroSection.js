"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef(null);

  // GSAP Animation for Floating Elements
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".float", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center bg-dark text-white">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-dark to-dark opacity-80"></div>

      {/* Animated Content */}
      <div className="relative z-10 text-center">
        {/* Title Animation */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          Welcome to <span className="text-primary">JakeGlow</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-4 text-lg text-gray-300"
        >
          Elevate your style with premium salon services.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-6 px-6 py-3 bg-primary text-white rounded-xl flex items-center gap-2 font-semibold hover:bg-opacity-90 transition"
        >
          Get Started <ArrowRight size={20} />
        </motion.button>
      </div>

      {/* Floating Icons (No Images) */}
      <motion.div className="absolute top-20 left-20 float" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        <svg className="w-12 h-12 text-gold opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2L15 8l6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1 3-6z" />
        </svg>
      </motion.div>

      <motion.div className="absolute bottom-20 right-20 float" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
        <svg className="w-10 h-10 text-lavender opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </motion.div>
    </section>
  );
}
