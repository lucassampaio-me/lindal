import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero(){
  const linkWpp = "https://wa.me/5511960829258?text=Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Lindal";

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
                <h1 className="font-display text-white sm:text-4xl/tight text-3xl/tight">
                  Manutenção e Fabricação de Equipamentos para Cozinha Industrial
                </h1>
              </div>
            </div>

            <div className="absolute sm:top-0 top-auto sm:bottom-auto bottom-0 right-0 sm:w-1/2 w-full sm:h-full h-36 bg-banner-hero-2 bg-cover bg-center"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="container">
          <div className="flex items-stretch md:flex-row flex-col-reverse">
            <div className="md:py-10 py-0 pb-10 md:pr-10 pr-0 lg:max-w-[400px] max-w-1/2 md:border-r border-r-0 border-cinza-3">
              <div className="w-full bg-cinza-1 inline-flex flex-col items-start gap-4 sm:p-8 p-6">
                <p className="font-display text-2xl text-azul-marinho font-bold">Precisa de assistência técnica especializada?</p>
                <p className='text-lg'>Fale com a gente agora mesmo pelo WhatsApp!</p>
                <Button 
                  href={linkWpp} 
                  target="_blank"
                  icon="/img/icons/icon-whatsapp.svg"
                  iconAlt="Ícone WhatsApp"
                >
                  Fale conosco
                </Button>
              </div>
            </div>

            <div className="md:py-20 py-10 md:pl-10 pl-0 flex items-center w-full">
              <div className="flex items-center sm:gap-10 gap-6">
                <div className="sm:p-8 p-6 inline-flex items-center justify-center bg-grafismo-gradiente-2 bg-cover">
                  <Image 
                  src="/img/icons/icon-medal-star.svg"
                  alt="Ícone WhatsApp"
                  width={56}
                  height={56}
                  className="sm:w-14 sm:min-w-14 w-10 min-w-10"
                  priority
                  />
                </div>
                <p className="sm:text-2xl text-lg text-white">Mais de 20 anos garantindo qualidade, segurança e eficiência para restaurantes, supermercados e indústrias.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}