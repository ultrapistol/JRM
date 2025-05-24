import { useState } from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Servicos from './components/Serviços/servicos';
import Sobre from './components/Sobre/sobre';
import Clientes from './components/Clientes/clientes';



function App() {

  return (
    <>
      <div>
            <Navbar/>
            <Intro/>
            <Servicos/>
            <Sobre/>
            <Clientes/>
      </div>

    </>
  )
}

export default App
