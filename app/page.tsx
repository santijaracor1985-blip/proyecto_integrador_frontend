import CatHombre from "../features/dashboard/CatHombre";
import CatMujer from "../features/dashboard/CatMujer";
import Footer from "@/components/layout/Footer";
import Lamp from "@/components/ui/lamp";  

export default function Page() {
  return (
    <div className="relative w-full">
      <Lamp className="absolute inset-0 -z-10" />

      
      <div className="px-6 py-12 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

          <CatHombre />
          <CatMujer />
        </div>
      </div>
     
      <Footer />
      

    </div>
  );
}
