import React from 'react';

const About = () => {
  return (
    <div>
      <div className=' flex bg-hero-pattern w-full bg-center h-[50vh] bg-cover bg-no-repeat relative '>
        <div className='bg-black bg-opacity-25 w-full h-[5rem] absolute bottom-0'  >

          <h1 className=' mx-[4rem] sm:mx-[10rem] text-5xl mt-3 font-Roboto'>About Us</h1>
        </div>
      </div>
      <div className='flex flex-col   mx-[2rem] sm:mx-[10rem]  mt-3 sm:mt-16 sm:text-2xl text-center font-Oswald text-green-950 text-xl  '>
        <div className='flex sm:flex-row flex-col items-center justify-evenly 
         '>
          <div className=' bg-[#d1edd1] sm:max-w-[30rem] rounded-xl my-4 p-5'>
              <p>In addition to our role as a manufacturer of Ayurvedic medicines, we also market a diverse range of pharmaceutical products from MILICHEM LABORATORIES, a renowned Mumbai-based pharmaceutical company, across the entire West Bengal region.</p>
          </div>
          <div className='bg-[#d1edd1] sm:max-w-[30rem] rounded-xl my-4 p-5'>
              <p>Furthermore, we operate a subsidiary dedicated to Veterinary Feed Supplements known as MICRO VET. This entity is engaged in both the manufacturing and marketing of Animal and Aqua feed products.</p>
          </div>
        </div>
        <div className='bg-[#d1edd1] sm:max-w-[30rem] rounded-xl my-4 p-5 sm:ml-[13rem] '>
            <p>All our operational and billing activities are conducted through the entity MICRO LABORATORIES, which is a pharmaceutical marketing organization.</p>
        </div>

      </div>

    </div>
  );
}

export default About;
