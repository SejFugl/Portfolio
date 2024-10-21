import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-gray-700">
            Portefølje
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Hjem
            </Link>
            <Link
              to="/learning-goals"
              className="text-gray-700 hover:text-gray-900"
            >
              Læringsmål
            </Link>
            <Link to="/plan" className="text-gray-700 hover:text-gray-900">
              Plan
            </Link>
            <Link to="/materials" className="text-gray-700 hover:text-gray-900">
              Materialer
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-gray-900">
              Ressourcer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
