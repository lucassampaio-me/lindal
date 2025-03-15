import { forwardRef } from 'react';

const TagSection = forwardRef(({ 
    tag, 
    className = "",
}, ref) => {
    return (
    <>
        {tag && (
        <div ref={ref} className={`inline-block px-2 py-1 text-sm font-semibold bg-cinza-1 border-l-4 border-cinza-2 text-azul-ceu ${className}`}>
            {tag}
        </div>
        )}
    </>
    );
});

TagSection.displayName = 'TagSection';

export default TagSection;