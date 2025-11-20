import { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="text-lg font-bold mt-3">{product.title}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>

      <div className="mt-3 flex justify-between items-center">
        <span className="text-xl font-semibold text-green-600">
          ${product.price}
        </span>
        <button className="px-4 py-1 bg-black text-white rounded-full hover:bg-gray-700">
          Ver más
        </button>
      </div>
    </div>
  );
}
