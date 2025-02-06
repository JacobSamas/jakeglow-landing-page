"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CheckCircle, ArrowRight } from "lucide-react";

const pricingPlans = {
  monthly: [
    {
      name: "Basic",
      price: "$19",
      features: ["Haircut", "Basic Styling", "Shampoo"],
    },
    {
      name: "Premium",
      price: "$49",
      features: ["Haircut", "Premium Styling", "Hair Treatment", "Shampoo"],
    },
    {
      name: "Luxury",
      price: "$99",
      features: ["All Premium Features", "Facial Spa", "Exclusive VIP Service"],
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "$199",
      features: ["Haircut", "Basic Styling", "Shampoo"],
    },
    {
      name: "Premium",
      price: "$499",
      features: ["Haircut", "Premium Styling", "Hair Treatment", "Shampoo"],
    },
    {
      name: "Luxury",
      price: "$999",
      features: ["All Premium Features", "Facial Spa", "Exclusive VIP Service"],
    },
  ],
};

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    setTriggerAnimation(inView);
  }, [inView]);

  return (
    <section id="pricing" className="py-20 bg-dark text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-primary"
        >
          Choose Your Plan
        </motion.h2>

        {/* Billing Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 text-lg font-semibold ${
              billingCycle === "monthly" ? "bg-primary text-white" : "bg-gray-700 text-gray-300"
            } rounded-l-xl transition`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 py-2 text-lg font-semibold ${
              billingCycle === "yearly" ? "bg-primary text-white" : "bg-gray-700 text-gray-300"
            } rounded-r-xl transition`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans[billingCycle].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={triggerAnimation ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255, 215, 0, 0.6)" }}
              className="relative bg-dark p-6 rounded-xl shadow-md border border-gray-700 transition-all cursor-pointer overflow-hidden"
            >
              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-primary opacity-10 hover:opacity-20 transition duration-300 blur-xl"></div>

              {/* Plan Name & Price */}
              <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
              <p className="text-4xl font-extrabold mt-2">{plan.price}</p>

              {/* Features List */}
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="text-gold" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Select Plan Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-6 px-6 py-3 bg-primary text-white rounded-xl flex items-center gap-2 font-semibold hover:bg-opacity-90 transition"
              >
                Get Started <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
