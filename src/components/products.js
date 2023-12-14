import React from 'react';
import bm_oil_1 from '../assets/visual aid/MICRO BM OIL.jpeg';
import ciptamin from '../assets/visual aid/CYPTAMINE.jpeg';
import mecid from '../assets/visual aid/MECID.jpeg';
import microalka from '../assets/visual aid/MICROALKA.jpeg';
import microbeal from '../assets/visual aid/microbeal.jpg';
import microbealplus from '../assets/visual aid/microbeal__.jpg';
import microcaugh from '../assets/visual aid/MICROCOUGH.jpeg';
import microcaugh_c from '../assets/visual aid/MICROCOUGH-C.jpeg';
import microcaugh_e from '../assets/visual aid/MICROCOUGH-E.jpeg';
import microcaugh_AT from '../assets/visual aid/MICROCOUGH-AT.jpeg';
import microliv from '../assets/visual aid/MICROLIV.jpeg';
import microliv_drop from '../assets/visual aid/MICROLIVD.jpeg';
import microtone from '../assets/visual aid/MICROTONE.jpeg';
import microvitah from '../assets/visual aid/MICROVITA-H.jpeg';
import microvita_L from '../assets/visual aid/MICROVITA-L.jpeg';
import microvita_LD from '../assets/visual aid/MICROVITA-LD.jpeg';
import microzyme_ from '../assets/visual aid/microzyme_.jpg';
import microzyme_1 from '../assets/visual aid/microzyme_1.jpg';
import microzyme_drop from '../assets/visual aid/MICROZYME DROPS.jpeg';
import orthonyl from '../assets/visual aid/ORTHO-NYL OIL.jpeg';
import { useState } from 'react';



import bm_oil_ from '../assets/picture/20231111_120944.jpg';
import microzyme1 from '../assets/picture/20231111_115309.jpg';
import micrtone from '../assets/picture/20231111_115622.jpg';
import micrzymeplus from '../assets/picture/20231111_115915.jpg';
import orthnyl from '../assets/picture/20231111_115948.jpg';
import vital from '../assets/picture/20231111_120059.jpg';
import bael from '../assets/picture/20231111_120810.jpg';
import baelplus from '../assets/picture/20231111_120835.jpg';
import alka from '../assets/picture/20231111_120850.jpg';
import cough from '../assets/picture/20231111_121134.jpg';
import zymed from '../assets/picture/20231111_121157.jpg';
import coughe from '../assets/picture/20231111_121215.jpg';
import coughat from '../assets/picture/20231111_121242.jpg';
import mecidd from '../assets/picture/20231111_121308.jpg';
import liv from '../assets/picture/20231111_121749.jpg';
import cyptaminee from '../assets/picture/20231111_123954.jpg';
import vitald from '../assets/picture/20231111_124032.jpg';
import livd from '../assets/picture/20231111_124051.jpg';
import coughc from '../assets/picture/20231111_124109.jpg';
import vitah from '../assets/picture/20231111_124202.jpg';






// import { Gallery } from "react-grid-gallery";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";




const Products = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className=' mt-8'>
                <h1 className=' font-Roboto text-4xl sm:text-5xl mx-[3.5rem] sm:mx-[10rem]  '>Our Products </h1><hr className=' mt-2 w-full h-[3px]  bg-slate-400'></hr>

                <div class="mt-10 mx-[3.5rem] sm:mx-[10rem] grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img src={bm_oil_} class="h-full  w-full  object-cover  " alt=""  onClick={() => setIsOpen(true)} />
                        {isOpen && <Lightbox
                             
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max  w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={cyptaminee} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={ciptamin}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={alka} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microalka}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={bael} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microbeal}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={baelplus} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microbealplus}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={coughc} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microcaugh_c}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={coughe} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microcaugh_e}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={mecidd} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={mecid}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                   
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={vitah} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microvitah}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={liv} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microliv}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={livd} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microliv_drop}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={micrtone} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microtone}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={cough} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microcaugh}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={vital} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microvita_L}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={coughat} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microcaugh_AT}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={micrzymeplus} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microzyme_}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microzyme1} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microzyme_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={zymed} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microzyme_drop}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={orthnyl} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={orthonyl}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={vitald} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microvita_LD}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>

                </div>
            </div>
            <div>
                <h1 className=' mt-8 mx-[3.5rem] sm:mx-[10rem] font-Roboto text-4xl sm:text-5xl'>Visual Aids</h1><hr className=' shadow-md shadow-black mt-2 w-full h-[3px]  bg-slate-400'></hr>



                <div class="mt-10 mx-[3.5rem] sm:mx-[10rem] grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img src={bm_oil_1} class="h-full  w-full  object-cover  " alt=""  onClick={() => setIsOpen(true)} />
                        {isOpen && <Lightbox
                             
                            mainSrc={bm_oil_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={ciptamin} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={ciptamin}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microalka} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microalka}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microbeal} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microbeal}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microbealplus} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microbealplus}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcaugh_c} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microcaugh_c}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcaugh_e} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microcaugh_e}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={mecid} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={mecid}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                   
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microvitah} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microvitah}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microliv} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microliv}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microliv_drop} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microliv_drop}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microtone} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microtone}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcaugh} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microcaugh}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microvita_L} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microvita_L}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microcaugh_AT} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microcaugh_AT}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microzyme_} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microzyme_}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microzyme_1} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microzyme_1}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microzyme_drop} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microzyme_drop}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={orthonyl} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={orthonyl}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>
                    <div className=' h-max w-full cursor-pointer overflow-hidden transition-transform duration-[0.3s] ease-[ease-in-out] hover:scale-[1.03] '>
                        <img class="h-auto max-w-full rounded-lg" src={microvita_LD} alt="" onClick={() => setIsOpen(true)}/>{isOpen && <Lightbox
                             
                            mainSrc={microvita_LD}
                            
                            onCloseRequest={() => setIsOpen(false)}
                            />}
                    </div>

                </div>



            </div>
        </div>
    );
}

export default Products;
