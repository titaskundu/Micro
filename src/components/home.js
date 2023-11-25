import React from 'react';
import home2 from '../assets/home2.png';

const Home = () => {
    return (
        <div className='relative ' >
        
          <div className=' flex flex-col bg-home-bg w-full bg-center h-[80vh] bg-cover bg-no-repeat relative items-center justify-center'>
            <div className=' mt-2 z-10 '>

                <h2 className='flex items-center justify-center text-3xl font-semibold mt-[-9rem] text-[#4d714d] '>Welcome To...</h2>
                <h1 className='flex items-center justify-center text-9xl font-extrabold mt-[0.5rem] text-green-950'>MICRO</h1>
                <h2 className='flex items-center justify-center text-9xl font-extrabold mt-2 text-green-950'>LABORATORY</h2>
                <p className=' flex items-center font-Oswald justify-center mt-4 text-2xl text-green-800 z-10'>A GMP Certified Manuacturing Comapny</p>
                
            </div>
            <div className='flex absolute'><img src={home2}  alt="" className=' w-[22rem] h-[16rem] mt-[28rem] ml-4 flex ' /></div>

          </div>
         
        </div>
            


    );
}

export default Home;
