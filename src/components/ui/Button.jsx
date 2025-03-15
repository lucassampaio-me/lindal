'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Button({
  href,
  children,
  icon,
  iconAlt = 'Ícone',
  iconWidth = 24,
  iconHeight = 24,
  className = '',
  variant = 'primary', // primary, secondary, etc.
  onClick,
  ...props
}) {
  // Estilos base para todos os botões
  const baseStyles = 'sm:px-6 px-5 sm:py-4 py-3 inline-flex items-center gap-2 font-semibold transition-colors';
  
  // Variantes de estilo
  const variantStyles = {
    primary: 'bg-azul-ceu text-white hover:bg-azul-marinho',
    secondary: 'bg-white text-azul-ceu hover:bg-cinza-1',
    // Adicione mais variantes conforme necessário
  };
  
  // Combinar estilos
  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;
  
  // Renderiza o conteúdo do botão (texto + ícone opcional)
  const buttonContent = (
    <>
      {children}
      {icon && (
        <Image 
          src={icon}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          priority
        />
      )}
    </>
  );
  
  // Se houver um href, renderiza como Link, caso contrário como botão
  if (href) {
    return (
      <Link href={href} className={buttonStyles} {...props}>
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button className={buttonStyles} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
} 