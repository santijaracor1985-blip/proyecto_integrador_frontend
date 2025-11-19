"use client";
import Link from "next/link";

export default function RopaCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all border border-gray-200 w-full max-w-sm mx-auto">

      <div className="overflow-hidden rounded-xl">
        <img
          src="http://diosamujer.com/wp-content/uploads/2025/03/catalogo-dolce-campana-6-2025-colombia-iied.webp"
          alt="Ropa"
          className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-all duration-300"
        />
      </div>

      <h2 className="text-2xl font-bold mt-5 mb-3 text-gray-800 text-center">
        Catálogo de Ropa
      </h2>

      <Link href="/products?type=ropa">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full text-base font-semibold hover:bg-blue-700 transition">
          Ver más
        </button>
      </Link>
    </div>
  );
}
