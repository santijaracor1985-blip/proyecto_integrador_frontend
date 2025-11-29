import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        
        <Link href="/" className="text-2xl font-semibold text-gray-900 dark:text-white">
          Luxe Style
        </Link>

        
        <div className="flex items-center gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <Link 
            href="/" 
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Inicio
          </Link>

          <Link 
            href="/ropa" 
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Ropa
          </Link>
          <Link 
            href="/mujer" 
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Mujer
          </Link>

          <Link 
            href="/login" 
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:opacity-80 transition-all"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}
