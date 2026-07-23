import React from "react";

import BreadCrumb from "@/components/layout/Breadcrumb/BreadCrumb";
import CustomizeButton from "@/components/common/CustomizeButton/CustomizeBtton";

export default function Home() {
  return (
    <main className=" ">
      <CustomizeButton/>
      <BreadCrumb />
    </main>
  );
}
