import TagSection from '@/components/ui/TagSection';
import Card1 from '@/components/ui/Card1';

export default function Hero(){
  return (
    <section className="sm:py-24 py-16" id="sobre">
        <div className="container">
            <div className="flex mb-10">
                <div className="w-full">
                    <div className="flex flex-col items-start gap-4">
                        <TagSection 
                        tag="Sobre nós" 
                        />
                        <h2 className="font-display text-azul-marinho sm:text-4xl/tight text-3xl/tight font-bold">Confiança e eficiência em cozinhas industriais</h2>
                        <p className="text-lg max-w-[800px]">Com mais de duas décadas de experiência, a Lindal se destaca na manutenção de equipamentos para cozinhas industriais, garantindo segurança, agilidade e alto padrão de qualidade.</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4">
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