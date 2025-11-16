"use client";

export default function AccesorioCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition shadow-blue-100 border border-gray-200 max-w-sm">
      
      <div className="overflow-hidden rounded-xl">
        <img
          src="https://i.pinimg.com/originals/6a/b4/f1/6ab4f1cc0664a8ab39d920e36419ecdb.jpg"
          alt="Accesorios"
          className="w-full h-72 object-cover rounded-xl hover:scale-105 transition"
        />
      </div>

      <h2 className="text-2xl font-bold mt-4 mb-3 text-gray-700">
        Catálogo de Accesorios
      </h2>

      <button
        className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-xl font-medium transition"
      >
        Ver más
      </button>
    </div>
  );
}
