"use client";
import { ropaService } from '@/services/RopaService';
import { Ropa } from '@/types/Ropa';
import { useEffect, useState } from 'react';
import { cartService } from '@/services/CartService';
import ZoomImage from "@/components/ui/ZoomImage";
import { IconShoppingCartCheck } from "@tabler/icons-react";

export default function RopaPage() {
    const [ropa, setRopa] = useState<Ropa[]>([]);
    const [notification, setNotification] = useState<string | null>(null);

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

    // Ocultar notificación después de 3 segundos
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const agregarAlCarrito = (item: Ropa) => {
        cartService.addToCart(item);

        // Mostrar notificación
        setNotification(`¡"${item.title}" añadido al carrito!`);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Catálogo de Ropa (Hombres)
            </h1>

            {/* Notificación flotante */}
            {notification && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-3 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
                    <IconShoppingCartCheck size={20} />
                    <span className="font-medium">{notification}</span>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {ropa.map((item) => (
                    <div 
                        key={item.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]"
                    >
                        <ZoomImage src={item.image} />

                        <div className="p-5">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                                {item.title}
                            </h2>

                            <p className="text-xl font-bold text-indigo-600 mb-3">
                                ${item.price}
                            </p>

                            <button
                                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                onClick={() => agregarAlCarrito(item)}
                            >
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
