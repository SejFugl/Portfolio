import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import portrait from "/src/assets/portrait.png";

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl font-bold mb-4">
            Velkommen til min portefølje
          </h1>
          <p className="text-xl mb-6">
            Jeg er datamatiker-studerende på 4. semester med fokus på React.js
            og UI/UX design.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/ervin-sejfulai-a43752206/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 active:bg-blue-800 duration-100"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/SejFugl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-700 active:bg-gray-600 duration-100"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </motion.div>
        <motion.img
          src={portrait}
          alt="Developer"
          className="max-w-96 h-96 rounded-full object-cover mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>
    </div>
  );
}
