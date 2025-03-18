'use client'

import TagSection from '@/components/ui/TagSection';
import Button from '@/components/ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
// Registrar o plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Fabricacao(){
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

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

            if (buttonRef.current) {
            gsap.set(buttonRef.current, {
                opacity: 0,
                scale: 0.95,
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

        // Anima o botão
        if (buttonRef.current) {
        tl.to(buttonRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
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

    const linkWpp = "https://wa.me/5511960829258?text=Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Lindal";

    return(
        <section className="bg-azul-marinho relative" id="fabricacao" ref={sectionRef}>
            <div className="border-b border-cinza-3">
                <div className="container">
                    <div className="flex items-stretch">
                        <div className="md:w-1/2 w-full md:pr-10 pr-0 sm:pt-24 pt-16 pb-10">
                            <div className="flex flex-col items-start gap-4">
                                <TagSection 
                                ref={tagRef}
                                tag="Serviços" 
                                />
                                <h2 ref={titleRef} className="font-display text-white sm:text-4xl/tight text-3xl/tight font-bold">Fabricação sob medida</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="flex">
                        <div className="md:w-1/2 w-full md:py-24 pt-10 sm:pb-24 pb-16 md:pr-10 pr-0 flex flex-col gap-6 items-start">
                            <p ref={textRef} className="text-white sm:text-2xl text-lg">Projetamos e fabricamos equipamentos de exaustão e ventilação para cozinhas industriais, com materiais de alta durabilidade e performance.</p>
                            <Button 
                                ref={buttonRef}
                                href={linkWpp} 
                                target="_blank"
                                icon="/img/icons/icon-whatsapp-azul.svg"
                                iconAlt="Ícone WhatsApp"
                                variant = "secondary"
                                onClick={() => sendGTMEvent({ event: 'btn_whatsapp'})}
                            >
                                Solicitar orçamento
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-servico-coifas bg-center bg-cover bg-no-repeat absolute top-0 right-0 w-1/2 h-full md:flex hidden">
                <div className="bg-outline-2 bg-center bg-no-repeat absolute top-0 right-0 w-full h-full bg-[length:110%]"></div>
            </div>
        </section>
    )
}