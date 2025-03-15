import Manutencao from '@/components/layout/Manutencao';
import Hero from '@/components/layout/Hero';
import Sobre from '@/components/layout/Sobre';
import Fabricacao from '@/components/layout/Fabricacao';
import CTA from '@/components/layout/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Manutencao />
      <Fabricacao />
      <CTA />
    </>
  );
}