import { Product } from "../../types/product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products: Product[] = [
    {
      id: 1,
      title: "Jordan Retro 4",
      description: "Edición limitada - Colección Jumpman",
      price: 799000,
      image: "https://tse1.mm.bing.net/th/id/OIP.Rqw-GdSAAz0AU03-F8JJBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 2,
      title: "Camiseta Calvin Klein",
      description: "Corte clásico, 100% algodón",
      price: 189000,
      image: "https://tse1.mm.bing.net/th/id/OIP.CZ6bW0NPxrMbA3K4kzH2hgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 3,
      title: "Gorra Nike Sportswear",
      description: "Edición premium bordada",
      price: 129000,
      image: "https://tse4.mm.bing.net/th/id/OIP.UFs4xGcMYzPOTy33D_P_XwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
