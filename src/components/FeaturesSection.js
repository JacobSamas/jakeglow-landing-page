"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Scissors, Sparkles, SprayCan, Clock, Users, ShieldCheck } from "lucide-react";

const features = [
  { icon: Scissors, title: "Expert Stylists", desc: "Get styled by the best in the industry." },
  { icon: Sparkles, title: "Luxury Treatments", desc: "Experience premium hair and skin care." },
  { icon: SprayCan, title: "Organic Products", desc: "We use eco-friendly, natural products." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book your session at your convenience." },
  { icon: Users, title: "Personalized Service", desc: "Tailored treatments just for you." },
  { icon: ShieldCheck, title: "Hygiene & Safety", desc: "We follow top safety standards." },
];

export default function FeaturesSection() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      setTriggerAnimation(true);
    } else {
      setTriggerAnimation(false);
    }
  }, [inView]);

  return (
    <section id="services" className="py-20 bg-dark text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-primary"
        >
          Why Choose JakeGlow?
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-dark p-6 rounded-xl shadow-md border border-gray-700 hover:border-primary transition-all relative overflow-hidden cursor-pointer"
            >
              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-primary opacity-10 group-hover:opacity-20 transition duration-300 blur-lg"></div>

              {/* Icon */}
              <feature.icon className="text-primary w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
