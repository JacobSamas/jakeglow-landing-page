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
        classes: "bg-gray-800 text-white p-4 rounded-lg shadow-lg",
      },
      useModalOverlay: true, 
    });

    tour.addStep({
      id: "intro",
      text: "👋 Welcome! Let's take a quick tour of the site.",
      buttons: [
        { text: "Next", action: tour.next, classes: "bg-blue-500 text-white px-3 py-1 rounded" },
      ],
    });

    tour.addStep({
      id: "menu",
      text: "This is the **navigation menu** where you can explore different sections.",
      attachTo: { element: "#menu", on: "bottom" },
      buttons: [{ text: "Next", action: tour.next, classes: "bg-blue-500 text-white px-3 py-1 rounded" }],
    });

    tour.addStep({
      id: "profile",
      text: "Click here to **view and edit your profile**.",
      attachTo: { element: "#profile", on: "right" },
      buttons: [{ text: "Finish", action: tour.complete, classes: "bg-green-500 text-white px-3 py-1 rounded" }],
    });

    if (!localStorage.getItem("seenTour")) {
      tour.start();
      localStorage.setItem("seenTour", "true"); 
    }

    window.startTour = () => {
      tour.start();
    };
  }, []);

  return (
    <button
      onClick={() => window.startTour()}
      className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
    >
      Restart Tour
    </button>
  );
}
