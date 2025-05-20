import { useState } from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Servicos from './components/Serviços/servicos';
import Sobre from './components/Sobre/sobre';



function App() {

  return (
    <>
      <div>
            <Navbar/>
            <Intro/>
            <Servicos/>
            <Sobre />
      </div>

    </>
  )
}

export default App
