import React from 'react';
import RelatedProducts from '@/components/product/RelatedProducts/RelatedProducts';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto py-8">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold">عرض المنتج رقم: {id}</h1>
      </div>

      <hr className="my-8 border-gray-200" />

      <RelatedProducts productId={id} />
    </div>
  );
}