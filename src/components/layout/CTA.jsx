'use client'

import Button from '@/components/ui/Button'; // Importa o novo componente Button

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Registrar o plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA(){
    const sectionRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        try {
            // Definir estilos iniciais para todos os elementos que serão animados
            if (ctaRef.current) {
            gsap.set(ctaRef.current, {
                opacity: 0,
                y: 50
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
            if (ctaRef.current) {
            tl.to(ctaRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
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

    const linkWpp = "https://wa.me/5511960829258?text=Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Lindal";
    return(
        <section className="sm:pt-24 pt-16 sm:pb-10 pb-6" ref={sectionRef}>
            <div className="container">
                <div className="w-full">
                    <div className="bg-cta relative before:content-[''] z-0 before:absolute before:inset-0 before:bg-azul-marinho/85 px-10 sm:py-24 py-16" ref={ctaRef}>
                        <div className="relative z-10 flex flex-col gap-6 items-center justify-center text-center">
                            <h2 className="font-display text-white sm:text-4xl/tight text-3xl/tight font-bold max-w-[522px]">
                                Precisa de assistência ou quer um orçamento?
                            </h2>
                            <p className="text-white text-lg">
                                Entre em contato agora mesmo e tenha um atendimento rápido e personalizado!
                            </p>
                            <Button 
                                href={linkWpp} 
                                target="_blank"
                                icon="/img/icons/icon-whatsapp-azul.svg"
                                iconAlt="Ícone WhatsApp"
                                variant = "secondary"
                                onClick={() => sendGTMEvent({ event: 'btn_whatsapp'})}
                            >
                                Chamar no WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}