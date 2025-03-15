import Card1 from '@/components/ui/Card1';

// Import do logo como componente React
import Image from 'next/image';
export default function Footer() {
  const endereco = (
    <>
      Av. Gualtar, 848<br/>
      Jardim Santa Teresinha<br/>
      São Paulo - SP
    </>
  );

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 pb-24">
          <Card1
          iconSrc="/img/icons/icon-phone.svg"
          iconAlt="Telefone comercial"
          title="(11) 2721-0928"
          description="Telefone comercial:"
          className="flex-col-reverse"
          contentTextClass="border-b-0 border-t flex flex-col-reverse justify-end w-full gap-1"
          contentIconClass=""
          />

          <Card1
          iconSrc="/img/icons/icon-whatsapp-2.svg"
          iconAlt="WhatsApp"
          title="(11) 96082-9258"
          description="WhatsApp:"
          className="flex-col-reverse"
          contentTextClass="border-b-0 border-t flex flex-col-reverse justify-end w-full gap-1"
          contentIconClass=""
          />

          <Card1
          iconSrc="/img/icons/icon-map.svg"
          iconAlt="Endereço"
          title="Endereço:"
          description={endereco}
          className="flex-col-reverse"
          contentTextClass="border-b-0 border-t flex flex-col justify-start w-full gap-1"
          contentIconClass=""
          />

          <Card1
          iconSrc="/img/icons/icon-email.svg"
          iconAlt="E-mail"
          title="E-mail:"
          description="fernandolindal@gmail.com"
          className="flex-col-reverse"
          contentTextClass="border-b-0 border-t flex flex-col justify-start w-full gap-1"
          contentIconClass=""
          />
        </div>
      </div>

      <div className="bg-cinza-1 border-t border-cinza-2 py-10">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-10 items-center justify-between">
            <Image 
              src="/img/logos/logo-lindal.svg"
              alt="Logo Lindal"
              width={160}
              height={32}
              priority
            />
            <p className="text-sm sm:text-right text-center">© 2025 Lindal - Manutenção de Cozinhas Industriais. Todos os direitos reservados. Criado por <a href="https://api.whatsapp.com/send?phone=5511960201948" target="_blank" className="text-azul-marinho font-bold underline hover:text-azul-ceu">Lucas Sampaio</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}