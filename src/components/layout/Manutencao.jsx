'use client'

import TagSection from '@/components/ui/TagSection';
import Button from '@/components/ui/Button';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

// Registrar o plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Import do SVG como componente React
import GrafismoOutline from '/public/img/backgrounds/grafismo-outline.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Manutencao(){
    
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const tagRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const swiperNavRef = useRef(null); 
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    
    // Aplicar estilos iniciais assim que o componente for montado
    useEffect(() => {
      if (!sectionRef.current) return;

      try {
        // Definir estilos iniciais para todos os elementos que serão animados
        if (titleRef.current) {
          gsap.set(titleRef.current, {
            opacity: 0,
            y: 50
          });
        }

        if (tagRef.current) {
          gsap.set(tagRef.current, {
            opacity: 0,
            y: 30
          });
        }

        if (textRef.current) {
          gsap.set(textRef.current, {
            opacity: 0,
            y: 40
          });
        }

        if (swiperNavRef.current) {
          gsap.set(swiperNavRef.current, {
            opacity: 0,
            y: 40
          });
        }

        if (buttonRef.current) {
          gsap.set(buttonRef.current, {
            opacity: 0,
            y: 40
          });
        }       

        if (swiperRef.current) {
          // Seleciona especificamente os slides
          const slides = swiperRef.current.querySelectorAll('.swiper-slide');
          gsap.set(slides, {
            opacity: 0,
            y: 30,
            scale: 0.95
          });
        }
      } catch (error) {
        console.error("Erro ao configurar estilos iniciais:", error);
      }
    }, []);
  
    useEffect(() => {
      // Garantir que o código só é executado no navegador (client-side)
      if (typeof window === 'undefined' || !sectionRef.current) return;

      try {
        // Configurar as animações com ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%", // Inicia a animação quando o topo da seção está XX% abaixo do topo da viewport
            end: "bottom 20%", // Termina quando o fundo da seção está XX% acima do fundo da viewport
            toggleActions: "play none none none", // play, reverse, restart, reset, pause, resume, complete, none
            // markers: true, // Remova em produção - útil para debug
          }
        });
        
        // Anima a tag primeiro
        if (tagRef.current) {
          tl.to(tagRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
        
        // Anima o título principal
        if (titleRef.current) {
          tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
          }, "-=0.3");
        }

        // Anima o texto
        if (textRef.current) {
          tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out'
          }, "-=0.5");
        }

        // Anima a navegação
        if (swiperNavRef.current) {
          tl.to(swiperNavRef.current, {
            opacity: 1,
            y: 0,
          }, "-=0.3");
        }
        
        // Anima o slide
        if (swiperRef.current) {
          const slides = swiperRef.current.querySelectorAll('.swiper-slide');
          tl.to(slides, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1, // Intervalo entre cada card
            ease: 'back.out(1.2)'
          }, "-=0.4");
        }

        // Anima o botão
        if (buttonRef.current) {
          tl.to(buttonRef.current, {
            opacity: 1,
            y: 0,
          }, "-=0.4");
        }   

        // Anima a navegação
        if (swiperNavRef.current) {
          tl.to(swiperNavRef.current, {
            opacity: 1,
            y: 0,
          });
        }

        // Limpar ScrollTriggers quando o componente for desmontado
        return () => {
          if (ScrollTrigger) {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          }
        };
      } catch (error) {
        console.error("Erro ao configurar ScrollTrigger:", error);
      }
    }, []);

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
    <section className="relative bg-cinza-4 overflow-hidden" id="manutencao" ref={sectionRef}>
        <div className="relative z-10 border-b border-cinza-3">
            <div className="container">
                <div className="flex sm:flex-row flex-col">
                    <div className="w-full flex lg:flex-row flex-col lg:gap-10 gap-6 lg:items-end items-start sm:pr-10 pr-0 pb-10 sm:border-r border-r-0 border-cinza-3 sm:pt-24 pt-16">
                        <div className="flex flex-col items-start gap-4">
                            <TagSection 
                            tag="Serviços" 
                            ref={tagRef}
                            />
                            <h2 ref={titleRef} className="font-display text-white sm:text-4xl/tight text-3xl/tight lg:text-nowrap text-wrap font-bold">Manutenção de equipamentos</h2>
                        </div>
                        <div className="">
                            <p ref={textRef} className="text-lg text-white">Garantimos o pleno funcionamento dos seus equipamentos, evitando prejuízos e garantindo a segurança da sua cozinha.</p>
                        </div>
                    </div>

                    <div className="w-auto flex gap-3 items-end sm:pl-10 pl-0 pb-10" ref={swiperNavRef}>
                        <button 
                            onClick={handlePrev} 
                            className={`p-4 bg-azul-ceu text-white inline-flex items-center transition-all duration-300 ${isBeginning ? 'disabled opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isBeginning}
                        >
                            <Image 
                            src="/img/icons/icon-arrow-left.svg"
                            alt="Ícone Seta Esquerda"
                            width={24}
                            height={24}
                            className="min-w-6 min-h-6"
                            priority
                            />
                        </button>
                        <button 
                            onClick={handleNext} 
                            className={`p-4 bg-azul-ceu text-white inline-flex items-center transition-all duration-300 ${isEnd ? 'disabled opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isEnd}
                        >
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
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onInit={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
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
                                <h3 className="font-display text-lg font-medium text-white">Sistemas de exaustão</h3>
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
                                <h3 className="font-display text-lg font-medium text-white">Outros equipamentos</h3>
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
                        ref={buttonRef}
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