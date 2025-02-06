"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Mouse Move for Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // GSAP Floating Animation
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

  // Re-trigger Animations on Scroll
  useEffect(() => {
    setTriggerAnimation(inView);
  }, [inView]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center bg-dark text-white overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-dark to-dark opacity-50 animate-gradient"></div>

      {/* Floating Particles (Extra Background Depth) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-1/4 w-20 h-20 bg-primary rounded-full opacity-30 blur-2xl"
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-24 h-24 bg-gold rounded-full opacity-30 blur-2xl"
          animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
      </div>

      {/* Animated Content */}
      <div ref={ref} className="relative z-10 text-center">
        {/* Hero Title with 3D Depth Effect */}
        <motion.h1
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={triggerAnimation ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            transform: `translateX(${mousePos.x}px) translateY(${mousePos.y}px)`,
          }}
          className="text-5xl md:text-7xl font-extrabold text-gold"
        >
          Welcome to <span className="text-primary">JakeGlow</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={triggerAnimation ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-4 text-lg text-gray-300"
        >
          Elevate your style with premium salon services.
        </motion.p>

        {/* Call-to-Action Button with Hover Effects */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={triggerAnimation ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-6 px-6 py-3 bg-primary text-white rounded-xl flex items-center gap-2 font-semibold hover:bg-opacity-90 transition"
        >
          Get Started <ArrowRight size={20} />
        </motion.button>
      </div>

      {/* Floating Icons with Mouse-Based Parallax */}
      <motion.div
        className="absolute top-20 left-20 float"
        style={{
          transform: `translateX(${mousePos.x / 2}px) translateY(${mousePos.y / 2}px)`,
        }}
      >
        <svg className="w-12 h-12 text-gold opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2L15 8l6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1 3-6z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 float"
        style={{
          transform: `translateX(${mousePos.x / -2}px) translateY(${mousePos.y / -2}px)`,
        }}
      >
        <svg className="w-10 h-10 text-lavender opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </motion.div>
    </section>
  );
}
