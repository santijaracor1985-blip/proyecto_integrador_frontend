"use client";

import React, { useEffect, useRef, useState } from "react";

export type CarouselProduct = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<CarouselProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://692c7dc7c829d464006fb834.mockapi.io/carrusel"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Scroll automático
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [products]);

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="mt-14 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-white drop-shadow-lg">

        LO PROXIMO EN LUXE STYLE 🔥✔️
      </h2>

      <div className="flex overflow-hidden gap-4 px-4" ref={scrollRef}>
        {products.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] bg-white rounded-xl shadow-lg p-4 flex-shrink-0"
          >
            {item.image && isValidUrl(item.image) ? (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg object-cover w-full h-64"
              />
            ) : (
              <div className="rounded-lg bg-gray-200 w-full h-64 flex items-center justify-center text-gray-500">
                Sin imagen
              </div>
            )}
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
