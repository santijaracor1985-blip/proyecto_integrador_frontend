export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-gray-950 to-black text-gray-300 pt-20 pb-10 mt-0 overflow-hidden">

      {/* Luces decorativas */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-white tracking-wide">
              Luxe <span className="text-purple-500">Style</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Moda, elegancia y calidad para quienes saben vestir con clase.
              Vive el estilo que te representa.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
              Navegación
            </h3>
            {["Inicio", "Productos", "Login"].map((item) => (
              <a
                key={item}
                href="#"
                className="group relative w-fit transition-all duration-300 hover:text-white"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
              Contáctanos
            </h3>
            <p className="text-gray-400">📧 luxestyle@hotmail.com</p>
            <p className="text-gray-400">📱 +57 3153819451</p>
            <p className="text-gray-400">📍 Medellín, Colombia</p>
          </div>

        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Luxe Style</span>. 
            Todos los derechos reservados.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacidad", "Términos"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-all duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
