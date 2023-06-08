"use client"
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {

const [first, setfirst] = useState(true)

const handlename = () => { 

        setfirst(!first)
 }




  return (
    <div id= 'Home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LETS BUILD SOMETHING
                </p>
                <h1 className='py-4 text-gray-700'>Hi, Im <span onClick={handlename} className='cursor-pointer text-[#5651e5]'>YAHYA </span>
                                                            <span className={first ? 'hidden':'cursor-pointer text-blue-600'}>RAFIH</span></h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 max-width-[70%] text-gray-600 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quod numquam consequuntur, sint necessitatibus voluptatum fugit accusantium adipisci vel fuga cumque ducimus delectus minima quos praesentium repellat fugiat architecto ad!</p>
                
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <div className=''>
                            <FaLinkedinIn />
                        </div >
                    </div>
                    <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <div className=''>
                            <FaGithub/>
                        </div >
                    </div>
                    <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <div className=''>
                            <AiOutlineMail />
                        </div >
                    </div>
                    <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <div className=''>
                            <BsFillPersonLinesFill />
                        </div >
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Main