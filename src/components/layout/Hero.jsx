'use client'

import Image from 'next/image';
import Button from '@/components/ui/Button';
import { gsap } from 'gsap';
import { useEffect, useState, useRef } from 'react';
import { useTransition } from '@/context/TransitionContext';
import { sendGTMEvent } from '@next/third-parties/google';
export default function Hero(){
  const linkWpp = "https://wa.me/5511960829258?text=Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Lindal";
  const { transitionComplete } = useTransition();
  const [animationStarted, setAnimationStarted] = useState(false);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const yearsBadgeRef = useRef(null);
  const yearsTextRef = useRef(null);

  // Aplicar estilos iniciais assim que o componente for montado
  useEffect(() => {
    // Definir estilos iniciais para todos os elementos que serão animados
    if (titleRef.current) {
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 100
      });
    }
    
    if (cardRef.current) {
      gsap.set(cardRef.current, {
        opacity: 0,
        x: -50
      });
    }
    
    if (yearsBadgeRef.current) {
      gsap.set(yearsBadgeRef.current, {
        opacity: 0,
        scale: 0.8
      });
    }
    
    if (yearsTextRef.current) {
      gsap.set(yearsTextRef.current, {
        opacity: 0,
        x: 30
      });
    }
  }, []);

  useEffect(() => {
    // Inicia a animação apenas quando a transição de página for concluída
    if (transitionComplete && !animationStarted) {
      setAnimationStarted(true);
      
      // Cria uma timeline para sequenciar as animações
      const tl = gsap.timeline();
      
      // Anima o título principal
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      });
      
      // Anima o card com o botão do WhatsApp
      tl.to(cardRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power1.out'
      }, "-=0.5"); // Começa um pouco antes da animação anterior terminar
      
      // Anima o ícone dos 20 anos
      tl.to(yearsBadgeRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, "-=0.4");
      
      // Anima o texto dos 20 anos
      tl.to(yearsTextRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power1.out'
      }, "-=0.3");
    }
  }, [transitionComplete, animationStarted]);

  return (

    <section 
    style={{ paddingTop: 'var(--header-height)' }}
    className="bg-banner-hero relative before:content-[''] z-0 before:absolute before:inset-0 before:bg-cinza-4/85"
    >
      <div className="border-b border-cinza-3 relative z-10">
        <div className="container">
          <div className="flex md:flex-row flex-col">
            <div className="sm:w-1/2 w-full">
              <div className="lg:py-20 sm:py-16 pt-10 pr-10 pb-[184px]">
                <h1 ref={titleRef} className="font-display text-white sm:text-4xl/tight text-3xl/tight">
                  Manutenção e Fabricação de Equipamentos para Cozinha Industrial
                </h1>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 sm:w-1/2 w-full sm:h-full h-36 bg-banner-hero-2 bg-cover bg-center"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="container">
          <div className="flex items-stretch md:flex-row flex-col-reverse">
            <div className="md:py-10 py-0 pb-10 md:pr-10 pr-0 lg:max-w-[400px] max-w-1/2 md:border-r border-r-0 border-cinza-3">
              <div ref={cardRef} className="w-full bg-cinza-1 inline-flex flex-col items-start gap-4 sm:p-8 p-6">
                <p className="font-display text-2xl text-azul-marinho font-bold">Precisa de assistência técnica especializada?</p>
                <p className='text-lg'>Fale com a gente agora mesmo pelo WhatsApp!</p>
                <Button 
                  href={linkWpp} 
                  target="_blank"
                  icon="/img/icons/icon-whatsapp.svg"
                  iconAlt="Ícone WhatsApp"
                  onClick={() => sendGTMEvent({ event: 'btn_whatsapp'})}
                >
                  Fale conosco
                </Button>
              </div>
            </div>

            <div className="md:py-20 py-10 md:pl-10 pl-0 flex items-center w-full">
              <div className="flex items-center sm:gap-10 gap-6">
                <div ref={yearsBadgeRef} className="sm:p-8 p-6 inline-flex items-center justify-center bg-grafismo-gradiente-2 bg-cover">
                  <Image 
                  src="/img/icons/icon-medal-star.svg"
                  alt="Ícone WhatsApp"
                  width={56}
                  height={56}
                  className="sm:w-14 sm:min-w-14 w-10 min-w-10"
                  priority
                  />
                </div>
                <p ref={yearsTextRef} className="sm:text-2xl text-lg text-white">Mais de 20 anos garantindo qualidade, segurança e eficiência para restaurantes, supermercados e indústrias.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}