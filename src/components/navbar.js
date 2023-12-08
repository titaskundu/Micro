import React from 'react';
import LOGO from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    let [open,setOpen]=useState(false);
    return (
        <div>
            <header class="flex backdrop-blur-lg bg-transparent shadow-md sm:justify-between sm:flex-nowrap z-50 w-full bg-white text-sm py-4 px-[9.5rem] dark:bg-gray-800 ">
                <div className='flex'>
                    <img src={LOGO} alt="" className='absolute left-8 w-16 sm:w-28 sm:relative' />
                   
                    <div className='sm:ml-[4.75rem] sm:mt-6 ml-[-3rem] mt-[0.7rem] '>
                        <h1 className='text-2xl sm:text-4xl text-green-950  font-extrabold tracking-tight'>MICRO</h1><h2 className='text-xl sm:text-3xl text-green-800  font-bold tracking-tight mt-[-9px]'>Laboratory</h2>
                    </div>
                </div>
                <div className='sm:hidden'> <RxHamburgerMenu className=' '/> </div>
                <nav class="">
                    
                    <div id="navbar-with-collapse" className=" hidden sm:flex ">
                        <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-center sm:mt-2 pt-4">
                            <Link class="font-medium text-green-900 hover:text-green-600  text-xl transition ease-in-out duration-300 pb-1" to="/" aria-current="page">Home</Link>
                            <Link class="font-medium text-green-900   text-xl hover:text-green-600 transition ease-in-out duration-300 pb-1 " to="/about">About Us</Link>
                            <Link class="font-medium text-green-900   text-xl hover:text-green-600 transition ease-in-out duration-300 pb-1" to="/">Products</Link>
                            <Link class="font-medium text-green-900   text-xl hover:text-green-600 transition ease-in-out duration-300 pb-1" to="/products">Gallery</Link>
                            <Link class="font-medium text-green-900   text-xl hover:text-green-600 transition ease-in-out duration-300 pb-1" to="/contact">Contact</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
