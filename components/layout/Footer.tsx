export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-gray-950 to-black text-gray-300 pt-24 pb-10 overflow-hidden">

     
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

   
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

      
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-white tracking-wide">
              Luxe <span className="text-purple-500">Style</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Moda, elegancia y calidad para quienes saben vestir con clase.
            </p>

            
            <div className="flex gap-4 mt-4">
              {["🌐", "📸", "🎵", "💼"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

       
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {["Inicio", "Productos", "Ofertas", "Login", "Contacto"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative group transition hover:text-white"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 group-hover:w-full transition-all"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

     
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contáctanos
            </h3>
            <p className="text-gray-400">📧 luxestyle@hotmail.com</p>
            <p className="text-gray-400">📱 +57 315 381 9451</p>
            <p className="text-gray-400">📍 Medellín, Colombia</p>
            <p className="text-gray-400 mt-4">🕘 Lun - Sáb: 9 AM - 7 PM</p>
          </div>

      
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              SOMOS TU MEJOR OPCION
            </h3>
            <p className="text-gray-400">
              Recibe ofertas exclusivas y novedades.
            </p>
            <div className="mt-4 flex rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Tu correo"
                className="w-full px-4 py-2 bg-black border border-white/20 focus:outline-none"
              />
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4">
                Enviar
              </button>
            </div>

       
            <div className="mt-4">
              <p className="text-gray-400 mb-2">Aceptamos:</p>
              <div className="flex gap-3 text-lg">
                💳 🅿️ 💵 🏦
              </div>
            </div>
          </div>

        </div>

 
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-12"></div>

  
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              Luxe Style
            </span>{" "}
            | Todos los derechos reservados.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacidad", "Términos", "Soporte"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition hover:scale-105"
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
