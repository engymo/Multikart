import React from "react";

import BreadCrumb from "@/components/layout/Breadcrumb/BreadCrumb";
import CustomizeButton from "@/components/common/CustomizeButton/CustomizeBtton";
import SalesToast from "@/components/common/SalesToast/SalesToast";
import StickyBuyBar from "@/components/product/StickyBuyBar/StickyBuyBar";
import ProductDetails from "@/components/product/ProductDetails";
import ProductTabsWrapper from "@/components/product/tabs/ProductTabsWrapper";
import RelatedProducts from "@/components/product/RelatedProducts/RelatedProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BreadCrumb />
      <ProductDetails />
      <ProductTabsWrapper />
      <RelatedProducts />
      <SalesToast />
      <CustomizeButton />
      <StickyBuyBar />
    </main>
  );
}
