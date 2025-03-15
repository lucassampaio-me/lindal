const TagSection = ({ 
    tag, 
    className = "",
}) => {
    return (
    <>
        {tag && (
        <div className={`inline-block px-2 py-1 text-sm font-semibold bg-cinza-1 border-l-4 border-cinza-2 text-azul-ceu ${className}`}>
            {tag}
        </div>
        )}
    </>
    );
};

export default TagSection;