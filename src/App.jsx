import { useState } from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Servicos from './components/Serviços/servicos';



function App() {

  return (
    <>
      <div>
            <Navbar/>
            <Intro/>
            <Servicos/>
      </div>

    </>
  )
}

export default App
