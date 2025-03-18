'use client'

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';


export default function Header() {

    const linkWpp = "https://wa.me/5511960829258?text=Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Lindal";

    const headerRef = useRef(null);

    useEffect(() => {
      function updateHeaderHeight() {
        const height = headerRef.current?.offsetHeight || 0;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
        return height;
      }

      const height = updateHeaderHeight();
      window.addEventListener('resize', updateHeaderHeight);

      return () => {
        window.removeEventListener('resize', updateHeaderHeight);
      };
    }, []);

    return (
      <header 
      ref={headerRef}
      className="site-header absolute top-0 left-0 z-40 w-full lg:py-6 py-4 border-b border-cinza-3"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image 
                src="/img/logos/logo-lindal-branco.svg"
                alt="Logo Lindal"
                width={160}
                height={32}
                className="sm:w-40 w-32"
                priority
              />
            </Link>

            <div className="flex items-center gap-10">
              <nav className="group md:flex hidden items-center gap-10">
                <Link href="#sobre" className="font-semibold text-white transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
                  Sobre nós
                </Link>
                <Link href="#manutencao" className="font-semibold text-white transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
                  Manutenção
                </Link>
                <Link href="#fabricacao" className="font-semibold text-white transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100">
                  Fabricação
                </Link>
              </nav>
              
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
        </div>
      </header>
    );
  }