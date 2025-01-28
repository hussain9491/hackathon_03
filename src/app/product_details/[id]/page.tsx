import { client } from '@/sanity/sanityClient'
import React from 'react'

const page  = async ( {params: {id}}:{params:{id:string}}) => {
    const query =`*[_types== newProducts && _id == $id] {
        name,
          price, 
          description,
          "id": _id,
          stockLevel,
          isFeaturedProduct,
          category ,
          "data": image.asset._ref
          
      }`
      

const product:products | null = await client.fetch(query, {id})


if (!product) {
  return <div>Product not found</div>
}

return (
  <div>
    <div key={product.id}>
      <h1>{product.name}</h1>
    </div>
  </div>
)
}   

export default page
