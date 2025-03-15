import TagSection from '@/components/ui/TagSection';
import Button from '@/components/ui/Button'; // Importa o novo componente Button
import Image from 'next/image';

export default function Fabricacao(){

    const linkWpp = "https://wa.me/5511960829258?text=Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Lindal";

    return(
        <section className="bg-azul-marinho relative" id="fabricacao">
            <div className="border-b border-cinza-3">
                <div className="container">
                    <div className="flex items-stretch">
                        <div className="md:w-1/2 w-full md:pr-10 pr-0 sm:pt-24 pt-16 pb-10">
                            <div className="flex flex-col items-start gap-4">
                                <TagSection 
                                tag="Serviços" 
                                />
                                <h2 className="font-display text-white text-4xl/tight font-bold">Fabricação sob medida</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="flex">
                        <div className="md:w-1/2 w-full md:py-24 pt-10 sm:pb-24 pb-16 md:pr-10 pr-0 flex flex-col gap-6 items-start">
                            <p className="text-white sm:text-2xl text-lg">Projetamos e fabricamos equipamentos de exaustão e ventilação para cozinhas industriais, com materiais de alta durabilidade e performance.</p>
                            <Button 
                                href={linkWpp} 
                                target="_blank"
                                icon="/img/icons/icon-whatsapp-azul.svg"
                                iconAlt="Ícone WhatsApp"
                                variant = "secondary"
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