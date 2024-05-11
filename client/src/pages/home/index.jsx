import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
  const [quizCode, setQuizCode] = useState("");

  const handleStartQuiz = () => {
    setShowModal(true);
  };

  const handleQuizCodeSubmit = () => {
    console.log("Quiz Code Submitted:", quizCode);
    // Proses kode unik di sini, misalnya memvalidasi atau mengarahkan ke halaman quiz
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setQuizCode("");
};
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Navbar />
      <main className="flex-grow flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl text-gray-700">Welcome to NoCheatQuiz!</h1>
          <p className="text-lg text-gray-600 mt-4">Create, manage, and participate in quizzes securely without the fear of cheating.</p>
          <button onClick={handleStartQuiz} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Start Quiz
          </button>
        </div>
      </main>
      <Footer />
      {showModal && (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center animate-fade-in">
        <div className="bg-white p-8 rounded-lg shadow-xl relative">
            <button onClick={handleClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 z-50">
                <span className="text-2xl">&times;</span>
            </button>
            <h3 className="text-lg font-semibold">Enter your Quiz Code:</h3>
            <input 
                type="text" 
                value={quizCode}
                onChange={(e) => setQuizCode(e.target.value)}
                className="mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-4 flex justify-end">
                <button onClick={handleQuizCodeSubmit} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </div>
        </div>
    </div>
)}
    </div>
  )
}

export default HomePage