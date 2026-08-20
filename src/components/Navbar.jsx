function Navbar() {
    const handleBudgetClick = () => {
        alert("Iniciando solicitud de presupuesto...");
    };

    return (
        <header className="border-b border-gray-800 bg-surface/80 backdrop-blur sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white tracking-wide">
                        Sueños <span className="text-primary">3D</span>
                    </span>
                </div>

                {/* Links de navegación */}
                <nav className="hidden md:flex gap-6 text-sm text-gray-300">
                    <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
                    <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
                    <a href="#catalogo" className="hover:text-primary transition-colors">Catálogo</a>
                </nav>

                {/* Botón CTA */}
                <button
                    type="button"
                    onClick={handleBudgetClick}
                    className="border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer"
                >
                    Pedir Presupuesto
                </button>
            </div>
        </header>
    );
}

export default Navbar;