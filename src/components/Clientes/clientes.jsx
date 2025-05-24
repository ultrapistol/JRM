import React from 'react';
import './clientes.css';
import estrelas from '../../assets/estrelas.png';


const Clientes = () => {
  return (
    <div className="clientes">
        <h1 className="ClientesTitle">Experiências reais, segurança de verdade.</h1>
        <span className="ClientesSubtitle">Histórias de quem encontrou segurança com inovação e cuidado.</span>

        <div className="ClientesCards">
            
            <div className="ClienteContent">
                <h3 className="NomeCliente">Matheus Brito</h3>
                <span className="CommentCliente">Profissionais experientes e dedicados, atendimento personalizado e ágil, o suporte técnico tem sido impecável.
                 Recomendo de olhos fechados para quem busca segurança e tranquilidade.</span>
                <img src={estrelas} alt="Cinco estrelas" className="estrelas"/>
            </div>
        
        <div className="ClienteContent">
            <h3 className="NomeCliente">Reserva Taruma</h3>
            <span className="CommentCliente">Empresa de rápida resposta nas solicitações, com soluções rápidas e eficientes. Pessoal com alta capacidade e conhecimento
                 vasto nas soluções de tecnologia em segurança, estou satisfeito com a prestação de serviço para meu condominio.</span>
            <img src={estrelas} alt="Cinco estrelas" className="estrelas"/>
        </div>

        <div className="ClienteContent">
            <h3 className="NomeCliente">Luciana Timotheo</h3>
            <span className="CommentCliente">Trabalho impecável na prestação de serviços, cumprem com maestria o que prometem.</span>
            <img src={estrelas} alt="Cinco estrelas" className="estrelas"/>
        </div>
        
        </div>
    </div>

    
  )
}

export default Clientes;