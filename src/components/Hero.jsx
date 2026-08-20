function Hero() {
    const handleCatalogClick = () => {
        alert("Redirigiendo al catálogo completo de Sueños 3D...");
    };

    const handleQuoteClick = () => {
        alert("Abriendo formulario para cotizar tu pieza 3D...");
    };

    return (
        <section className="text-center py-20 px-6 max-w-4xl mx-auto">
            <span className="inline-block bg-surface-card border border-primary/30 text-primary text-xs px-3 py-1 rounded-full mb-6">
                Precisión Submilimétrica
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Convertimos tus ideas en <br />
                <span className="text-primary">realidades 3D</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Impresión 3D de alta precisión para figuras, prototipos y regalos personalizados. Laboratorio de fabricación digital al alcance de tu imaginación.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                    type="button"
                    onClick={handleCatalogClick}
                    className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-semibold cursor-pointer"
                >
                    Ver Catálogo
                </button>

                <button
                    type="button"
                    onClick={handleQuoteClick}
                    className="bg-primary text-black hover:opacity-90 px-6 py-3 rounded-lg font-semibold cursor-pointer"
                >
                    Cotizar Pieza ↗
                </button>
            </div>
        </section>
    );
}

export default Hero;