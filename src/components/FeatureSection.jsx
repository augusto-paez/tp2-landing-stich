import { products } from '../data/products';
import ProductCard from './ProductCard';

function FeatureSection() {
    const handleSelectProduct = (title) => {
        alert(`Elegiste consultar por: ${title}`);
    };

    return (
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-2">Nuestros Productos y Servicios</h2>
            <p className="text-gray-400 mb-8">Explorá lo que podemos hacer con impresión 3D de alta calidad.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        title={item.title}
                        category={item.category}
                        description={item.description}
                        isFeatured={item.isFeatured}
                        onSelect={handleSelectProduct}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeatureSection;