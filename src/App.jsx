import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Header from './components/Header'
import Footer from './components/Footer'
import ComidaRapida from './pages/ComidaRapida'
import Desayunos from './pages/Desayunos'
import Almuerzos from './pages/Almuerzos'
import Redireccionar from './pages/Redireccionar'

const App = () => {
  return (
    <div className='app'>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/ComidaRapida" element={<ComidaRapida/>}/>
          <Route path="/Desayunos" element={<Desayunos/>}/>
          <Route path="/Almuerzos" element={<Almuerzos/>}/>
          <Route path="/Redireccionar/:num" element={<Redireccionar/>}/>
        </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App