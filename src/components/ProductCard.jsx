// src/components/ProductCard.jsx
function ProductCard({ title, category, description, isFeatured, onSelect }) {
    return (
        <div className="bg-surface-card p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-primary uppercase">{category}</span>
                    {isFeatured && (
                        <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded">
                            Destacado
                        </span>
                    )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4">{description}</p>
            </div>

            <button
                type="button"
                onClick={() => onSelect(title)}
                className="bg-primary text-black font-semibold py-2 px-4 rounded text-sm hover:opacity-90 cursor-pointer"
            >
                Consultar
            </button>
        </div>
    );
}

export default ProductCard;