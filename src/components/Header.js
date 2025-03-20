"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Home, Scissors, BadgeDollarSign, Users, Mail, ShoppingCart } from "lucide-react";

export default function Header() {
  const [scrollingUp, setScrollingUp] = useState(true);
  let lastScrollY = 0;

  // GSAP Scroll Hide/Show Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY && scrollY > 50) {
        setScrollingUp(false); // Hide navbar on scroll down
      } else {
        setScrollingUp(true); // Show navbar on scroll up
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: scrollingUp ? 0 : -80, opacity: scrollingUp ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-dark bg-opacity-80 backdrop-blur-lg shadow-md z-50 transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold text-white flex items-center gap-2 hover:text-primary transition"
          whileHover={{ scale: 1.1 }}
        >
          <Scissors size={24} /> JakeGlow
        </motion.a>

        {/* Navigation with Icons */}
        <nav id="menu" className="hidden md:flex space-x-6">
          {[
            { href: "#home", icon: Home, label: "Home" },
            { href: "#services", icon: Scissors, label: "Services" },
            { href: "#pricing", icon: BadgeDollarSign, label: "Pricing" },
            { href: "#testimonials", icon: Users, label: "Testimonials" },
            { href: "#contact", icon: Mail, label: "Contact" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-white flex flex-col items-center gap-1 text-sm hover:text-primary transition"
              whileHover={{ scale: 1.1 }}
            >
              <item.icon size={22} />
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Book Now Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="px-5 py-2 bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition"
        >
          <ShoppingCart size={20} />
          Book Now
        </motion.a>
      </div>
    </motion.header>
  );
}
