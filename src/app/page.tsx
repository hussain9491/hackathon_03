import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image"
import Home1 from "../(auth)/Home1.png"
import homeleft from "../(auth)/homeleft.png"
import homeRight from "../(auth)/homeRight.png"
import page3image1 from "../(auth)/page3image1.png"
import page3image2 from "../(auth)/page3image2.png"
import page3image3 from "../(auth)/page3image3.png"
import page3image4 from "../(auth)/page3image4.png"
import page4item1 from "../(auth)/page4item1.png"
import page4img1 from "../(auth)/page4img1.png"
import page4img2 from "../(auth)/page4img2.png"
import page4img3 from "../(auth)/page4img3.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock , faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div>


      <div className="bg-yellow-100 min-h-80 ">
        {/* Header */}
        <header className="p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Navigation Links */}
            <nav className="flex space-x-14 justify-center  pl-[40%]">
              <a href="/" className="text-black hover:text-gray-700 hover:underline">Home</a>
              <a href="/shop" className="text-black hover:text-gray-700 hover:underline">Shop</a>
              <a href="/about" className="text-black hover:text-gray-700 hover:underline">About</a>
              <Link href="/contact" className="text-black hover:text-gray-700 hover:underline">Contact</Link>
            </nav>

            {/* Icons */}
            <div className="flex space-x-8 pr-14 text-black">
             <Link href="/account"> <FaUser className="hover:text-gray-700 cursor-pointer" size={20} /> </Link>
              <FaSearch className="hover:text-gray-700 cursor-pointer" size={20} />
              <FaHeart className="hover:text-gray-700 cursor-pointer" size={20} />
              <FaShoppingCart className="hover:text-gray-700 cursor-pointer" size={20} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto flex items-center justify-center p-8">
          {/* Text Content */}
          <div className="max-w-md pr-20 pt-8">
            <h1 className="text-4xl font-semibold text-black mb-4  ">Rocket single  <br /> <p className="pt-5"> seater</p> </h1>
            <a
              href="/shop"
              className="inline-block font-medium text-black hover:text-gray-700  mt-4"
            >
              Shop Now
              <p className="text-black font-bold ">__________</p>
            </a>
          </div>

          {/* Image Content */}
          <div className="max-w-md">
            <Image src={Home1} alt="Home-page-Sofa" className="w-full h-full" />
          </div>
        </section>
      </div>


      <div className="  bg-pink-50 h-auto pt-14">



        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 items-center md:grid-cols-2 justify-center">
            {/* Product 1 */}
            <div className="flex flex-col items-center">
              <Image
                src={homeleft} 
                alt="Side Table"
                height={902}

                className="w-96 h-auto object-contain"
              />
              <h2 className="text-2xl font-semibold text-black -mt-24 pr-48">Side table </h2>
              <a
                href="/product/side-table-1"
                className="text-black mt-4 pr-56 hover:text-gray-700"
              >
                View More
                <p className="text-black font-bold -mt-3  mb-6 ">__________</p>
              </a>
            </div>

            {/* this is Product 2 image */}
            <div className="flex flex-col items-center ">
              <Image
                src={homeRight}
                alt="Side Table"
                className="w-96 h-auto object-contain"
              />
              <h2 className="text-2xl font-semibold pr-44 text-black -mt-24 ">Side table </h2>
              <a
                href="/product/side-table-2"
                className="text-black mt-4  hover:text-gray-700 pr-52"
              >
                View More
                <p className="text-black font-bold -mt-3 mb-6">__________</p>
              </a>
            </div>
          </div>
        </div>
      </div>
              {/* This is 3rd Home Page  */}
      <div className="bg-white  min-h-screen w-full pt-20">
        <h1 className="justify-center font-semibold text-center text-2xl">Top Picks For You</h1>
        <p className="text-xs font-normal text-center text-gray-400 pt-5">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights</p>

           {/* This is Simple Selling Items Images  */}
        <div className="flex  gap-6 justify-around items-center pt-20  " >


          <div className="h-48 w-52">
            <Image src={page3image1} alt="Trenton modular sofa_3" />

          </div>

          <div className="h-48 w-52">
            <Image src={page3image2} alt="Granite dining table with 
dining chairs" />

          </div>

          <div className="h-56 mb-10 w-52">
            <Image src={page3image3} alt="Outdoor bar table and 
stoole"/>

          </div>

          <div className="h-48 w-52">
            <Image src={page3image4} alt="Plain console with teak 
mirror" />

          </div>

        </div>

        {/* This is   Selling  items Name and Price */}

        <div className="flex flex-row justify-around items-center  text-center -mt-10 " >
          <div className="flex flex-col " >

            <h3 className="text-sm text-gray-900 text-center pt-16">Trenton modular sofa_3 </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 25,000.00</h1>
          </div>
          <div className="flex flex-col">

            <h3 className="text-sm text-gray-900 text-center pt-16">Granite dining table with
              dining chairs </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 25,000.00</h1>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm text-gray-900 text-center pt-20">Outdoor bar table and
              stoole </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 25,000.00</h1>
          </div>


          <div className="flex flex-col ">

            <h3 className="text-sm text-gray-900 text-center pt-16">Plain console with teak
              mirror</h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 25,000.00</h1>
          </div>
        </div>
        
        
        <a href="" className="Items center flex justify-center text-center text-lg font-semibold text-black pt-10 pl-14">View More</a>
        <p className="text-black font-bold Items center flex justify-center text-center pl-14 -mt-3 pb-6">____________</p>
      
      </div>
            {/* This is our Asgaard Sofa Item home page4  */}
