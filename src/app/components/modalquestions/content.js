"use client"
import React, { useRef } from 'react'
import marvel from "../../assets/marvelbg.png";
import Link from 'next/link'
import "../../globals.css"
import Box from '@mui/material/Box';
import { useState, useContext } from 'react'
import Image from 'next/image'
import cap from "../../assets/modal-assets/captain.png"
import { modalData } from "../../data/modalData";
import { counterContext } from '../../context/context.js'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifycontent: 'center',
    flexdirection: 'column'
};

const Content = () => {

    const [count, setcount] = useState(0)
    const value = useContext(counterContext)

    return (
        <>
            {count == 0 && <Box className="flex items-center justify-center" style={style}>
            <Image src={modalData[value.clicker-1].heroImg} alt="hero" width={350} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
            <div className='char-content text-white rounded-3xl p-7 py-15 mr-20 flex items-center justify-center gap-5 md:text-2xl lg:text-4xl font-bold italic' style={{fontFamily: 'Bruno Ace SC, sans-serif' }}>{modalData[count].heroContent}</div>
                <div className=' px-0 w-[30rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center'>
                    <div style={{ backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '95%', height: '95%' }} className='rounded-3xl flex items-center justify-center'>
                        <div className='my-0 content-box p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-5 items-center justify-center overflow-x-hidden'>
                            <div>
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>INSTRUCTIONS</h2>
                            </div>
                            <div className='flex flex-col gap-5 min-w-80 items-center justify-center'>
                            <h2 className=' font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>1. INSTRUCTIONS</h2>
                            <h2 className=' font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>2. INSTRUCTIONS</h2>
                            <h2 className=' font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>3. INSTRUCTIONS</h2>
                            <h2 className=' font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>4. INSTRUCTIONS</h2>
                                <button onClick={()=>{setcount(count+1)}} className='deco-btn flex items-center justify-center'>
                                    Lets Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>}

            {count == 1 &&  <Box className="flex items-center justify-center" style={style}>
            <Image src={modalData[value.clicker-1].vilImg} alt="villain" width={200} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" /> 
             <div className='char-content text-white rounded-3xl p-7 py-15 mr-20 flex items-center justify-center gap-5 md:text-2xl lg:text-4xl font-bold italic' style={{fontFamily: 'Bruno Ace SC, sans-serif' }}>{modalData[count].vilContent}</div>
                <div className=' px-0 w-[30rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center'>
                    <div style={{ backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '95%', height: '95%' }} className='rounded-3xl flex items-center justify-center'>
                        <div className=' content-box p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-5 items-center justify-center overflow-x-hidden'>
                            <div>
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>QUESTION 1/5</h2>
                            </div>
                            <div className='flex flex-col min-w-80 gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center'>
                            <h2 className='font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>THE QUESTION GOES HERE AND THIS IS GOING TO BE A LONG QUESTION.</h2>
                            <input type="text" style={{ fontFamily: 'Bruno Ace SC, sans-serif', backgroundSize: 'cover', backgroundPosition: 'center', }} placeholder='Enter your answer here...' className=' min-h-28 w-full h-auto rounded-xl p-5' />
                                <button onClick={()=>{setcount(count+1)}} className='deco-btn  flex items-center justify-center m-2'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>}

            {count == 2 &&  <Box className="flex items-center justify-center" style={style}>
            <Image src={modalData[value.clicker-1].vilImg} alt="villain" width={200} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
            <div className='char-content text-white rounded-3xl p-7 py-15 mr-20 flex items-center justify-center gap-5 md:text-2xl lg:text-4xl font-bold italic' style={{fontFamily: 'Bruno Ace SC, sans-serif' }}>{modalData[count].vilContent}</div>
                <div className=' px-0 w-[30rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center'>
                    <div style={{ backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '95%', height: '95%' }} className='rounded-3xl flex items-center justify-center'>
                        <div className=' content-box p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-5 items-center justify-center overflow-x-hidden'>
                            <div>
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>QUESTION 2/5</h2>
                            </div>
                            <div className='flex flex-col gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center min-w-80'>
                            <div className=' mcq bg-white rounded-xl min-h-10 flex items-center justify-start min-w-72 gap-2 text-xl hover:border-2 hover: border-[#DABD00] ' ><div className='mcq flex items-center justify-center rounded-xl bg-[#FFF500] min-h-full min-w-10 border-[#DABD00] border-4 pr-1'>A</div><div> OPTIONS</div></div>
                            <div className=' mcq bg-white rounded-xl min-h-10 flex items-center justify-start min-w-72 gap-2 text-xl hover:border-2 hover: border-[#DABD00]' ><div className='mcq flex items-center justify-center rounded-xl bg-[#FFF500] min-h-full min-w-10 border-[#DABD00] border-4 pr-2 pt-0.5'>B</div><div> OPTIONS</div></div>
                            <div className=' mcq bg-white rounded-xl min-h-10 flex items-center justify-start min-w-72 gap-2 text-xl hover:border-2 hover: border-[#DABD00]' ><div className='mcq flex items-center justify-center rounded-xl bg-[#FFF500] min-h-full min-w-10 border-[#DABD00] border-4 pr-2 pt-0.5'>C</div><div> OPTIONS</div></div>
                            <div className=' mcq bg-white rounded-xl min-h-10 flex items-center justify-start min-w-72 gap-2 text-xl hover:border-2 hover: border-[#DABD00]' ><div className='mcq flex items-center justify-center rounded-xl bg-[#FFF500] min-h-full min-w-10 border-[#DABD00] border-4 pr-2 pt-0.5'>D</div><div> OPTIONS</div></div>

                                <button onClick={()=>{setcount(count+1)}} className='deco-btn flex items-center justify-center  m-2'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>}

            {count == 3 &&  <Box className="flex items-center justify-center" style={style}>
            <Image src={modalData[value.clicker-1].vilImg} alt="villain" width={200} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
            <div className='char-content text-white rounded-3xl p-7 py-15 mr-20 flex items-center justify-center gap-5 md:text-2xl lg:text-4xl font-bold italic' style={{fontFamily: 'Bruno Ace SC, sans-serif' }}>{modalData[count].vilContent}</div>
                <div className=' px-0 w-[30rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center'>
                    <div style={{ backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '95%', height: '95%' }} className='rounded-3xl flex items-center justify-center'>
                        <div className=' content-box p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-5 items-center justify-center overflow-x-hidden'>
                            <div>
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>QUESTION 3/5</h2>
                            </div>
                            <div className='flex flex-col gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center min-w-80'>
                            <h2 className= 'font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>THE QUESTION GOES HERE AND THIS IS GOING TO BE A LONG QUESTION.</h2>
                           <div className='flex items-center justify-center gap-16 pl-16'> 
                            <Image src={cap} alt="character" width={0} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
                            <Image src={cap} alt="character" width={0} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
                            <Image src={cap} alt="character" width={0} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
                            </div>  
                                <button onClick={()=>{setcount(count+1)}} className='deco-btn flex items-center justify-center'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>}

            {count == 4 &&  <Box className="flex items-center justify-center" style={style}>
            <Image src={modalData[value.clicker-1].vilImg} alt="villain" width={200} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
            <div className='char-content text-white rounded-3xl p-7 py-15 mr-20 flex items-center justify-center gap-5 md:text-2xl lg:text-4xl font-bold italic' style={{fontFamily: 'Bruno Ace SC, sans-serif' }}>{modalData[count].vilContent}</div>
                <div className=' px-0 w-[30rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center'>
                    <div style={{ backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '95%', height: '95%' }} className='rounded-3xl flex items-center justify-center'>
                        <div className=' content-box p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-5 items-center justify-center overflow-x-hidden'>
                            <div>
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>QUESTION 4/5</h2>
                            </div>
                            <div className='flex flex-col gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center min-w-80'>
                            <div className=' mcq bg-white rounded-xl min-h-10 flex items-center justify-center min-w-72 text-xl' >Audio File...</div>    
                            <input type="text" style={{ fontFamily: 'Bruno Ace SC, sans-serif', backgroundSize: 'cover', backgroundPosition: 'center', }} placeholder='Enter your answer here...' className=' min-h-28 w-full h-auto rounded-xl p-5' />
                                <button onClick={()=>{setcount(count+1)}} className='deco-btn flex items-center justify-center'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>}

            {count == 5 &&  <Box className="flex items-center justify-center" style={style}>
            <Image src={modalData[value.clicker-1].vilImg} alt="villain" width={200} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
            <div className='char-content text-white rounded-3xl p-7 py-15 mr-20 flex items-center justify-center gap-5 md:text-2xl lg:text-4xl font-bold italic' style={{fontFamily: 'Bruno Ace SC, sans-serif' }}>{modalData[count].vilContent}</div>
                <div className=' px-0 w-[30rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center'>
                    <div style={{ backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '95%', height: '95%' }} className='rounded-3xl flex items-center justify-center'>
                        <div className=' content-box p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col gap-5 items-center justify-center overflow-x-hidden'>
                            <div>
                                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>QUESTION 5/5</h2>
                            </div>
                            <div className='flex flex-col gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center min-w-80'>
                            <h2 className='font-bold italic' style={{ fontFamily: 'Bruno Ace SC, sans-serif' }}>THE QUESTION GOES HERE AND THIS IS GOING TO BE A LONG QUESTION.</h2>
                            <input type="text" style={{ fontFamily: 'Bruno Ace SC, sans-serif', backgroundSize: 'cover', backgroundPosition: 'center', }} placeholder='Enter your answer here...' className=' min-h-28 w-full h-auto rounded-xl p-5' />
                                <button onClick={()=>{setcount(count+1)}} className='deco-btn flex items-center justify-center'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>}

            {count == 6 &&  <Box className="flex items-center justify-center" style={style}>
            <Image src={modalData[value.clicker-1].vilImg} alt="villain" width={200} height={100} className=" mr-50 pr-0 w-auto -ml-[10em] md:-ml-[10em] lg:-ml-[4em]" />
            <div className='char-content text-white rounded-3xl p-7 py-15 mr-20 flex items-center justify-center gap-5 md:text-2xl lg:text-4xl font-bold italic' style={{fontFamily: 'Bruno Ace SC, sans-serif' }}>{modalData[count].vilContent}</div>
                <div className=' px-0 w-[30rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] rounded-3xl bg-gradient-to-b from-[#FFF500] to-[#DABD00] flex items-center justify-center'>
                    <div style={{ backgroundImage: `url(${marvel.src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '95%', height: '95%' }} className='rounded-3xl flex items-center justify-center'>
                        <div className='p-10 bg-[#D7D7D7] w-[90%] h-[90%] rounded-3xl flex flex-col items-center justify-center overflow-x-hidden '>
                                <h2 className='flex mcq items-center justify-center text-xl md:text-2xl lg:text-4xl font-bold '>Ready For Next Part...?</h2>
                            <div className='flex flex-col gap-5 w-[80%] h-[80%] lg:w-[90%] lg:h-[90%] items-center justify-center min-w-80'>
                                <button onClick={()=>{setcount(count+1)}} className='deco-btn flex items-center justify-center'>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>}
        </>
    )
}

export default Content