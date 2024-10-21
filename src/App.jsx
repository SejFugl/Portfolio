import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import LearningGoalsPage from './components/LearningGoalsPage'
import PlanPage from './components/PlanPage'
import MaterialsPage from './components/MaterialsPage'
import ResourcesPage from './components/ResourcesPage'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <motion.div
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learning-goals" element={<LearningGoalsPage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  )
}