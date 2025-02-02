// import Link from 'next/link';
// import Image from 'next/image';
// import page4img2 from "../../../(auth)/page4img2.png"
// export default function BlogPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

//       <div className="flex flex-col lg:flex-row gap-12">
//                   <Image src={page4img2} alt="shduos"/>
        
//         {/* Main Content */}
//         <div className="lg:w-2/3">
//           <article className="mb-12">
//             <h1 className="text-3xl md:text-4xl font-bold mb-6">
//               Going all-in with millennial design
//             </h1>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
//               incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultrices leo integer 
//               malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus 
//               risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus 
//               mauris molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
//               Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque 
//               ornare aenean euismod elementum.
//             </p>
//             <Link href="#" className="text-black font-medium hover:underline">
//               Read more →
//             </Link>
//           </article>
//         </div>

//         {/* Sidebar */}
//         <aside className="lg:w-1/3">
//           {/* Categories */}
//           <div className="mb-12">
//             <h3 className="text-xl font-bold mb-6">Categories</h3>
//             <div className="space-y-4">
//               <div className="flex justify-between items-center pb-2 border-b">
//                 <span>Crafts</span>
//                 <span className="text-gray-500">2</span>
//               </div>
//               <div className="flex justify-between items-center pb-2 border-b">
//                 <span>Design</span>
//                 <span className="text-gray-500">8</span>
//               </div>
//               <div className="flex justify-between items-center pb-2 border-b">
//                 <span>Handmade</span>
//                 <span className="text-gray-500">7</span>
//               </div>
//               <div className="flex justify-between items-center pb-2 border-b">
//                 <span>Wood</span>
//                 <span className="text-gray-500">6</span>
//               </div>
//             </div>
//           </div>

//           {/* Recent Posts */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
//             <div className="space-y-6">
//               <div className="border-b pb-4">
//                 <h4 className="font-medium mb-2">Going all-in with millennial design</h4>
//                 <p className="text-sm text-gray-500">Mar 15, 2024</p>
//               </div>
//               <div className="border-b pb-4">
//                 <h4 className="font-medium mb-2">Exploring new materials in modern craft</h4>
//                 <p className="text-sm text-gray-500">Mar 12, 2024</p>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';
import page4img2 from "../../../(auth)/page4img2.png";
import page4img1 from "../../../(auth)/page4img1.png";
import page4img3 from "../../../(auth)/page4img3.png";
export default function BlogPost() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden overflow-y-hidden">
      {/* Featured Image */}
      <div className="mb-12">
        <Image
          src={page4img1}
          alt="Millennial design showcase"
          width={400}
          height={200}
          className="rounded-lg object-cover  h-64 md:h-96"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Article Section */}
        <div className="lg:w-2/3">
          <article>
            {/* ... existing article content ... */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Going all-in with millennial design
              </h1>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
        Going all-in with millennial design
                  <div className="mb-12 flex items-center gap-4">
            <Image
              src={page4img3}
              alt="Author avatar"
              width={80}
              height={80}
              className="rounded-full w-16 h-16"
            />
            <div>
              <h4 className="font-bold">Author Name</h4>
              <p className="text-sm text-gray-500">Design Expert</p>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            {/* ... existing categories ... */}
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
            <div className="space-y-6">
              {/* Post 1 */}
              <div className="border-b pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative w-16 h-16">
                    <Image
                      src={page4img2} // Replace with actual post image
                      alt="Post thumbnail"
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Exploring new ways of discarding</h4>
                    <p className="text-sm text-gray-500 mt-1">03 Aug 2022</p>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={page4img3} // Replace with actual post image
                      alt="Post thumbnail"
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Handmade pieces that work time for novice</h4>
                    <p className="text-sm text-gray-500 mt-1">28 Jul 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}