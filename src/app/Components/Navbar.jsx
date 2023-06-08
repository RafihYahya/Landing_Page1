import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import {FaGithub,FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setshadow] = useState(false)

    useEffect(() => {
    
      const handleShadow = () => { 
        if (window.scrolly >= 90) {
            setshadow(true)
        }else {
            setshadow(false)
        }
       }
       window.addEventListener('scroll',handleShadow)
    }, [])
    
    
    const handleNav = () => {
        setNav(!nav);
    }


  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]':'fixed w-full h-20  z-[100]'}>
        <div className='flex  justify-between items-center w-full h-full px-2 2xl:px-16'>
            <h1 className='text-xl  px-2'>Placeholder</h1>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/#About'>
                        <li className='ml-10  text-sm uppercase hover:border-b hover:scale-110 '>Home</li>
                    </Link>
                    <Link href='/#Skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110'>about</li>
                    </Link>
                    <Link href='/#Projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110'>Skills</li>
                    </Link>
                    <Link href='/#Contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:scale-110'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                    <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[23%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' }>
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <h1 className='text-2xl text-center'>PlaceHolder</h1>
                                <div onClick={handleNav} className=' rounded-full shadow-md shadow-gray-400 cursor-pointer'>
                                    <h2 className=' m-4 text-lg'>Close</h2>
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-10'>
                                <p className='w-[85%] md:w-[90%] py-5'>Lets build Crazy Shit</p>
                            </div>
                            <div className='py-4 flex flex-col '>
                                <ul className='uppercase '>
                                    <Link href="/">
                                    <li className='py-5 text-md'>Home</li>
                                        </Link>
                                    <Link href="/">
                                    <li className='py-5 text-md'>About</li>
                                        </Link>
                                    <Link href="/">
                                    <li className='py-5 text-md'>Skills</li>
                                        </Link>
                                    <Link href="/">
                                    <li className='py-5 text-md'>Projects</li>
                                        </Link>
                                    <Link href="/">
                                    <li className='py-5 text-md'>Contact</li>
                                        </Link>
                                </ul>
                            </div>
                            <div className='pt-40'>
                                <p className='uppercase tracking-widest text-[#5651e5]'>Lets Connect </p>

                            </div>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in'>
                                <BsFillPersonLinesFill />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar