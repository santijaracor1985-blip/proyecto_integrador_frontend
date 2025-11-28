"use client";

import { useRouter } from "next/navigation";

export default function ProductMujer() {
  const router = useRouter();

  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm overflow-hidden cursor-pointer">

      
      <div className="overflow-hidden">
        <img
          src="https://img.freepik.com/fotos-premium/mujer-posando-catalogo-moda-estudio_274689-36056.jpg"
          alt="Catálogo Mujer"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

    
      <div className="p-6 flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Catálogo de Ropa Mujer
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Descubre las últimas tendencias en moda femenina con estilo y elegancia.
        </p>

    
        <button
          onClick={() => router.push("/mujer")}
          className="mt-2 px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-xl font-medium hover:opacity-80 transition-all"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
