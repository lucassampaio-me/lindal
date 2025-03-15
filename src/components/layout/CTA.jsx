'use client'

import TagSection from '@/components/ui/TagSection';
import Button from '@/components/ui/Button'; // Importa o novo componente Button
import Image from 'next/image';

export default function CTA(){

    const linkWpp = "https://wa.me/5511960829258?text=Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Lindal";
    return(
        <section className="pt-24 pb-10">
            <div className="container">
                <div className="w-full">
                    <div className="bg-banner-hero relative before:content-[''] z-0 before:absolute before:inset-0 before:bg-azul-marinho/85 px-10 py-24">
                        <div className="relative z-10 flex flex-col gap-6 items-center justify-center text-center">
                            <h2 className="font-display text-white text-4xl/tight font-bold max-w-[522px]">
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