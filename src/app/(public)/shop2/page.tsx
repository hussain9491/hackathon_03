import React from 'react'
  import Header from "../../components/Header"
  import Image from 'next/image'
  import page3image4 from "../../../(auth)/page3image4.png"
  import page3image1 from "../../../(auth)/page3image1.png"
  import page3image2 from "../../../(auth)/page3image2.png"
  import page3image3 from "../../../(auth)/page3image3.png"
  import coffeetable from "../../../(auth)/coffeetable.png"
  import Kent_coffee_table_1 from "../../../(auth)/Kent_coffee_table1.png"
  import Round_coffee_table1 from "../../../(auth)/Round coffee table_color1.png"
  import Reclaimed_teak_coffee_table1 from "../../../(auth)/Reclaimed teak coffee table1.png"
  import Plainconsole_1 from "../../../(auth)/Plainconsole_1.png"
  import ReclaimedteakSideboard1 from "../../../(auth)/Reclaimed teak coffee table1.png"
  import SJP_08251 from "../../../(auth)/SJP_08251.png"
  import Bellachairandtable1 from "../../../(auth)/Bellachairandtable1.png"
  import homeleft from "../../../(auth)/homeleft.png"
  import Outdoorsofaset1 from "../../../(auth)/Outdoorsofaset1.png"
  import Mayasofathreeseater1 from "../../../(auth)/Mayasofathreeseater1.png"
  import page4item1 from "../../../(auth)/page4item1.png"
  import { HiAdjustmentsHorizontal, HiAdjustmentsVertical, HiBars3, HiSquares2X2 } from 'react-icons/hi2'
  import { HiDotsVertical, HiSwitchVertical } from 'react-icons/hi'
  import Link from 'next/link'
  // import products from '@/sanity/schemaTypes/products'
  import { client } from '@/sanity/sanityClient'
  // import { client } from '@/sanity/client'
  async function fetchproducts() {




  const query = `*[_typeof == newProducts] {
    category, id, price, name, description,stockLevel,
      discountPercentage ,isFeaturedProduct    }`
    
  const products = await client.fetch(query)
  console.log(products);











    return (
      <div className='overflow-x-hidden overflow-y-hidden  '>
        <Header />

        {/* background section  */}
        <div className="h-80 w-full bg-Bi justify-center items-center pt-24 bg-cover bg-center">

          <div className="relative text-center ">
            <h1 className="text-5xl font-bold text-black">Shop </h1>
            <p className="text-gray-700 mt-2 pt-5">
              <span className="font-semibold text-black">Home</span> <span className="mx-2">&gt;</span> <span>Shop</span>
            </p>
          </div>
        </div>

        {/* search option  */}
        <div className='bg-custompin h-20 mt-10 w-screen sticky top-0 flex justify-around items-center max-sm:hidden '>
          <div className='flex gap-4'>

            {/* Filter Icons  */}
            <div className="flex items-center gap-2 cursor-pointer">

            <HiAdjustmentsHorizontal className="w-6 h-7 text-black"/>
            <h1 className='text-lg font-md border-solid'>Filter</h1>
            </div>

            <HiSquares2X2 className="w-5 h-5 mt-1 cursor-pointer text-black" />


            <HiBars3 className="w-5 h-5 mt-1 cursor-pointer text-black" />
            <HiSwitchVertical className="w-5 h-5 mt-1 cursor-pointer text-black ml-6" />
          <h1 className=' text-black text-base font-md ml-6'>Showing 1-16 of 32 results</h1>
          </div>

  <div className='flex ml-16  gap-6'>
    <h1 className='pt-2  text-lg font-md'>Show</h1>
    <button className='h-11 w-11 bg-white text-gray-300'>16</button>


    <h1 className='pt-2  text-lg font-md'>Short by</h1>
    <button className='h-11 w-28 items-start bg-white text-gray-300'> Default</button>
    
  </div>
        </div>

        {/* Images Section */}

        <div className="flex   justify-around items-center pt-20    " >




          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Trenton modular sofa_3"> <Image src={page3image1} alt="Trenton modular sofa_3" /></button>
          </div>



          <div className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg  h-48 w-52">
          <button title="Trenton modular sofa_3" >  <Image src={page3image2} alt="Granite dining table with 
  dining chairs" /> </button>
          </div>

          <div className="h-56 mb-10 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Trenton modular sofa_3">  <Image src={page3image3} alt="Outdoor bar table and 
  stoole"/> </button>
          </div>


          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Trenton modular sofa_3"> <Image src={page3image4} alt="Plain console with teak 
  mirror" /> </button>
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



          <div className="flex flex-col  ">
            <h3 className="text-sm text-gray-900 text-center pt-16">Plain console with teak
              mirror</h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 25,000.00</h1>
          </div>




        </div>

        {/* 2nd Row Section  */}

        {/* Images Section */}

        <div className="flex  gap-6 justify-around items-center pt-20  " >




          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Trenton modular sofa_3"> <Image src={coffeetable} alt="coffee-Table" /> </button>
          </div>



          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Trenton modular sofa_3">  <Image src={Kent_coffee_table_1} alt="Kent_coffee_table_1" /> </button>
          </div>


          <div className="h-56 mb-10 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Trenton modular sofa_3"> <Image src={Round_coffee_table1} alt="Round_coffee_table1" /> </button>
          </div>



          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Trenton modular sofa_3"> <Image src={Reclaimed_teak_coffee_table1} alt="Reclaimed_teak_coffee_table1" /> </button>
          </div>

        </div>

        {/* This is   Selling  items Name and Price */}

        <div className="flex flex-row justify-around items-center  text-center -mt-10 " >


          <div className="flex flex-col " >
            <h3 className="text-sm text-gray-900 text-center pt-10">Grain coffee table </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 15,000.00</h1>
          </div>




          <div className="flex flex-col">
            <h3 className="text-sm text-gray-900 text-center pt-10">Kent coffee table</h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 250,000.00</h1>
          </div>



          <div className="flex flex-col">
            <h3 className="text-sm text-gray-900 text-center pt-10">Round coffee table_color 2 </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 251,000.00</h1>
          </div>




          <div className="flex flex-col ">
            <h3 className="text-sm text-gray-900 text-center pt-10">Reclaimed teak coffee table</h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 25,200.00</h1>
          </div>

        </div>


        {/* this is 3rd row item  */}
        {/* Images Section */}

        <div className="flex  gap-6 justify-around items-center pt-20  " >



          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Plainconsole_1">   <Image src={Plainconsole_1} alt="Plainconsole_1" /> </button>
          </div>



          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="ReclaimedteakSideboard1"><Image src={ReclaimedteakSideboard1} alt="ReclaimedteakSideboard1" /> </button>
          </div>



          <div className="h-56 mb-5 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="SJP_08251">   <Image src={SJP_08251} alt="SJP_08251" /> </button>
          </div>



          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image src={Bellachairandtable1} alt="Bellachairandtable1" />
          </div>

        </div>

        {/* This is   Selling  items Name and Price */}

        <div className="flex flex-row justify-around items-center  text-center -mt-10 " >


          <div className="flex flex-col justify-center " >
            <h3 className="text-sm text-gray-900 text-center pt-10">Trenton modular sofa_3 </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 258,200.00</h1>
          </div>



          <div className="flex flex-col ">
            <h3 className="text-sm text-gray-900 text-center pt-10 pr-12">Reclaimed teak Sideboard </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4 pr-8"> RS 20,000.00</h1>
          </div>


          <div className="flex flex-col">
            <h3 className="text-sm text-gray-900 text-center pt-1 pr-10 ">SJP_0825  </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4 pr-8"> RS 200,000.00</h1>
          </div>



          <div className="flex flex-col ">
            <h3 className="text-sm text-gray-900 text-center pt-10">Bella chair and table</h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 100,000.00</h1>
          </div>

        </div>

        {/* This is   Selling  items Images*/}
        {/* 4th row  */}

        <div className="flex  gap-6 justify-around items-center pt-20  " >


          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Plainconsole_1">  <Image src={homeleft} alt="Granite square side table" /> </button>
          </div>


          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Plainconsole_1"> <Image src={page4item1} alt="Asgaard sofa" /> </button>
          </div>


          <div className="h-52 mb-0 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Plainconsole_1">  <Image src={Mayasofathreeseater1} alt="Maya sofa three seater" /> </button>
          </div>


          <div className="h-48 w-52 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <button title="Plainconsole_1">  <Image src={Outdoorsofaset1} alt="Outdoor sofa set" /> </button>
          </div>

        </div>

        {/* This is   Selling  items Name and Price */}

        <div className="flex flex-row justify-around items-center  text-center -mt-10 " >


          <div className="flex flex-col justify-center " >
            <h3 className="text-sm text-gray-900 text-center pt-10">Granite square side table </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 258,800.00</h1>
          </div>


          <div className="flex flex-col ">
            <h3 className="text-sm text-gray-900 text-center pt-10 pr-12">Asgaard sofa </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4 pr-8"> RS 250,000.00</h1>
          </div>



          <div className="flex flex-col">
            <h3 className="text-sm text-gray-900 text-center pt-0 pr-10 ">Maya sofa three seater </h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4 pr-8"> RS 115,000.00</h1>
          </div>


          <div className="flex flex-col ">

            <h3 className="text-sm text-gray-900 text-center pt-10">Outdoor sofa set</h3>
            <h1 className="text-lg text-black text-center font-semibold pt-4"> RS 244,000.00</h1>
          </div>
        </div>


  <div className='bg-white h-80 flex justify-center items-center text-sm gap-4 '>
    <button className='h-12 w-12 bg-customskin text-gray-950 mt-36 rounded-lg'> <a href="/shop">1</a> </button>
    <button className='h-12 w-12 bg-customYellow text-gray-950 mt-36 rounded-lg'><Link href="/shop">2</Link></button>
    <button className='h-12 w-12 bg-customskin text-gray-950 mt-36 rounded-lg'><a href="/shop">3 </a></button>
    <button className='h-11 w-20 bg-customskin text-gray-950 mt-36 rounded-lg' > <a href="/shop">Next</a></button>
  </div>




  <div className="flex flex-row items-center gap-14 justify-around mt-7 bg-custompin h-72 mb-32 ">
                  <div className="w-[80%] flex gap-16">


                      <div className=" flex flex-col ">

                          <h1 className="font-extrabold text-2xl">Free Delivery</h1>

                          <p className="text-gray-500 text-md pt-4">For all oders over $50, consectetur
                              adipim scing elit</p>
                      </div>

                      <div className=" flex flex-col ">

                          <h1 className="font-extrabold text-2xl ">90 Days Return</h1>

                          <p className="text-gray-500 text-md pt-4">If goods have problems, consectetur
                              adipim scing elit.</p>
                      </div>
                      <div className=" flex flex-col ">

                          <h1 className="font-extrabold text-2xl">Free Delivery</h1>
                          <p className="text-gray-500 text-md pt-4">100% secure payment, consectetur
                              adipim scing elit</p>
                      </div>


                  </div>
              </div>





      </div>
    )
  }

  export default fetchproducts;


