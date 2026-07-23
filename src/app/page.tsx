import React from "react";

import BreadCrumb from "@/components/layout/Breadcrumb/BreadCrumb";
import CustomizeButton from "@/components/common/CustomizeButton/CustomizeBtton";
import SalesToast from "@/components/common/SalesToast/SalesToast";
import StickyBuyBar from "@/components/product/StickyBuyBar/StickyBuyBar";

export default function Home() {
  return (
    <main className="h-screen ">
      <CustomizeButton/>
      <BreadCrumb />
      <SalesToast />
      <StickyBuyBar/>
    </main>
  );
}
