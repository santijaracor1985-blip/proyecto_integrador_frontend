import ProductTommy from "@/features/products/ProductTommy";
import ProductDolce from "@/features/products/ProductDolce";
import ProductPolo from "@/features/products/ProductPolo";
import ProductVersace from "@/features/products/ProductVersace";
import ProductPurple from "@/features/products/ProductPurple";
import ProductJordan from "@/features/products/ProductJordan";
import ProductNike from "@/features/products/ProductNike";
import ProductAdidas from "@/features/products/ProductAdidas";
import ProductCalvinKlein from "@/features/products/ProductCalvinKlein";
import ProductSuperdry from "@/features/products/ProductSuperdry";
import ProductMoschino from "@/features/products/ProductMoschino";
import ProductGucci from "@/features/products/ProductGucci";
export default function ProductsPage() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold p-6 text-center"></h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        <ProductTommy />
        <ProductDolce />
        <ProductPolo />
        <ProductVersace />
        <ProductPurple />
        <ProductJordan />
        <ProductNike />
        <ProductAdidas />
        <ProductCalvinKlein />
        <ProductSuperdry />
        <ProductMoschino />
        <ProductGucci />
      </div>
      
    </div>
  );
}
