"use client";
import React from "react";
import Link from "next/link";

export default function ProductHombre() {
  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm overflow-hidden cursor-pointer">
      
      
      <div className="overflow-hidden">
        <img
          src="https://img.freepik.com/foto-gratis/retrato-moda-guapo-elegante-hipster-empresario-modelo-vestido-elegante-traje-marron-sentado-cerca-oscuridad_158538-11279.jpg"
          alt="Catálogo Hombre"
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>


      <div className="p-6 flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Catálogo de Ropa Hombre
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Explora las últimas colecciones de moda masculina con estilo moderno.
        </p>

        
        <Link
          href="/ropa"
          className="mt-2 inline-block text-center px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-xl font-medium hover:opacity-80 transition-all shadow-md"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
