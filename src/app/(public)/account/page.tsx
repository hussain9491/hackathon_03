import React from 'react'

import Header from "../../../app/components/Header"
function page() {
    return (
        <div> <Header />
            <div className="h-72 w-full  bg-slate-300 justify-center items-center pt-24 bg-cover bg-center">

                <div className="relative text-center ">
                    <h1 className="text-5xl font-bold text-black">My Account</h1>
                    <p className="text-gray-700 mt-2 pt-5">
                        <span className="font-semibold text-black">Home</span> <span className="mx-2">&gt;</span> <span>Account</span>
                    </p>
                </div>
            </div>


            <div className='bg-white min-h-screen flex flex-row w-full '>
                {/* left side  */}
                <div className="flex flex-col  w-[50%] pr-52 pt-40">

                    <h1 className=" flex justify-start ml-20 font-extrabold text-black text-4xl">Login</h1>

                    <p className='font-semibold flex ml-0  justify-start  text-gray-900   pl-40 pt-10 text-lg'>Username or email address</p>

                    <button className=" h-20 ml-16 w-96 rounded-lg text-lg font-semibold text-white mt-8 bg-white border border-gray-600  ">O</button>

                    <button className="rounded-lg ml-20 mt-24 h-16 w-52 text-lg font-semibold text-black  bg-white border border-black  hover:bg-gray-100 transition">Login</button>
                </div>


                <div className="flex flex-col justify-start w-[50%] ">
                    <h1 className="  font-extrabold pr-16 pt-40 text-black text-4xl">Register</h1>
                    <p className='font-semibold pt-9 text-gray-900 text-left text-lg'>Email Address</p>
                    <button className=" h-20 w-96 rounded-lg text-lg font-semibold text-white mt-8 bg-white border border-gray-600  ">O</button>

                    <p className='font-medium pt-9 text-gray-900 text-left text-lg'>A link to set a new password will be sent to your email
                        address</p>

                    <br /><br />

                    <p className='font-medium pt-9 text-gray-900 text-left space-x-5 w-[80%] text-lg'>Your personal data will be used to support your
                        experience throughout this website, to manage access
                        to your account, and for other purposes described in our
                        <span className='font-semibold'> privacy policy</span></p>

                    <button className="rounded-lg h-16 w-52 text-lg font-semibold text-black mt-8 bg-white border border-black  hover:bg-gray-100 transition">Register</button>


                </div>




            </div>


        </div>
    )
}

export default page
