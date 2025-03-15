'use client'

import { useRef } from 'react'; // Adicione esta importação
import TagSection from '@/components/ui/TagSection';
import Button from '@/components/ui/Button'; // Importa o novo componente Button
import Image from 'next/image';

// Import do SVG como componente React
import GrafismoOutline from '/public/img/backgrounds/grafismo-outline.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Manutencao(){
  // Crie uma referência para o Swiper
  const swiperRef = useRef(null);

  const linkWpp = "https://wa.me/5511960829258?text=Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Lindal";

  // Funções para controlar o Swiper
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Usa o método nativo slidePrev para ir ao slide anterior
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Usa o método nativo slideNext para ir ao próximo slide
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="relative bg-cinza-4 overflow-hidden" id="manutencao">
        <div className="relative z-10 border-b border-cinza-3">
            <div className="container">
                <div className="flex sm:flex-row flex-col">
                    <div className="w-full flex lg:flex-row flex-col lg:gap-10 gap-6 lg:items-end items-start sm:pr-10 pr-0 pb-10 sm:border-r border-r-0 border-cinza-3 sm:py-24 pt-16">
                        <div className="flex flex-col items-start gap-4">
                            <TagSection 
                            tag="Serviços" 
                            />
                            <h2 className="font-display text-white sm:text-4xl/tight text-3xl/tight lg:text-nowrap text-wrap font-bold">Manutenção de equipamentos</h2>
                        </div>
                        <div className="">
                            <p className="text-lg text-white">Garantimos o pleno funcionamento dos seus equipamentos, evitando prejuízos e garantindo a segurança da sua cozinha.</p>
                        </div>
                    </div>

                    <div className="w-auto flex gap-3 items-end sm:pl-10 pl-0 pb-10">
                        <button onClick={handlePrev} className="p-4 bg-azul-ceu text-white inline-flex items-center">
                            <Image 
                            src="/img/icons/icon-arrow-left.svg"
                            alt="Ícone Seta Esquerda"
                            width={24}
                            height={24}
                            className="min-w-6 min-h-6"
                            priority
                            />
                        </button>
                        <button onClick={handleNext} className="p-4 bg-azul-ceu text-white inline-flex items-center">
                            <Image 
                            src="/img/icons/icon-arrow-right.svg"
                            alt="Ícone Seta Direita"
                            width={24}
                            height={24}
                            className="min-w-6 min-h-6"
                            priority
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative z-10 py-10 border-b border-cinza-3">
            <div className="container">
                <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={16}
                className="text-white"
                breakpoints={{
                    640: {
                        spaceBetween: 16,
                        slidesPerView: 1
                    },
                    768: {
                        spaceBetween: 24,
                        slidesPerView: 2
                    },
                    1024: {
                        spaceBetween: 40,
                        slidesPerView: 3
                    }
                }}
                >
                    <SwiperSlide>
                        <div className="p-3 bg-white min-h-[460px] flex items-end bg-servico-fogoes bg-cover bg-no-repeat">
                            <div className="w-full bg-azul-ceu p-6">
                                <h3 className="font-display text-lg font-medium text-white">Fogões</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-3 bg-white min-h-[460px] flex items-end bg-servico-caldeiras bg-cover bg-center bg-no-repeat">
                            <div className="w-full bg-azul-ceu p-6">
                                <h3 className="font-display text-lg font-medium text-white">Caldeiras a gás ou vapor</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-3 bg-white min-h-[460px] flex items-end bg-servico-fornos bg-cover bg-center bg-no-repeat">
                            <div className="w-full bg-azul-ceu p-6">
                                <h3 className="font-display text-lg font-medium text-white">Fornos</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-3 bg-white min-h-[460px] flex items-end bg-servico-refrigeracao bg-cover bg-center bg-no-repeat">
                            <div className="w-full bg-azul-ceu p-6">
                                <h3 className="font-display text-lg font-medium text-white">Sistemas de refrigeração</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-3 bg-white min-h-[460px] flex items-end bg-servico-coifas bg-cover bg-center bg-no-repeat">
                            <div className="w-full bg-azul-ceu p-6">
                                <h3 className="font-display text-lg font-medium text-white">Coifas</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-3 bg-white min-h-[460px] flex items-end bg-banner-hero bg-cover bg-center bg-no-repeat">
                            <div className="w-full bg-azul-ceu p-6">
                                <h3 className="font-display text-lg font-medium text-white">Chapeiras</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className="relative z-10 container">
            <div className="flex">
                <div className="sm:pr-10 pr-0 pt-10 sm:pb-24 pb-16 sm:border-r border-r-0 border-cinza-3">
                    <Button 
                        href={linkWpp} 
                        target="_blank"
                        icon="/img/icons/icon-whatsapp.svg"
                        iconAlt="Ícone WhatsApp"
                    >
                        Solicitar manutenção
                    </Button>
                </div>
            </div>
        </div>

        <div className="z-0 w-[102%] absolute top-1/2 left-1/2 scale-105 opacity-10 -translate-x-1/2 -translate-y-1/2">
            <GrafismoOutline className="absolute top-1/2 left-1/2 scale-105 -translate-x-1/2 -translate-y-1/2" />
        </div>
    </section>
  );
}