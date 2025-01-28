// ProductDetail.tsx
import React from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
}

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">${product.price}</p>
      {product.discountPercentage > 0 && (
        <p className="text-sm text-red-500">{product.discountPercentage}% off</p>
      )}
      <p className="text-sm text-gray-500 mt-2">Stock: {product.stockLevel}</p>
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;