'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTransition } from '@/context/TransitionContext';

export default function PageTransition() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const { setTransitionComplete } = useTransition();

  useEffect(() => {
    // Garantir que a transição dure pelo menos 1 segundo
    const minLoadingTime = 1000;
    const startTime = Date.now();
    
    // Função para verificar quando a página estiver carregada
    const handleLoadComplete = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= minLoadingTime) {
        startExitAnimation();
      } else {
        // Se a página carregar mais rápido que 1 segundo, aguarde o tempo restante
        setTimeout(() => {
          startExitAnimation();
        }, minLoadingTime - elapsedTime);
      }
    };

    // Iniciar a animação de saída
    const startExitAnimation = () => {
      setIsExiting(true);
      // Remover o componente após a animação de saída
      setTimeout(() => {
        setLoading(false);
        // Sinalizar que a transição está completa
        setTransitionComplete(true);
      }, 300); // Duração da animação de saída
    };

    // Verificar se a página já está carregada
    if (document.readyState === 'complete') {
      handleLoadComplete();
    } else {
      window.addEventListener('load', handleLoadComplete);
      // Garantir que após 1 segundo a transição comece a sair, mesmo que a página não tenha carregado completamente
      setTimeout(() => {
        startExitAnimation();
      }, minLoadingTime);
    }

    return () => {
      window.removeEventListener('load', handleLoadComplete);
    };
  }, [setTransitionComplete]);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${isExiting ? 'page-transition-exit' : ''}`}>
      <div className="relative w-48 h-48 animate-pulse">
        <Image
          src="/img/logos/logo-lindal.svg"
          alt="Lindal"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 