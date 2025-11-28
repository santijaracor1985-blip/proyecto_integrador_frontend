export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 mt-10">


      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">

        <h2 className="text-2xl font-bold text-white">Mi Tienda</h2>

        <nav className="flex gap-6 text-gray-400 text-lg">
          <a href="/" className="hover:text-white transition">Inicio</a>
          <a href="/ropa" className="hover:text-white transition">Ropa</a>
          <a href="/catalogo-mujer" className="hover:text-white transition">Ropa Mujer</a>
          <a href="/login" className="hover:text-white transition">Login</a>
        </nav>

        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Mi Tienda — Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}
