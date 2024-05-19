import React from 'react'
import bgWeb from '../../../public/bg-web.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgWeb})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="min-h-screen flex flex-col items-center justify-center">
    <header className="text-3xl text-blue-900 font-bold mb-4">
        Selamat Datang di NoCheatQuiz!
    </header>
    <p className="text-lg text-center text-blue-700 mb-6">
        Platform kuis online yang adil dan menyenangkan untuk semua.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Masuk
        </Link>
        <Link to="/register" className="bg-gray-300 hover:bg-gray-400 text-blue-900 font-bold py-2 px-4 rounded">
            Daftar
        </Link>
    </div>
</div>
  )
}

export default LandingPage