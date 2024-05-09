
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
