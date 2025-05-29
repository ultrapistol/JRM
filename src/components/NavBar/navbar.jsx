import React from 'react';
import './navbar.css';
import logo from '../../assets/JRMlogo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contato.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo'/>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='servicos' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Serviços</Link>
        <Link activeClass='active' to='sobre' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Sobre</Link>
        <Link activeClass='active' to='clientes' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Avaliações</Link>

      </div>
      <button className="desktopMenuBtn" onClick={() =>{
        document.getElementById('contato').scrollIntoView({behavior: 'smooth'});
      }}>
          <img src={contactImg} alt="" className="desktopMenuImg" />Contato</button>
    </nav>
  )
}

export default Navbar