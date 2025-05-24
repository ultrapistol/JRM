import React, { useEffect, useState, useRef } from 'react';
import './sobre.css';
import missao from '../../assets/missao.png';
import visao from '../../assets/visao.png';
import valores from '../../assets/valores.png';

const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const increment = target / (duration / 16);

          const animate = () => {
            start += increment;
            if (start < target) {
              setCount(Math.ceil(start));
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target]);

  return <span ref={ref}>{count}</span>;
};

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

  <div className="infoContainer">
    <div className="infoBox">
      <img src={missao} alt="missaoIMG" className="missao" />
      <div>
        <h3 className="BoxTitle">Missão</h3>
        <div className="infoContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor.
        </div>
      </div>
    </div>

    <div className="infoBox">
      <img src={visao} alt="visaoIMG" className="visao" />
      <div>
        <h3 className="BoxTitle">Visão</h3>
        <div className="infoContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor.
        </div>
      </div>
    </div>

    <div className="infoBox">
      <img src={valores} alt="valoresIMG" className="valores" />
      <div>
        <h3 className="BoxTitle">Valores</h3>
        <div className="infoContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor.
        </div>
      </div>
    </div>
  </div>
</div>
<br />

      <div className="InfoComplementar">
        <h4 className="ProjetosRealizados">
          <span className="NumberProjetos"><AnimatedNumber target={2300} /><br /></span> Projetos Realizados
        </h4>

        <h4 className="AnosHistoria">
          <span className="NumberAnos"><AnimatedNumber target={7} /><br /></span> Anos de História
        </h4>

        <h4 className="ClientesAtendidos">
          <span className="NumberClientes"><AnimatedNumber target={1200} /><br /></span> Clientes Atendidos
        </h4>

        <h4 className="PremiosCertificacoes">
          <span className="NumberPremios"><AnimatedNumber target={15} /><br /></span> Prêmios e Certificações
        </h4>

      </div>
    </section>
  );
};

export default Sobre;
