import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contato.css';
import assistencia from '../../assets/assistencia.png';
import suporte from '../../assets/suporte.png';
import solucao from '../../assets/solucao.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';



const Contato = () => {
      const form = useRef();
        const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ns1ea4s', 'template_6eate4f', form.current, {
        publicKey: 'LEf89_H5kWf74KrXXjEzq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <section className="contato" id='contato'>
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


        <div className="ContatoContainer">
        
            <div className="ContatoInfo">

                <div className="ContatoSubdivision">
                    <h1 className="ContatoInfoTitle">ENDEREÇO</h1>
                    <h2 className="ContatoInfo">Rua: Padre Adelino, 2074 12º Andar Conj.121 <br />
                    Tatuapé - São Paulo / SP - CEP: 03303-000
                    </h2>
                </div>

                <div className="ContatoSubdivision">
                    <h1 className="ContatoInfoTitle">TELEFONES</h1>
                    <h2 className="ContatoInfo">Tel: (11) 4130-7887 <br /> WhatsApp: (11) 99175-634
                    </h2>
                </div>

                <div className="ContatoSubdivision">
                    <h1 className="ContatoInfoTitle">EMAIL</h1>
                    <h2 className="ContatoInfo"> jrmsystem@jrmsystem.com.br</h2>
                </div>

            </div>

            <form className="ContactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Digite Seu Nome ou Instituição.' name='your_name'/>
                <input type="email" className="email" placeholder='Digite seu Email.' name='your_email'/>
                <textarea className='msg' name="message" rows={5} placeholder='Sua mensagem.'></textarea>
                <button type='submit' value='Send' className="SubmitBtn">Enviar</button>
            </form>
                
        </div> 

        <div className="links">
            <img src={facebook} alt="Facebook" className="linkFace" /> 
            <img src={instagram} alt="Instagram" className="linkInsta" />
            <img src={youtube} alt="Youtube" className="linkYoutube" />
        </div>
 

    </section>
  )
}

export default Contato;