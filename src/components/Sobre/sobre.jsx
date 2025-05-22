import React from 'react';
import './sobre.css';
import missao from '../../assets/missao.png';
import visao from '../../assets/visao.png';
import valores from '../../assets/valores.png';

const Sobre = () => {
  return (
    <section className="sobre">
  <span className="SobreTitle">Sobre a Empresa</span>

  <div className="sobreContainer">
    <div className="SobreText">
      A JRM System nasceu com o propósito de trazer o que há de mais moderno e inovador na área segurança patrimonial e tecnologia de alarmes do país. <br />
      Tem como premissa proporcionar e ampliar a segurança e a tranquilidade de sua família e também de seus patrimônios. <br />
      Somos movidos pelo compromisso de proteger aquilo que há de mais importante e considerando o maior bem que alguém pode ter; sua família e os seus patrimônios construídos ao longo da vida. 
      Nosso é DNA 100% brasileiro e, <br />
      orgulhosamente, somos empreendedores por natureza.
    </div>

    <div className="infoBox">
      <h3 className="BoxTitle">Missão</h3>
      <div className="infoContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor.
      </div>
    </div>
  </div>
</section>
    
  )
}

export default Sobre;