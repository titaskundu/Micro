import React from 'react';
import bm_oil_1 from '../assets/visual aid/bm_oil_1.jpg';
import ciptamin from '../assets/visual aid/ciptamin.jpg';
import microalka from '../assets/visual aid/microalka.jpg';
import microbeal from '../assets/visual aid/microbeal.jpg';
import microcaugh_c from '../assets/visual aid/microcaugh_c.jpg';
import microcaugh_e from '../assets/visual aid/microcaugh_e.jpg';
import microcium_gold from '../assets/visual aid/microcium_gold.jpg';
import microcium_gold_2 from '../assets/visual aid/microcium_gold_2.jpg';
import microcough from '../assets/visual aid/microcough.jpg';
import microliv from '../assets/visual aid/microliv.jpg';
import microliv_drop from '../assets/visual aid/microliv_drop.jpg';
import microtone from '../assets/visual aid/microtone.jpg';
import microvita from '../assets/visual aid/microvita.jpg';
import microvita_L from '../assets/visual aid/microvita_L.jpg';
import microzyme from '../assets/visual aid/microzyme.jpg';
import microzyme_ from '../assets/visual aid/microzyme_.jpg';
import microzyme_1 from '../assets/visual aid/microzyme_1.jpg';
import microzyme_drop from '../assets/visual aid/microzyme_drop.jpg';
import orthonyl from '../assets/visual aid/orthonyl.jpg';
import { useState } from 'react';

// import { Gallery } from "react-grid-gallery";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";




const Products = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className=' mt-8'>
                <h1 className=' font-Roboto text-4xl sm:text-5xl mx-[3.5rem] sm:mx-[10rem]  '>Our Products </h1><hr className=' mt-2 w-full h-[3px]  bg-slate-400'></hr>
            </div>
            <div>
                <h1 className=' mt-8 mx-[3.5rem] sm:mx-[10rem] font-Roboto text-4xl sm:text-5xl'>Visual Aids</h1><hr className=' shadow-md shadow-black mt-2 w-full h-[3px]  bg-slate-400'></hr>



                <div class="mt-10 mx-[3.5rem] sm:mx-[10rem] grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img src={bm_oil_1} class="h-full  w-full  object-cover  " alt=""  onClick={() => setIsOpen(true)} />
                        {isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={ciptamin} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microalka} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microbeal} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcaugh_c} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcaugh_e} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcium_gold} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcium_gold_2} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcough} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microliv} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microliv_drop} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microtone} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microvita} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microvita_L} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microzyme} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microzyme_} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microzyme_1} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microzyme_drop} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={orthonyl} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                            imageTitle="bm oil"
                            imageCaption="bm oil"
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>

                </div>



            </div>
        </div>
    );
}

export default Products;
