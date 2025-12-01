"use client";
import { mujerService } from "@/services/MujerService";
import { Mujer } from "@/types/Mujer";
import { useEffect, useState } from "react";
import { cartService } from "@/services/CartService";

import ZoomImage from "@/components/ui/ZoomImage";
import { IconShoppingCartCheck } from "@tabler/icons-react"; 

export default function MujerPage() {
    const [mujer, setMujer] = useState<Mujer[]>([]);
    const [notification, setNotification] = useState<string | null>(null); 

    useEffect(() => {
        async function load() {
            try {
                const data = await mujerService.getAll();
                setMujer(data);
            } catch (error) {
                console.log("Error cargando datos:", error);
            }
        }
        load();
    }, []);

    
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleAddToCart = (item: Mujer) => {
        
        cartService.addToCart(item);

       
        setNotification(`¡"${item.title}" añadido al carrito!`);

     
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Catálogo de Ropa (Mujeres)
            </h1>

            {/* Notificación flotante de producto añadido */}
            {notification && (
                <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-3 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
                    <IconShoppingCartCheck size={20} />
                    <span className="font-medium">{notification}</span>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {mujer.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]"
                    >
                        
                        <ZoomImage src={item.image} />

                        <div className="p-5">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                                {item.title}
                            </h2>

                            <p className="text-xl font-bold text-indigo-700 mb-4">
                                ${item.price}
                            </p>

                            <button
                                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                onClick={() => handleAddToCart(item)}
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