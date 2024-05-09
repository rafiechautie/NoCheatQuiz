
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import LandingPage from './pages/landingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
