import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contatos from "./pages/Contatos"
import Jogos from "./pages/Jogos"
import Login from "./pages/Login"
import Error from "./pages/Error"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#2c2c2c] pt-4">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contato" element={<Contatos />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
