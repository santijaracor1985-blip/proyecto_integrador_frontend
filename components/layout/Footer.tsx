export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-black to-gray-900 text-gray-300 pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          
          
          <div>
            <h2 className="text-3xl font-bold text-white tracking-wide mb-3">
              Luxe Style
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Tu tienda favorita para encontrar lo que necesitas con estilo y calidad.
            </p>
          </div>

          
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold text-white mb-2">Enlaces</h3>
            <a href="#" className="hover:text-white transition">Inicio</a>
            <a href="#" className="hover:text-white transition">Productos</a>
            <a href="#" className="hover:text-white transition">Login</a>
            
          </div>

          
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold text-white mb-2">Contacto</h3>
            <p className="text-gray-400">Correo: contacto@misitio.com</p>
            <p className="text-gray-400">Tel: +57 300 000 0000</p>
            <p className="text-gray-400">Dirección: Calle 123, Colombia</p>
          </div>

        </div>

        
        <div className="w-full h-px bg-gray-700 my-10"></div>

        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 MiSitio. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacidad</a>
            <a href="#" className="hover:text-white transition">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
