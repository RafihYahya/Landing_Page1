
import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import propertyImg from '/public/assets/unnamed.jpg'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
    <div  id='Contact'  className='w-full lg:h-screen'>
            <div className=' max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Contact
                </p>
                <h2 className='py-8'>Get in Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>


                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl  rounded-xl p-4'>
                        <div className='lg:p-2 h-auto'>
                            <div>
                                <Image  className='rounded '    src={propertyImg} />
                            </div>
                            <div>
                                <h2 className=' uppercase text-center py-4 pb-4'>Bloodborne </h2>
                                <p className=' tracking-widest text-xl text-center'>Front End-Develloper</p>
                                <p className=' tracking-widest py-4 text-center '>I am Available For Hire</p>
                            </div>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                        </div>
                        <div className=' w-full flex p-4 justify-between items-center'>
                                <div className='rounded-full shadow-xl  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <div className=''>
                                            <FaLinkedinIn />
                                        </div >
                                </div>
                                <div className='rounded-full shadow-xl  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <div className=''>
                                        <FaGithub/>
                                        </div >
                                </div>
                                <div className='rounded-full shadow-xl  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <div className=''>
                                        <AiOutlineMail />
                                        </div >
                                </div>
                                <div className='rounded-full shadow-xl  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <div className=''>
                                        <BsFillPersonLinesFill />
                                    </div >
                                </div>
                        </div>
                        </div>

                        <div className='col-span-3 w-full h-auto shadow-xl  rounded-xl lg:p-4'>
                                <div className='p-4 '>

                                    <form >
                                        <div className='grid md:grid-cols-2 gap-4  w-full py-2'>
                                            <div className='flex flex-col'>
                                                <label className='uppercase text-sm py-2 font-bold'>Name</label>
                                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"  />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label className='uppercase text-sm py-2 font-bold'>Phone Number</label>
                                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"  />
                                            </div>
                                        </div>
                                        <div className='flex flex-col py-2'>
                                                <label className='uppercase text-sm py-2 font-bold '>Subject</label>
                                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                        </div>
                                        <div className='flex flex-col py-2'>
                                                <label className='uppercase text-sm py-2 font-bold '>text</label>
                                                <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="email" />
                                        </div>
                                        <div className='flex flex-col py-2 pt-16 '>
                                                <label className='uppercase text-sm py-2 font-bold'>Message</label>
                                                <textarea className=' border-2 rounded-lg p-3 border-gray-300 ' rows='15'></textarea>
                                        </div>
                                        <button className=' shadow-xl w-full  mt-4 p-4  '>Send Messge</button>
                                        
                                    </form>
                                </div>
                        </div>

                </div>
                <div className=' flex justify-center py-12 '>
                    <Link href ='/'>
                    <div className=' p-4 rounded-full shadow-lg  cursor-pointer hover:scale-110 ease-in durtion-300'>
                            <HiOutlineChevronDoubleUp />
                        </div>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default Contact