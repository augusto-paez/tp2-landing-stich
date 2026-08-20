function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-surface-card py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h4 className="text-lg font-bold text-white mb-1">Sueños 3D</h4>
                    <p className="text-gray-400 text-sm">
                        Laboratorio de fabricación e impresión 3D de alta precisión.
                    </p>
                </div>

                <div className="text-gray-400 text-sm text-center md:text-right">
                    <p>Contacto: info@suenos3d.com</p>
                    <p>© {new Date().getFullYear()} Sueños 3D. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;