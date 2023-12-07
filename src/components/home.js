import React from 'react';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import pic1 from '../assets/product/1.jpg';
import pic2 from '../assets/product/2.jpg';
import pic3 from '../assets/product/3.jpg';

const Home = () => {
  return (
    <div className='relative ' >

      <div className=' flex flex-col bg-home-bg w-full bg-center h-[80vh] bg-cover bg-no-repeat relative items-center justify-center'>
        <div className=' mt-2 z-10 '>

          <h2 className='flex items-center justify-center text-3xl font-semibold mt-[-9rem] text-[#4d714d] '>Welcome To...</h2>
          <h1 className='flex items-center justify-center text-9xl font-extrabold mt-[0.5rem] text-green-950'>MICRO</h1>
          <h2 className='flex items-center justify-center text-9xl font-extrabold mt-2 text-green-950'>LABORATORY</h2>
          <p className=' flex items-center font-Oswald justify-center mt-4 text-2xl text-green-800 z-10'>A GMP Certified Ayurvedic Manuacturing Comapny</p>

        </div>


      </div>
      <div>
        <div className='sm:mx-[10rem] sm:flex-row flex-col flex mt-32 justify-between relative'>
          <div className='absolute bg-green-950 h-9 w-1  ml-[-3rem]'></div>
          <div className=' bg-[#d1edd1] sm:w-[43rem] sm:h-[25rem] flex items-center justify-center rounded-2xl'>

            <p className=' max-w-xl text-2xl text-green-950 font-Oswald text-justify '>MICRO LABORATORY is a GMP certified schedule – T company, one of the most renowned manufacturer of Ayurvedic Medicine in India. Our organization was established in the year of 1973 and its registered office address is 138/1 G. T. Road, 1st Floor, Uttarpara, Hooghly, Pin – 712 258, West Bengal, India. <br /> <br /> We have a well-established infrastructure that ensures we manufacture a quality range of products. The entire unit is fully equipped with the latest and innovative tools and machinery. We have consistently maintained the quality of our products and continually adopt new technology and manufacturing processes.</p>
          </div>

          <div className='flex '><img src={home2} alt="" className=' w-[23rem] h-[17rem] mt-[1rem] mr-[8rem] flex ' /></div>

        </div>
        <div className='sm:mx-[10rem] sm:flex-row flex-col flex mt-32 justify-between relative'>
          <div className='flex'><img src={home3} alt="" className=' w-[23rem] h-[17rem] mt-[1rem] ml-[8rem] flex ' /></div>
          <div className=' bg-[#d1edd1] sm:w-[43rem] sm:h-[25rem] flex items-center justify-center rounded-2xl'>

            <p className=' max-w-xl text-2xl text-green-950 font-Oswald   text-justify'>We are engaged in the manufacturing and marketing of Ayurvedic Proprietary Medicine products through ethical promotion. The products/services offered are well-known for features like high quality, competitive prices, and requisite functionality.<br /><br />We formulate our products with the best quality raw materials and natural ingredients so that they do not pose any harmful effects on the user.<br /><br />We also have a third-party manufacturing facility producing Ayurvedic Liquids, Oil, Powder, Capsules, etc.  </p>
          </div>
        </div>
      </div>
      <div className=' flex bg-[#d1edd1] mt-32 font-sans font-semibold text-4xl sm:text-5xl mx-[3.5rem] sm:mx-[10rem] flex-col '>
        <div>

          <h1 className=' text-green-950'>Our Top Products</h1>
          <hr className=' shadow-md shadow-black mt-2  h-[3px]  bg-black' ></hr>
        </div>
        <div className='mt-20 mx-[3.5rem] sm:mx-[10rem] grid grid-cols-1 md:grid-cols-3 gap-5 '>
          <div className=' h-full w-full '><img src={pic1} alt="" className='h-[500px]' /><a href="#_" class=" mt-5 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-950 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-green-950 duration-300 -translate-x-full bg-green-400 group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-green-950 transition-all duration-300 transform group-hover:translate-x-full ease">View more</span>
            <span class="relative invisible">View more</span>
          </a></div>
          <div className=' h-full w-full  '><img src={pic2} alt="" className='h-[500px]' /><button>view product</button></div>
          <div className=' h-full w-full    '><img src={pic3} alt="" className='h-[500px] ' /><button>view product</button></div>


        </div>


      </div>

    </div>



  );
}

export default Home;
