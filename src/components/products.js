import React from 'react';
import { useState } from 'react';
import close from '../assets/close.png'

import "react-image-lightbox/style.css";

import index from '../assets/index'








// import { Gallery } from "react-grid-gallery";





const Products = () => {

   
    const [file, setFile]=useState(null);
   
    return (
        <div>
            <div className=' mt-8'>
                <h1 className=' font-Roboto text-4xl sm:text-5xl mx-[3.5rem] sm:mx-[10rem]  '>Our Products </h1><hr className=' mt-2 w-full h-[3px]  bg-slate-400'></hr>

                <div class="mt-10 mx-[3.5rem] sm:mx-[10rem] grid grid-cols-1 md:grid-cols-3 gap-5">
                  
                    {index.images.map((imageUrl, index)=>(
                        
                        <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] rounded-xl ' key={index} onClick={()=>setFile(imageUrl.url)}>
                            <img src={imageUrl.path} class="h-full  w-full  object-cover  " alt="abcd"   />
                        
                        </div>
                    ))}

                </div>
                { file?(
                    <div className=' fixed h-full w-full  top-0 left-0 bg-black bg-opacity-70'>
                    
                    <img src={close} className='absolute right-10 top-4 cursor-pointer 'onClick={()=>setFile(null)}/>
                    <img src={file} className=' absolute top-[20%] left-[7%] w-[80%] md:w-[44%] md:h-[81%] md:top-[6rem] md:left-[27rem]'/>
                    
                   
                    
                </div>
                ):null
                }    

            </div>
            <div>
                <h1 className=' mt-8 mx-[3.5rem] sm:mx-[10rem] font-Roboto text-4xl sm:text-5xl'>Visual Aids</h1><hr className=' shadow-md shadow-black mt-2 w-full h-[3px]  bg-slate-400'></hr>



                <div class="mt-10 mx-[3.5rem] sm:mx-[10rem] grid grid-cols-1 md:grid-cols-3 gap-5">
                {index.visual_aids.map((imageUrl, index)=>(
                        
                        <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] rounded-xl ' key={index} onClick={()=>setFile(imageUrl)}>
                            <img src={imageUrl} class="h-full  w-full  object-cover  " alt="abcd"   />
                        
                        </div>
                    ))}
                    

                </div>
                { file?(
                    <div className=' fixed h-full w-full  top-0 left-0 bg-black bg-opacity-70'>
                    
                    <img src={close} className='absolute right-10 top-4 cursor-pointer 'onClick={()=>setFile(null)}/>
                    <img src={file} className=' absolute top-[20%] left-[7%] w-[80%] md:w-[44%] md:h-[81%] md:top-[6rem] md:left-[27rem]'/>
                    
                   
                    
                </div>
                ):null
                }



            </div>
        </div>
    );
}

export default Products;
