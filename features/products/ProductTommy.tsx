"use client";
import ProductCard from "./ProductCard";

export default function ProductTommy() {
  const productos = [
    {
      id: 1,
      title: "Tommy Hilfiger",
      price: "200.000$",
      image: "https://http2.mlstatic.com/D_NQ_NP_872005-MCO79224829497_092024-O.webp"
    },
  ];

  return (
    <div className=" bg-gray-50 py-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">
        
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-12">
        {productos.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 transition transform hover:-translate-y-2 max-w-xs mx-auto"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                {p.title}
              </h2>

              <p className="text-lg font-semibold text-gray-900 mb-4">
                {p.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
