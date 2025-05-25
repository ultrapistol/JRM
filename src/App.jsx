import { useState } from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Servicos from './components/Serviços/servicos';
import Sobre from './components/Sobre/sobre';
import Clientes from './components/Clientes/clientes';
import Contato from './components/Contato/contato';



function App() {

  return (
    <>
      <div>
            <Navbar/>
            <Intro/>
            <Servicos/>
            <Sobre/>
            <Clientes/>
            <Contato/>
      </div>

    </>
  )
}

export default App
