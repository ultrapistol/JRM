import React from 'react'
import './contato.css';
import assistencia from '../../assets/assistencia.png';
import suporte from '../../assets/suporte.png';
import solucao from '../../assets/solucao.png';

const Contato = () => {
  return (
    <section className="contato">
        <h1 className="ContatoTitle">Fale com a Gente!</h1>
        <span className="ContatoSubtitle">Precisa de um orçamento, quer tirar dúvidas ou agendar uma visita técnica?
             Nossa equipe está pronta para te atender com agilidade e atenção.
                Entre em contato pelos canais abaixo ou preencha o formulário — retornaremos o mais rápido possível.</span>

        <div className="atendimento">
            <div className="atendimentoIndividual">
                <img src={assistencia} alt="" className="AtendimentoImg" />
                <span className="AtendimentoText">Atendimento rápido e personalizado.</span>
            </div>

            <div className="atendimentoIndividual">
                <img src={suporte} alt="" className="AtendimentoImg" />
                <span className="AtendimentoText">Suporte técnico Especializado.</span>
            </div>

            <div className="atendimentoIndividual">
                <img src={solucao} alt="" className="AtendimentoImg" />
                <span className="AtendimentoText">Soluções sob medida para sua necesidade.</span>
            </div>

        </div>

        <div className="ContatoInfo">

        </div>

    </section>
  )
}

export default Contato;