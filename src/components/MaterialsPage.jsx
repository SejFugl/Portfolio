import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const weekData = [
  {
    week: 1,
    images: [
      "/src/assets/Uge_1/Sketch_ Brancher.png",
      "/src/assets/Uge_1/Sketch_ Footer.png",
      "/src/assets/Uge_1/Sketch_ Funktioner.png",
      "/src/assets/Uge_1/Sketch_ Logud.png",
      "/src/assets/Uge_1/Sketch_ Om os.png",
      "/src/assets/Uge_1/Sketch_ Om os 2.png",
      "/src/assets/Uge_1/Sketch_ Priser.png",
      "/src/assets/Uge_1/Sketch_ Registrering af bruger og forretning.png",
      "/src/assets/Uge_1/Sketch_ Søgning af dato.png",
    ],
  },
  {
    week: 2,
    images: [
      "/src/assets/Uge_2/Flow-charts for Booking-projekt - Booking-flow.jpg",
      "/src/assets/Uge_2/Flow-charts for Booking-projekt - Login-flow.jpg",
      "/src/assets/Uge_2/Flow-charts for Booking-projekt - Registrering-flow.jpg",
    ],
  },
  {
    week: 3,
    images: [
      "src/assets/Uge_3/Calendar Gammel.png",
      "src/assets/Uge_3/Hjem.png",
      "src/assets/Uge_3/image 2.png",
      "src/assets/Uge_3/Login.png",
      "src/assets/Uge_3/Register Gammel 2.png",
      "src/assets/Uge_3/Register Gammel.png",
      "src/assets/Uge_3/Register.png",
      "src/assets/Uge_3/Registrering af bruger og forretning 2.0.png",
      "src/assets/Uge_3/Registrering af bruger og forretning Gammel 2.png",
      "src/assets/Uge_3/Registrering af bruger og forretning Gammel 3.png",
      "src/assets/Uge_3/Registrering af bruger og forretning Gammel.png",
      "src/assets/Uge_3/Registrering af bruger og forretning.png",
      "src/assets/Uge_3/Sitemap.png",
    ],
  },
  {
    week: 6,
    images: [
      "src/assets/Uge_6/Color Palette.png",
      "src/assets/Uge_6/Inter.png",
      "src/assets/Uge_6/Source Sans Pro.png",
    ],
  },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function MaterialerPage() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);

  const nextWeek = () => {
    setCurrentWeek((prev) => (prev + 1) % weekData.length);
    setVisibleImages([]);
  };

  const prevWeek = () => {
    setCurrentWeek((prev) => (prev - 1 + weekData.length) % weekData.length);
    setVisibleImages([]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageIndex = parseInt(
              entry.target.getAttribute("data-index") || "0",
              10
            );
            setVisibleImages((prev) => [...new Set([...prev, imageIndex])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const imageElements = document.querySelectorAll(".image-container");
    imageElements.forEach((el) => observer.observe(el));

    return () => {
      imageElements.forEach((el) => observer.unobserve(el));
    };
  }, [currentWeek]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Materialer - Uge {weekData[currentWeek].week}
        </h1>
        <div className="flex space-x-4">
          <button onClick={prevWeek} className="p-2 bg-gray-200 rounded-full">
            <FaChevronLeft />
          </button>
          <button onClick={nextWeek} className="p-2 bg-gray-200 rounded-full">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {weekData[currentWeek].images.map((src, index) => (
          <motion.div
            key={index}
            className="image-container"
            data-index={index}
            variants={imageVariants}
            initial="hidden"
            animate={visibleImages.includes(index) ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={src}
              alt={`Week ${weekData[currentWeek].week} - Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

MaterialerPage.propTypes = {
  // Add any props if needed
};

export default MaterialerPage;
