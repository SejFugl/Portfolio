import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import portrait from "/src/assets/portrait.png";

const weekData = [
  {
    week: 1,
    images: [
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
    ],
  },
  {
    week: 2,
    images: [
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
      "/src/assets/portrait.png",
    ],
  },
  // Add more weeks as needed
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
