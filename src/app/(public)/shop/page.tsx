

import ProductListing from "@/app/components/ProductListing";
import Header from "../../components/Header"


import sanityFetch from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/query";
import Image from "next/image";
// import Link from "next/link";
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

export default async function Shop() {
  const product: Product[] = await sanityFetch({ query: allProducts });

  return (
    <div className="bg-gray-100">
      <Header />

      {/* Hero Section */}

<div className="h-80 w-full bg-Bi justify-center items-center pt-24 bg-cover bg-center">

<div className="relative text-center ">
<div className="text-center max-w-3xl mx-auto">
<h1 className="text-5xl font-bold text-black">Shop </h1>
            <p className="text-gray-700 mt-2 pt-5">
              <span className="font-semibold text-black">Home</span> <span className="mx-2">&gt;</span> <span>Shop</span>
            </p>
        </div>

</div>
</div>


      {/* Product listing */}
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 '> 
        {product.map((product: Product, index: any) => (
          <ProductListing key={product.id || index} products={[product]} />
        ))}
      </div>
      {/* Product Grid */}
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {product.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative h-64 ">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 flex-1 flex flex-col ">
                <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {product.description.length > 50
                    ? `${product.description.substring(0, 50)}...`
                    : product.description}
                </p>

                {/* Price and Discount */}
                <p className="text-lg font-bold mt-4">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <p className="text-sm text-red-500 mt-1">
                    Save {product.discountPercentage}%!
                  </p>
                )}

                {/* Stock Information */}
                <p className="text-xs text-gray-500 mt-2">
                  {product.stockLevel > 0
                    ? `In Stock: ${product.stockLevel}`
                    : "Out of Stock"}
                </p>
              </div>

              {/* Featured Badge */}
              {product.isFeaturedProduct && (
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


<div className='bg-custompin h-80 flex justify-center items-center text-sm gap-4 '>
<button className='h-12 w-12 bg-customYellow text-gray-950 mt-36 rounded-lg'>  1 </button>
<button className='h-12 w-12 bg-customskin text-gray-950 mt-36 rounded-lg'> <a href="/shop2"> 2</a></button>
<button className='h-12 w-12 bg-customskin text-gray-950 mt-36 rounded-lg'> <a href="/shop2">3</a></button>
<button className='h-11 w-20 bg-customskin text-gray-950 mt-36 rounded-lg'> <a href="/shop2"> Next</a></button>
</div>

    </div>
  );
}
