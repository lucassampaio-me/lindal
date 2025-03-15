import Image from 'next/image';

const Card1 = ({
    title,
    description,
    iconSrc,
    iconAlt = "Ícone",
    className = "",
    contentTextClass = "",
    contentIconClass = "",
}) => {

    return (
        <div className={`flex flex-col items-start justify-between bg-cinza-1 ${className}`}>
            <div className={`sm:p-8 p-6 border-b h-full border-cinza-2 ${contentTextClass}`}>
                {title && (
                    <h3 className="font-display text-xl text-azul-marinho font-bold">{title}</h3>
                )}

                {description && (
                    <p>{description}</p>
                )}
            </div>

            <div className={`sm:p-8 p-6 ${contentIconClass}`}>
                <div className="inline-flex sm:p-5 p-4 bg-grafismo-gradiente-1 bg-no-repeat bg-cover">
                    {iconSrc && (
                        <Image 
                            src={iconSrc}
                            alt={iconAlt}
                            width={40}
                            height={40}
                            className="sm:w-10 sm:h-10 w-8 h-8"
                        />
                    )}
                </div>
            </div>
        </div>
    );

};

export default Card1;