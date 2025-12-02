"use client";
import { useEffect, useState } from "react";
import { cartService } from "@/services/CartService";
import { useRouter } from "next/navigation";
import { IconCheck, IconX, IconShoppingCart } from "@tabler/icons-react";

interface CustomerData {
    name: string;
    email: string;
    phone: string;
    address: string;
    country: string;
}

const SuccessModal = ({ isOpen, onClose, orderDetails }: { isOpen: boolean, onClose: () => void, orderDetails: any }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative transform transition-all animate-scaleUp">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    aria-label="Cerrar modal"
                >
                    <IconX size={24} />
                </button>

                <div className="text-center mb-6">
                    <IconCheck size={60} className="text-green-500 mx-auto mb-4 p-2 bg-green-100 rounded-full" />
                    <h2 className="text-3xl font-bold text-gray-800">¡Pedido Realizado con Éxito!</h2>
                    <p className="text-gray-500 mt-2">Tu orden ha sido procesada y será enviada pronto.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">Resumen de la Orden</h3>
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium text-gray-800">Cliente:</span> {orderDetails.customer.name}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium text-gray-800">Total:</span> ${orderDetails.total.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-medium text-gray-800">Dirección:</span> {orderDetails.customer.address}, {orderDetails.customer.country}
                    </p>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/50"
                    >
                        Continuar Comprando
                    </button>
                </div>

            </div>
        </div>
    );
};


export default function CarritoPage() {
    const [cart, setCart] = useState<any[]>([]);
    const [customerData, setCustomerData] = useState<CustomerData>({
        name: "",
        email: "",
        phone: "",
        address: "",
        country: "",
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false); 
    const [errorMessage, setErrorMessage] = useState<string | null>(null); 
    const [orderDetails, setOrderDetails] = useState<any>(null);

    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        setErrorMessage(null);

        if (!isLoggedIn) {
            router.push("/login");
            return;
        }

        if (cart.length === 0) {
            setErrorMessage("Tu carrito está vacío. Agrega productos antes de realizar un pedido.");
            return;
        }

        const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

        const newOrderDetails = {
            customer: customerData,
            items: cart.map(item => ({ id: item.id, title: item.title, price: item.price })),
            total: totalAmount,
            date: new Date().toISOString(),
        };

        setOrderDetails(newOrderDetails);
        setShowSuccessModal(true);
    };

    const closeModal = () => {
        setShowSuccessModal(false);
        cartService.clearCart();
        setCart([]);
        setCustomerData({
            name: "",
            email: "",
            phone: "",
            address: "",
            country: "",
        });
    };

    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900 drop-shadow-sm">
                Tu Carrito de Compras
            </h1>

            {errorMessage && (
                <div className="max-w-4xl mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6 flex justify-between items-center shadow-md animate-fadeDown">
                    <p className="font-medium flex items-center">
                        <IconX className="inline mr-2 size-5" />
                        {errorMessage}
                    </p>
                    <button onClick={() => setErrorMessage(null)} className="text-red-700 hover:text-red-900">
                        <IconX size={20} />
                    </button>
                </div>
            )}

            {cart.length === 0 ? (
                <div className="max-w-4xl mx-auto text-center bg-white p-10 rounded-xl shadow-lg border-2 border-dashed border-gray-300">
                    <IconShoppingCart size={60} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-gray-600 mb-2">
                        Tu carrito está vacío.
                    </p>
                    <p className="text-gray-500">
                        ¡Parece que aún no has agregado ningún producto!
                    </p>
                </div>
            ) : (
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg h-fit">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            Productos ({cart.length})
                        </h2>

                        <div className="space-y-4">
                            {cart.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 border-b last:border-b-0"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image || "https://placehold.co/80x80/cccccc/333333?text=Sin+Imagen"}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover rounded-lg shadow-sm"
                                            onError={(e) => {
                                                (e.currentTarget as HTMLImageElement).src = "https://placehold.co/80x80/cccccc/333333?text=Sin+Imagen";
                                            }}
                                        />
                                        <div>
                                            <p className="font-medium text-gray-800">{item.title}</p>
                                            <p className="text-sm text-indigo-600 font-bold">${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => eliminarProducto(item.id)}
                                        className="text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50"
                                        aria-label={`Eliminar ${item.title}`}
                                    >
                                        <IconX size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t flex justify-between items-center">
                            <p className="text-lg font-semibold text-gray-700">Total:</p>
                            <p className="text-2xl font-extrabold text-indigo-700">${totalAmount.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* 🔥 FIX APLICADO AQUÍ */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit self-start">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            Datos de Envío
                        </h2>

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
                                    Correo Electrónico
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
                                    Teléfono
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

            {showSuccessModal && orderDetails && (
                <SuccessModal 
                    isOpen={showSuccessModal} 
                    onClose={closeModal} 
                    orderDetails={orderDetails} 
                />
            )}
        </div>
    );
}
