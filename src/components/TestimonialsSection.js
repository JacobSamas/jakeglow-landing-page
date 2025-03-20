"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophia Martinez",
    review: "Absolutely loved my new haircut! The stylists here are top-notch.",
    rating: 5,
  },
  {
    name: "James Carter",
    review: "JakeGlow gave me the best salon experience ever. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    review: "A premium experience from start to finish. The organic products are a plus!",
    rating: 5,
  },
  {
    name: "Liam Anderson",
    review: "Fantastic service! Booking was easy and the results were stunning.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    setTriggerAnimation(inView);
  }, [inView]);

  return (
    <section id="testimonials" className="py-20 bg-dark text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-primary"
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div id="profile" className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={triggerAnimation ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative bg-dark p-6 rounded-xl shadow-md border border-gray-700 transition-all cursor-pointer overflow-hidden"
            >
              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-primary opacity-10 hover:opacity-20 transition duration-300 blur-xl"></div>

              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-primary opacity-40" size={32} />

              {/* Client Review */}
              <p className="text-gray-300 mb-4">{testimonial.review}</p>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 text-gold mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              {/* Client Name */}
              <h4 className="text-xl font-semibold">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
