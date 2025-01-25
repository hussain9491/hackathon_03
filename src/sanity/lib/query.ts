import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(
  `
  *[_type == "newProducts"]{
    id,
    name,
    "imageUrl": imageUrl.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }
  `
);

