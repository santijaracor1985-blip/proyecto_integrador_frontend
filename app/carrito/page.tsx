"use client";
import { useEffect, useState } from "react";
import { cartService } from "@/services/CartService";

export default function CarritoPage() {
    const [cart, setCart] = useState<any[]>([]);

    useEffect(() => {
        setCart(cartService.getCart());
    }, []);

    const eliminarProducto = (id: string) => {
        cartService.removeFromCart(id);
        setCart(cartService.getCart()); 
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                🛒 Carrito de Compras
            </h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-600 text-xl">Tu carrito está vacío.</p>
            ) : (
                <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-xl">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b py-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-indigo-600 font-bold text-lg">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>

                            
                            <button
                                onClick={() => eliminarProducto(item.id)}
                                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
