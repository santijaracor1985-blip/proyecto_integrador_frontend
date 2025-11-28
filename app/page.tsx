import ProductHombre from "@/features/dashboard/ProductHombre";
import ProductMujer from "@/features/dashboard/ProductMujer";
import Footer from "@/components/layout/Footer";

export default function page() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductHombre />
        <ProductMujer />
        <Footer />

      </div>
    </div>
  );
}
