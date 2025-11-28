"use client";
import { ropaService } from '@/services/RopaService';
import { Ropa } from '@/types/Ropa';
import { useEffect, useState } from 'react';
import { cartService } from '@/services/CartService';
import { useRouter } from 'next/navigation';
import ZoomImage from "@/components/ui/ZoomImage";

export default function RopaPage() {
    const [ropa, setRopa] = useState<Ropa[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function load() {
            try {
                const data = await ropaService.getAll();
                setRopa(data);
            } catch (error) {
                console.log(error);
            }
        }
        load();
    }, []);

    const agregarAlCarrito = (item: Ropa) => {
        cartService.addToCart(item);
        router.push("/carrito");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Catálogo de Ropa (Hombres)
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {ropa.map((item) => (
                    <div 
                        key={item.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        
                        <ZoomImage src={item.image} />

                        <div className="p-5">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h2>
                            <p className="text-xl font-bold text-indigo-600 mb-3">
                                ${item.price}
                            </p>

                            <button
                                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
                                onClick={() => agregarAlCarrito(item)}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
