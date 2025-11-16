import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

    
      <div className="text-2xl font-bold text-blue-600">
        MiSitio
      </div>

    
      <div className="flex gap-6 text-lg">

        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          Inicio
        </Link>

        <Link
          href="/products"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          Productos
        </Link>

        <Link
          href="/dashboard"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          Dashboard
        </Link>

        <Link
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Login
        </Link>

      </div>

    </nav>
  );
}
