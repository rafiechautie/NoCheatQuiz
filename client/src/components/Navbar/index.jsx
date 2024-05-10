import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* Logo dan link ke home */}
                            <a href="#" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-lg">NoCheatQuiz</span>
                            </a>
                        </div>
                        {/* Menu utama */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link to="/dashboard" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Dashboard</Link>
                            <Link to="/exams" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Exams</Link>
                            <Link to="/results" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Results</Link>
                        </div>
                    </div>
                    {/* Menu di kanan */}
                    <div className="hidden md:flex items-center space-x-3 ">
                        <Link to="/profile" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Profile</Link>
                        <Link to="/logout" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar