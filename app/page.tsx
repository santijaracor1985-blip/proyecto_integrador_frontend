import ProductHombre from "@/features/dashboard/ProductHombre";
import ProductMujer from "@/features/dashboard/ProductMujer";
import Footer from "@/components/layout/Footer";
import Lamp from "@/components/ui/lamp";  // <-- IMPORT CORRECTO

export default function Page() {
  return (
    <div className="relative w-full">
      {/* LAMP COMO FONDO */}
      <Lamp className="absolute inset-0 -z-10" />

      {/* CONTENIDO */}
      <div className="px-6 py-12 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          <ProductHombre />
          <ProductMujer />
        </div>
      </div>

      <Footer />
    </div>
  );
}
