import CatHombre from "../features/dashboard/CatHombre";
import CatMujer from "../features/dashboard/CatMujer";
import Footer from "@/components/layout/Footer";
import Lamp from "@/components/ui/lamp";
import ProductCarousel from "@/components/ui/ProductCarousel";

import { CardContainer, CardBody } from "@/components/ui/3d-card";

export default function Page() {
  return (
    <div className="relative w-full flex flex-col items-center min-h-screen">

      {/* Fondo animado */}
      <Lamp className="absolute inset-0 -z-10" />

      {/* CATEGORÍAS */}
      <section className="w-full py-16 px-6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

          <CardContainer>
            <CardBody className="w-full">
              <CatHombre />
            </CardBody>
          </CardContainer>

          <CardContainer>
            <CardBody className="w-full">
              <CatMujer />
            </CardBody>
          </CardContainer>

        </div>
      </section>

      {/* 🔹 CARRUSEL SIN EFECTO 3D */}
      <section
        className="relative w-full py-20 flex justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/photos/fabric-dark-texture-picture-id176839858?k=6&m=176839858&s=170667a&w=0&h=B--h5ZRRiZSdgZTeO0sSZZEHMTCdxX-ScXXB0UQVYfc=')"
        }}
      >

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido del Carrusel */}
        <div className="relative max-w-6xl w-full px-4">

          <div className="w-full">
            <ProductCarousel />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>

    </div>
  );
}