<div className="h-screen w-full flex flex-row bg-customBeige">


<div className="flex justify-center items-center h-full w-[60%]  pt-4">
     <Image src={page4item1} alt=" Asgaard Sofa" /> {/* image  section*/}
  </div>

        {/* Button and Text Section  */}

<div className="flex flex-col pt-24 items-center justify-center pl-32 h-screen bg-[#FFF8E7] font-sans">
      <h2 className="text-xl text-black font-semibold mb-2">New Arrivals</h2>
      <h1 className="text-5xl font-bold text-black mb-6">Asgaard sofa</h1>
      <button className="px-20 py-4 text-lg font-semibold text-black mt-8 bg-white border border-black  hover:bg-gray-100 transition">Order Now</button>
    </div>
 </div>



  {/* This is our 5 Home page  */}
 <div className="bg-white min-h-screen">

<h1 className="flex justify-center items-center text-3xl  font-semibold text-black bg-white pt-10">Our Blogs</h1>
<h1 className="flex justify-center items-center text-sm  font-semibold text-gray-500 bg-white pt-6">Find a bright ideal to suit your taste with our great selection</h1>


<div className="flex flex-row ml-20 mr-20 pt-10  justify-around  rounded"> 

<div><Image src={page4img1} alt="tea" width={362 } height={500}/>   </div>
<div><Image src={page4img2} alt="laptop" width={362 } height={500}/>   </div>
<div><Image src={page4img3} alt="tea-with-laptop" width={362 } height={500}/>   </div>


</div>


<div className="text-xl flex flex-row ml-20 mr-20 pt-6 font-medium justify-around">
  <h1>Going all-in with millennial design</h1>
  <h1>Going all-in with millennial design</h1>
  <h1>Going all-in with millennial design</h1>
</div>
<div className="text-2xl flex flex-row ml-20 mr-20 pt-4 font-semibold justify-around">
  <h1>ReadMore</h1>
  <h1>ReadMore</h1>
  <h1>ReadMore</h1>
</div>

<div className="flex flex-row ml-11 mr-16  justify-around">
<p className="text-black font-bold Items center flex justify-center text-center pl-14 -mt-2 pb-6">______________</p>
<p className="text-black font-bold Items center flex justify-center text-center pl-12 -mt-2 pb-6">______________</p>
<p className="text-black font-bold Items center flex justify-center text-center pl-12 pr-10 -mt-2 pb-6">______________</p>
      
</div>

{/* <div className="text-2xl flex flex-row ml-20 mr-20 pt-4 font-semibold justify-around">
<FontAwesomeIcon icon={faClock}  size="xs" className="text-black h-5 rounded-full" />
</div> */}


<div className=" flex flex-row ml-20 mr-20 pt-0 font-semibold justify-around">
      {/* Single row */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faClock} className="text-gray-900 h-5" />
        <span className=" flex flex-row text-gray-700 text-sm font-normal">5 min</span>
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-900 font-light h-5" />
        <span className="text-sm text-gray-900 font-normal">12th Oct 2022</span>
      </div>
      {/* Repeat as necessary */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faClock} className="text-gray-900 h-5" />
        <span className=" text-gray-700 text-sm font-normal">5 min</span>
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-900 font-light h-5" />
        <span className=" text-gray-700 text-sm font-normal ">12th Oct 2022</span>
      </div>

      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faClock} className="text-gray-900 h-5" />
        <span className=" text-gray-700 text-sm font-normal">5 min</span>
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-900 font-light h-5" />
        <span className=" text-gray-700 text-sm font-normal ">12th Oct 2022</span>
      </div>
    </div>

    
    <a href="" className="Items center flex justify-center text-center text-lg font-semibold text-black pt-14 pl-10">View All Posts</a>
        <p className="text-black font-bold Items center flex justify-center text-center pl-10 -mt-1 pb-6">________________</p>
  </div>



 {/* Back ground image missing hai isii liye color daal dya */}

<div className="bg-slate-200 h-80 w-auto bg-cover ">

<div className="    justify-center items-center pt-28 ">
  <h1 className="font-extrabold text-6xl text-center text-black">Our Instagram</h1>
  <h3 className="font-medium text-lg text-center pt-3 text-black">Follow our store on Instagram</h3>


  <Button variant="outline" className="w-56 h-14 mt-5 text-center justify-center ml-[42%]  bg-white text-lg shadow-2xl text-gray-900 rounded-full">Follow Us</Button>
</div>

</div>



    </div>
  );
}
