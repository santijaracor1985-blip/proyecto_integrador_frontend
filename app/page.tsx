import CatHombre from "../features/dashboard/CatHombre";
import CatMujer from "../features/dashboard/CatMujer";
import Footer from "@/components/layout/Footer";
import Lamp from "@/components/ui/lamp";
import ProductCarousel from "@/components/ui/ProductCarousel";

export default function Page() {
  return (
    <div className="relative w-full flex flex-col items-center min-h-screen">

      {/* 🌟 Fondo de lámpara */}
      <Lamp className="absolute inset-0 -z-10" />

      {/* 🔹 Sección de Categorías */}
      <section className="w-full py-16 px-6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          <CatHombre />
          <CatMujer />
        </div>
      </section>

      {/* 🔹 Sección del Carrusel */}
      <section className="w-full py-16 flex justify-center bg-gray-50">
        <div className="max-w-6xl w-full px-4">
          {/* Aquí se cargan los productos desde ProductCarousel */}
          <ProductCarousel />
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>

    </div>
  );
}
