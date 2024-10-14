import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Brain className="mr-2" />
          <span className="text-xl font-bold">MentalNow</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/therapists" className="hover:text-gray-300">Find Therapist</Link></li>
            <li><Link to="/test" className="hover:text-gray-300">Take Test</Link></li>
            <li><Link to="/login" className="hover:text-gray-300">Log In</Link></li>
            <li><Link to="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Sign up for free</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;