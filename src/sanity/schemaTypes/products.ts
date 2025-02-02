// /* eslint-disable import/no-anonymous-default-export */
// export  default {
//     name: 'newProducts',
//     title: 'newProducts',
//     type: 'document',
//     fields: [
//       {
//          _id : 'id',
//         title: 'ID',
//         type: 'string',
//       },
//       {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//       },
//       {
      //   name: 'imageUrl',
      //   type: 'image',
      //   title: 'Image',
      //   options: {
      //     hotspot: true,
      //   },
      //   description: 'Upload an image of the product.',
      // },
//       {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//       },
//       {
//         name: 'discountPercentage',
//         title: 'Discount Percentage',
//         type: 'number',
//       },
//       {
//         name: 'isFeaturedProduct',
//         title: 'Is Featured Product',
//         type: 'boolean',
//       },
//       {
//         name: 'stockLevel',
//         title: 'Stock Level',
//         type: 'number',
//       },
//       {
//         name: 'category',
//         title: 'Category',
//         type: 'string',
//       },
//     ],
//   };
  

const newProductsSchema = {
  name: 'newProducts',
  title: 'New Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'imageUrl',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      description: 'Upload product image',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    //
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule: { min: (arg0: number) => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.min(1).max(5)
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'text'
    },
    //
    {
      name: 'isFeaturedProduct',
      title: 'Featured Product',
      type: 'boolean',
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};

export default newProductsSchema;