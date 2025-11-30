"use client";
import { useEffect, useState } from "react";
import { cartService } from "@/services/CartService";

interface CustomerData {
    name: string;
    email: string;
    phone: string;
    address: string;
    country: string;
}

export default function CarritoPage() {
    const [cart, setCart] = useState<any[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({
        name: "",
        email: "",
        phone: "",
        address: "",
        country: "",
    });

    useEffect(() => {
        setCart(cartService.getCart());
    }, []);

    const eliminarProducto = (id: string) => {
        cartService.removeFromCart(id);
        setCart(cartService.getCart());
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomerData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Tu carrito está vacío. Agrega productos antes de realizar un pedido.");
            return;
        }

        const orderDetails = {
            customer: customerData,
            products: cart,
            total: cart.reduce((sum, item) => sum + item.price, 0),
            date: new Date().toISOString(),
        };

        console.log("Datos del Pedido a Enviar:", orderDetails);
        
        alert(
            `¡Pedido realizado con éxito!\n\nDatos de Cliente:\nNombre: ${customerData.name}\nEmail: ${customerData.email}\nTeléfono: ${customerData.phone}\nPaís: ${customerData.country}\nTotal: $${orderDetails.total.toFixed(2)}`
        );
    };

    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                🛒 Carrito de Compras
            </h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-600 text-xl">
                    Tu carrito está vacío. ¡Empieza a comprar!
                </p>
            ) : (
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-white p-6 shadow-lg rounded-xl">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Productos</h2>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b py-4 last:border-b-0"
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
                                            ${item.price.toFixed(2)} 
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => eliminarProducto(item.id)}
                                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition flex items-center justify-center"
                                    aria-label="Eliminar producto"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm2 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
                            <p className="text-xl font-bold">
                                Total: ${totalAmount.toFixed(2)}
                            </p>
                        </div>
                    </div>
                    
                    <div className="md:col-span-1 bg-white p-6 shadow-lg rounded-xl h-fit">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Datos para el Pedido</h2>
                        <form onSubmit={handleCheckout} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={customerData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={customerData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Número de Teléfono
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={customerData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                    Dirección de Envío
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={customerData.address}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    País
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={customerData.country}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Realizar Pedido (${totalAmount.toFixed(2)})
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}