import React from 'react';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import pic1 from '../assets/product/1.jpg';
import pic2 from '../assets/product/2.jpg';
import pic3 from '../assets/product/3.jpg';
import gmp from '../assets/gmp.svg';
import verified from '../assets/verified.png';
import secure from '../assets/secure.png';
const Home = () => {
  return (
    <div className='relative ' >

      <div className=' flex flex-col bg-home-bg w-full bg-center h-[50vh] sm:h-[80vh] bg-cover bg-no-repeat relative items-center  justify-center'>
        <div className=' mt-2 z-10 '>

          <h2 className='flex items-center justify-center sm:text-3xl font-semibold sm:mt-[-9rem] text-[#4d714d] '>Welcome To...</h2>
          <h1 className='flex items-center justify-center text-5xl sm:text-9xl font-extrabold mt-[0.5rem] text-green-950'>MICRO</h1>
          <h2 className='flex items-center justify-center text-5xl sm:text-9xl font-extrabold mt-2 text-green-950'>LABORATORY</h2>
          <p className=' flex items-center font-Oswald justify-center mt-4 sm:text-2xl text-green-800 z-10'>A GMP Certified Ayurvedic Manuacturing Comapny</p>

        </div>


      </div>
      <div>
        <div className='sm:mx-[10rem] sm:flex-row flex-col flex mt-32 justify-between relative mx-6'>

          <div className=' bg-[#d1edd1] sm:w-[43rem] sm:h-[25rem] flex items-center justify-center rounded-2xl p-7'>

            <p className=' max-w-xl text-2xl text-green-950 font-Oswald text-justify '>MICRO LABORATORY is a GMP certified schedule – T company, one of the most renowned manufacturer of Ayurvedic Medicine in India. Our organization was established in the year of 1973 and its registered office address is 138/1 G. T. Road, 1st Floor, Uttarpara, Hooghly, Pin – 712 258, West Bengal, India. <br /> <br /> We have a well-established infrastructure that ensures we manufacture a quality range of products. The entire unit is fully equipped with the latest and innovative tools and machinery. We have consistently maintained the quality of our products and continually adopt new technology and manufacturing processes.</p>
          </div>

          <div className='flex '><img src={home2} alt="" className=' w-[23rem] h-[17rem] mt-[1rem] mr-[8rem] flex ' /></div>

        </div>
        <div className='sm:mx-[10rem] sm:flex-row flex-col flex mt-32 justify-between relative mx-6'>
          <div className='sm:flex hidden'><img src={home3} alt="" className=' w-[23rem] h-[17rem] mt-[1rem] ml-[8rem] flex ' /></div>
          <div className=' bg-[#d1edd1] sm:w-[43rem] sm:h-[25rem] flex items-center justify-center rounded-2xl p-7'>

            <p className=' max-w-xl text-2xl text-green-950 font-Oswald   text-justify'>We are engaged in the manufacturing and marketing of Ayurvedic Proprietary Medicine products through ethical promotion. The products/services offered are well-known for features like high quality, competitive prices, and requisite functionality.<br /><br />We formulate our products with the best quality raw materials and natural ingredients so that they do not pose any harmful effects on the user.<br /><br />We also have a third-party manufacturing facility producing Ayurvedic Liquids, Oil, Powder, Capsules, etc.  </p>
          </div>
        </div>
      </div>
      <div className='sm:mx-[10rem] flex-col flex mt-32 justify-between mx-6  '>
        <h1 className=' sm:text-5xl text-4xl font-semibold font-sans text-green-950 ml-8'>Why us ?</h1>

        <div className='mt-20 mx-[3.5rem] sm:mx-[10rem] flex sm:flex-row flex-col items-center justify-evenly'>
          <div className=' w-[320px] mx-4 flex flex-col justify-around justify-top items-center bg-[#d1edd1] sm:w-[330px] h-[330px] rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-none hover:border-green-700 hover:border-2 transition-all delay-10 ease-in cursor-pointer my-3'><img src={gmp} className=' flex   w-[10rem] mt-2' alt="" /><div className=' mb-[33px] '><p className=' text-green-950 text-2xl font-Oswald' >GMP Certified unit</p></div></div>
          <div className=' w-[320px] mx-4 bg-[#d1edd1] sm:w-[330px] h-[330px] flex flex-col justify-around  items-center  rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-none hover:border-green-700 hover:border-2 transition-all delay-10 ease-in cursor-pointer my-3'><img src={verified} alt="" className='flex  mt-2' /><p className=' text-green-950 text-2xl max-w-[235px] text-center font-Oswald '>More than 50 years of trust.</p> </div>
          <div className=' w-[320px] mx-4 bg-[#d1edd1] sm:w-[330px] h-[330px] flex flex-col justify-around  items-center rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-none hover:border-green-700 hover:border-2 transition-all delay-10 ease-in cursor-pointer my-3'><img src={secure} alt="" className='flex  mt-2' /><p className=' text-green-950 text-2xl text-center max-w-[235px] font-Oswald'>Quality products at affordable prices</p></div>
        </div>




      </div>
      <div className='sm:mx-[10rem] flex-col flex mt-32 justify-between mx-6  '>
        <h1 className=' sm:text-5xl text-4xl font-semibold font-sans text-green-950 ml-8'>Our Product range includes...</h1>
        <div className='mt-20 mx-[3.5rem] sm:mx-[10rem] flex sm:flex-row flex-col items-center justify-evenly'>
          <div className=' w-[320px] my-3 mx-4 flex flex-col justify-around justify-top items-center bg-[#d1edd1]  sm:w-[330px] h-[330px] rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-none hover:border-green-700 hover:border-2 hover:bg-card-bg hover:bg-opacity-25  bg-center bg-cover bg-no-repeat transition-all delay-10 ease-in cursor-pointer '><p className='text-2xl text-center font-Oswald text-green-950'>	Proprietary Medicine products like Liquids, Oil, Powder, Capsules, etc</p></div>
          <div className=' w-[320px] my-3 mx-4 flex flex-col justify-around justify-top items-center bg-[#d1edd1]  sm:w-[330px] h-[330px] rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-none hover:border-green-700 hover:border-2 hover:bg-card-bg hover:bg-opacity-25  bg-center bg-cover bg-no-repeat transition-all delay-10 ease-in cursor-pointer p-3 '><p className='text-2xl text-center font-Oswald text-green-950'>Single Herb Supplements like Amlaki, Neem, Ashwagandha, and the list continues.</p></div>
          <div className=' w-[320px] my-3 mx-4 flex flex-col justify-around justify-top items-center bg-[#d1edd1]  sm:w-[330px] h-[330px] rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-none hover:border-green-700 hover:border-2 hover:bg-card-bg hover:bg-opacity-25  bg-center bg-cover bg-no-repeat transition-all delay-10 ease-in cursor-pointer '><p className='text-2xl text-center font-Oswald text-green-950'>Classical Medicines like Churna, Guggul, Vati, and Medicated Oils.</p></div>

        </div>

      </div>


      <div className=' flex bg-[#d1edd1] mt-32 font-sans font-semibold text-4xl sm:text-5xl mx-[3.5rem] sm:mx-[10rem] flex-col sm:h-[52rem] h-[125rem] rounded-2xl '>
        <div className=' mt-16 ml-8'>

          <h1 className=' text-green-950'>Our Top Products</h1>
          <hr className=' shadow-md shadow-black mt-2 ml-[-12px]  w-[98%] h-[3px]  bg-black' ></hr>
        </div>
        <div className='mt-20 mx-[3.5rem] sm:mx-[10rem] grid grid-cols-1 md:grid-cols-3 gap-5  '>
          <div className=' h-full w-full '><img src={pic1} alt="" className='h-[500px]' /><a href="#_" class=" mt-5 relative inline-flex items-center justify-center p-4  w-[8rem] h-12 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-950 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-green-950 duration-300 -translate-x-full bg-green-400 group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-green-950 text-lg transition-all duration-300 transform group-hover:translate-x-full ease ">View more</span>
            <span class="relative invisible">View more</span>
          </a></div>
          <div className=' h-full w-full  '><img src={pic2} alt="" className='h-[500px]' /><a href="#_" class=" mt-5 relative inline-flex items-center justify-center p-4  w-[8rem] h-12 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-950 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-green-950 duration-300 -translate-x-full bg-green-400 group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-green-950 text-lg transition-all duration-300 transform group-hover:translate-x-full ease ">View more</span>
            <span class="relative invisible">View more</span>
          </a></div>
          <div className=' h-full w-full    '><img src={pic3} alt="" className='h-[500px] ' /><a href="#_" class=" mt-5 relative inline-flex items-center justify-center p-4  w-[8rem] h-12 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-950 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-green-950 duration-300 -translate-x-full bg-green-400 group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-green-950 text-lg transition-all duration-300 transform group-hover:translate-x-full ease ">View more</span>
            <span class="relative invisible">View more</span>
          </a></div>


        </div>


      </div>

    </div>



  );
}

export default Home;
