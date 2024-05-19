import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
                <p className="text-gray-700 text-sm">
                    © {new Date().getFullYear()} NoCheatQuiz. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer