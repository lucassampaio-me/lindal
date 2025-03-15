'use client'

import TagSection from '@/components/ui/TagSection';
import Card1 from '@/components/ui/Card1';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Registrar o plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero(){
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const tagRef = useRef(null);
    const cardsRef = useRef(null);
    const textRef = useRef(null);
  
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

        if (cardsRef.current) {
          // Seleciona todos os cards filhos
          const cards = cardsRef.current.children;
          gsap.set(cards, {
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
        
        // Anima os cards um após o outro
        if (cardsRef.current) {
          const cards = cardsRef.current.children;
          tl.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1, // Intervalo entre cada card
            ease: 'back.out(1.2)'
          }, "-=0.4");
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

  return (
    <section className="sm:py-24 py-16" id="sobre" ref={sectionRef}>
        <div className="container">
            <div className="flex mb-10">
                <div className="w-full">
                    <div className="flex flex-col items-start gap-4">
                        <TagSection 
                        tag="Sobre nós"
                        ref={tagRef} 
                        />
                        <h2 ref={titleRef} className="font-display text-azul-marinho sm:text-4xl/tight text-3xl/tight font-bold">Confiança e eficiência em cozinhas industriais</h2>
                        <p ref={textRef} className="text-lg max-w-[800px]">Com mais de duas décadas de experiência, a Lindal se destaca na manutenção de equipamentos para cozinhas industriais, garantindo segurança, agilidade e alto padrão de qualidade.</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4" ref={cardsRef}>
                <Card1
                iconSrc="/img/icons/icon-like-tag.svg"
                iconAlt="Atendimento rápido e especializado"
                title="Atendimento rápido e especializado"
                className=""
                contentTextClass=""
                contentIconClass=""
                />

                <Card1
                iconSrc="/img/icons/icon-people.svg"
                iconAlt="Equipe altamente treinada"
                title="Equipe altamente treinada"
                className=""
                contentTextClass=""
                contentIconClass=""
                />

                <Card1
                iconSrc="/img/icons/icon-medal.svg"
                iconAlt="Materiais e peças de alta qualidade"
                title="Materiais e peças de alta qualidade"
                className=""
                contentTextClass=""
                contentIconClass=""
                />

                <Card1
                iconSrc="/img/icons/icon-building.svg"
                iconAlt="Soluções personalizadas para o seu negócio"
                title="Soluções personalizadas para o seu negócio"
                className=""
                contentTextClass=""
                contentIconClass=""
                />
            </div>
        </div>
    </section>
  );
}