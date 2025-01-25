import React from 'react'
import Header from "../../components/Header"
import page4item1 from "../../../(auth)/page4item1.png"
import Image from 'next/image'
function page() {
  return (
    <div>
      <Header/>
      <div className="h-80 w-full  bg-Bi justify-center items-center pt-24 bg-cover bg-center">

<div className="relative text-center ">
    <h1 className="text-5xl font-bold text-black">Cart </h1>
    <p className="text-gray-700 mt-2 pt-5">
        <span className="font-semibold text-black">Home</span> <span className="mx-2">&gt;</span> <span>Cart</span>
       </p>
   </div>
</div>



<div className=' flex w-full '>
  



<div className='bg-customskin ml-10  flex justify-center gap-16 items-center  font-semibold h-16 mt-20 w-[60%]'>
<div className=' mt-60 flex '>
<Image className='h-20 w-20 rounded-lg  bg-customYellow flex' src={page4item1} alt="Trenton modular sofa_3" />
<div className='ml-14 flex justify-center gap-36  font-semibold h-16 mt-10 w-[90%]'>

<p className='text-lg text-gray-500 text-center'>Asgard sofa</p>
<p className='text-base text-gray-500 '>250,000</p>
</div>
</div>


<button>Product</button><br />
<button>Price</button> 
<br /> <br /> <br />
<button>Quantity</button>
<button>Subtotal</button>

</div>


<div className='bg-customskin h-96 ml-11 mt-20 w-[25%]'>

    <h1 className='font-semibold flex text-3xl justify-center pt-7'>Cart Totals </h1>


    <div className='flex justify-center gap-28 mt-11 '>
    <h1 className='font-medium flex text-lg  pt-7'>SubTotal </h1>
    <p className='text-base font-semibold text-gray-400 pt-7'>Rs. 250,000,00</p>
    </div>



    <div className='flex justify-center gap-28 '>
    <h1 className='font-semibold flex text-lg  pt-7'>Total </h1>
    <p className='text-xl font-semibold text-customMehendi pt-7'> Rs. 250,000,00</p>
    </div>
<div className='flex justify-center mt-8'>
    
    <button className="px-16  py-4 text-lg font-medium text-black mt-8 rounded-2xl bg-customskin border border-black  hover:bg-gray-100 transition">Check Out</button>
</div>

</div>





 </div>




    </div>
  )
}

export default page
