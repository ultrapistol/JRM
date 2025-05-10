import React from 'react'
import './intro.css';
import bg from '../../assets/waves.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="IntroJRM">JRM<span className="IntroSystem">System</span></span>
            <span className="introText">Excelência em Soluções de Segurança Eletrônica.</span>
            <Link><button className="Conhecer">Conhecer</button></Link>
        </div>

        
        <img src={bg} alt="Fundo" className="bg" />

    </section>
  )
}

export default Intro;