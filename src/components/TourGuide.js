"use client";

import { useEffect } from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css"; 

export default function TourGuide() {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        scrollTo: true,
        cancelIcon: { enabled: true },
        classes: "jakeglow-tour", 
      },
      useModalOverlay: true,
    });

    tour.addStep({
      id: "intro",
      title: "👋 Welcome to JakeGlow",
      text: "Let's take a quick tour of our salon experience website.",
      buttons: [{ text: "Next", action: tour.next }],
    });

    tour.addStep({
      id: "menu",
      title: "Navigation Menu",
      text: "Use the top menu to navigate through different sections of the site.",
      attachTo: { element: "#menu", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next },
      ],
    });

    tour.addStep({
      id: "hero",
      title: "Hero Section",
      text: "This is the first thing users see. It introduces JakeGlow's luxury salon services.",
      attachTo: { element: "#hero", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next },
      ],
    });

    tour.addStep({
      id: "features",
      title: "Why Choose Us?",
      text: "We provide luxury treatments, expert stylists, and personalized service.",
      attachTo: { element: "#services", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next },
      ],
    });

    tour.addStep({
      id: "testimonials",
      title: "Client Reviews",
      text: "Read what our happy clients have to say!",
      attachTo: { element: "#testimonials", on: "top" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next },
      ],
    });

    tour.addStep({
      id: "pricing",
      title: "Pricing Plans",
      text: "Select from our Basic, Premium, or Luxury packages.",
      attachTo: { element: "#pricing", on: "top" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next },
      ],
    });

    tour.addStep({
      id: "contact",
      title: "Contact Us",
      text: "Have questions? You can reach out to us here.",
      attachTo: { element: "#contact", on: "top" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next },
      ],
    });

    tour.addStep({
      id: "footer",
      title: "Stay Connected",
      text: "Follow us on social media or navigate quickly using footer links.",
      attachTo: { element: "footer", on: "top" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Finish", action: tour.complete },
      ],
    });

    if (!localStorage.getItem("seenTour")) {
      tour.start();
      localStorage.setItem("seenTour", "true");
    }

    window.startTour = () => tour.start();
  }, []);

  return (
    <button
      onClick={() => window.startTour()}
      className="fixed bottom-5 right-5 z-50 bg-primary text-white px-4 py-2 rounded-xl shadow-lg font-semibold hover:bg-opacity-90 transition"
    >
      Restart Tour
    </button>
  );
}
