import BreadCrumb from "@/components/layout/Breadcrumb/BreadCrumb";
import ProductCard from "@/components/product/ProductCard/ProductCard";
import { relatedProducts } from "@/data/RelatedProducts";

export default function Home() {
  return (

    <main className=" ">
      <BreadCrumb />
      {/* <ProductCard product={relatedProducts[0]} /> */}
    </main>

  );
}
