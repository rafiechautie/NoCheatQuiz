import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Navbar />
      {/* Konten utama dengan "flex-grow" untuk mengambil ruang yang tersisa */}
      <main className="flex-grow">
        <div className="py-10">
          <h1 className="text-4xl text-center text-gray-700">Welcome to NoCheatQuiz!</h1>
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-600 mt-4">Create, manage, and participate in quizzes securely without the fear of cheating.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage