import React from 'react';
import LOGO from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <header class="flex backdrop-blur-lg bg-transparent shadow-md sm:justify-between sm:flex-nowrap z-50 w-full bg-white text-sm py-4 px-[9.5rem] dark:bg-gray-800">
                <div className='flex'>
                    <img src={LOGO} alt="" className=' max-w-[90px]' />
                    <div className=' ml-11 mt-2'>
                        <h1 className='text-4xl sm:text-4xl text-green-950  font-extrabold tracking-tight'>MICRO</h1><h2 className='text-3xl sm:text-3xl text-green-800  font-bold tracking-tight mt-[-9px]'>Laboratory</h2>
                    </div>
                </div>
                <nav class="">
                    
                    <div id="navbar-with-collapse" className=" sm:flex ">
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
