import CatHombre from "../features/dashboard/CatHombre";
import CatMujer from "../features/dashboard/CatMujer";
import Footer from "@/components/layout/Footer";
import Lamp from "@/components/ui/lamp";
import ProductCarousel from "@/components/ui/ProductCarousel";

import { CardContainer, CardBody } from "@/components/ui/3d-card";

export default function Page() {
  return (
    <div className="relative w-full flex flex-col items-center min-h-screen">

      <Lamp className="absolute inset-0 -z-10" />

      <section className="w-full py-16 px-6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

          <CardContainer>
            <CardBody className="w-full">
              <CatHombre />
            </CardBody>
          </CardContainer>

          {/* Mujer con efecto 3D */}
          <CardContainer>
            <CardBody className="w-full">
              <CatMujer />
            </CardBody>
          </CardContainer>

        </div>
      </section>

      {/* 🔹 Sección del Carrusel */}
      <section className="w-full py-16 flex justify-center bg-gray-50">
        <div className="max-w-6xl w-full px-4">

          {/* Carrusel con efecto 3D */}
          <CardContainer>
            <CardBody className="w-full">
              <ProductCarousel />
            </CardBody>
          </CardContainer>

        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>

    </div>
  );
}
