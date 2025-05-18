import React from 'react';
import './servicos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import alarme from '../../assets/alarme.png';
import camera from '../../assets/camera.png';
import seguranca from '../../assets/seguranca.png';
import interfone from '../../assets/interfone.png';
import bgAlt from '../../assets/wavesUpsideDown.png';

const servicosData = [
  {
    title: "Alarmes e Câmeras",
    description: "Instalação de alarmes inteligentes e câmeras de alta resolução com acesso remoto. Sistemas personalizados para detectar qualquer movimento suspeito com agilidade e precisão.",
    image: alarme
  },
  {
    title: "Monitoramento 24H",
    description: "Tenha total controle e segurança com nosso sistema de monitoramento remoto. Acompanhe imagens em tempo real e garanta proteção contínua para sua residência ou empresa, onde quer que você esteja.",
    image: camera
  },
  {
    title: "Portaria Virtual",
    description: "Solução moderna que substitui a portaria física por um sistema remoto, garantindo redução de custos e aumento da eficiência no controle de entrada e saída de pessoas e veículos.",
    image: seguranca
  },
  {
    title: "Interfone e Porteiro Eletrônico",
    description: "Facilitam a comunicação e o controle de acesso com praticidade, seja em ambientes residenciais ou comerciais.",
    image: interfone
  }
];

const Servicos = () => {
  return (
    
    <section id="servicos">

      <img src={bgAlt} alt="Fundo" className="bg" />

      <span className="ServicosTitle">Soluções Inteligentes em Segurança Eletrônica</span>
      <br />
      <span className="ServicosDesc">
        Oferecemos um portfólio completo de soluções em segurança eletrônica, projetadas para atender desde residências
        até grandes condomínios e empresas. Trabalhamos com equipamentos de alta tecnologia e uma equipe especializada
        para garantir proteção, praticidade e tranquilidade no seu dia a dia.
      </span>
      
      <div className="ServicosBar">
        <Swiper
            className="swiperServicos"
            modules={[Navigation]}
            navigation
            loop={true}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={30} // 👈 Aqui adiciona espaço entre os cards
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
        >
          {servicosData.map((servico, index) => (
            <SwiperSlide key={index} className="servicoSlide">
              <div className="servicoCard">
                <img src={servico.image} alt={servico.title} className="servicoImage" />
                <br />
                <h3 className="servicoTitle">{servico.title}</h3>
                <p className="servicoDesc">{servico.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Servicos;