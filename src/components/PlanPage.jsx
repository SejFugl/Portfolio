import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import weekData from "./WeekData";

const bulletPointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Section = ({ title, items }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <ul className="list-disc pl-5 space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={bulletPointVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.25 }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </div>
);

export default function PlanPage() {
  const [currentWeek, setCurrentWeek] = useState(0);

  const nextWeek = () => {
    setCurrentWeek((prev) => (prev + 1) % weekData.length);
  };

  const prevWeek = () => {
    setCurrentWeek((prev) => (prev - 1 + weekData.length) % weekData.length);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Plan - Uge {weekData[currentWeek].week}
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
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Section
            title="Oversigt"
            items={weekData[currentWeek].leftSide.oversigt}
          />
          <Section
            title="Udfordringer og løsninger"
            items={weekData[currentWeek].leftSide.udfordringer}
          />
          <Section
            title="Refleksion"
            items={weekData[currentWeek].leftSide.refleksion}
          />
          <Section
            title="Plan for næste uge"
            items={weekData[currentWeek].leftSide.planForNaesteUge}
          />
        </div>
        <div className="space-y-6">
          <Section
            title="Viden"
            items={weekData[currentWeek].rightSide.viden}
          />
          <Section
            title="Færdigheder"
            items={weekData[currentWeek].rightSide.faerdigheder}
          />
          <Section
            title="Kompetencer"
            items={weekData[currentWeek].rightSide.kompetencer}
          />
        </div>
      </div>
    </div>
  );
}
