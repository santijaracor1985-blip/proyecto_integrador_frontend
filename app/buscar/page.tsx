"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/ui/searchbar";


export type Ropa = {
  id?: string;
  title: string;
  price: number;
  image?: string;
};

export default function CatalogoWomen() {
  const [products, setProducts] = useState<Ropa[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://692898acb35b4ffc50164337.mockapi.io/productswomen"
        );

        const data = await res.json();
        console.log("DATA:", data);

        setProducts(data as Ropa[]);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Error desconocido");
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((item) => (
          <div key={item.id} className="shadow p-3 rounded">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-2 font-bold">{item.title}</h2>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
