"use client";

export default function RopaCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition shadow-blue-100 border border-gray-200 max-w-sm">
      
      <div className="overflow-hidden rounded-xl">
        <img
          src="http://diosamujer.com/wp-content/uploads/2025/03/catalogo-dolce-campana-6-2025-colombia-iied.webp"
          alt="Ropa"
          className="w-full h-72 object-cover rounded-xl hover:scale-105 transition"
        />
      </div>

      <h2 className="text-2xl font-bold mt-4 mb-3 text-gray-700">
        Catálogo de Ropa
      </h2>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-medium transition"
      >
        Ver más
      </button>
    </div>
  );
}
