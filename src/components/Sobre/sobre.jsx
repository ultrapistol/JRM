import React from 'react';
import './sobre.css';
import missao from '../../assets/missao.png';
import visao from '../../assets/visao.png';
import valores from '../../assets/valores.png';

const Sobre = () => {
  return (
    <section className="sobre">
            <span className="SobreTitle">Sobre a Empresa</span>
            <span className="SobreText">
                A JRM System nasceu com o propósito de trazer o que há de mais moderno e inovador na área segurança patrimonial e tecnologia de alarmes do país. 
Tem como premissa proporcionar e ampliar a segurança e a tranquilidade de sua família e também de seus patrimônios.
Somos movidos pelo compromisso de proteger aquilo que há de mais importante e considerando o maior bem que alguém pode ter; sua família e os seus patrimônios construídos ao longo da vida. 
Nosso é DNA 100% brasileiro e,
orgulhosamente, somos empreendedores por natureza.
            </span>

    </section>

    
  )
}

export default Sobre;