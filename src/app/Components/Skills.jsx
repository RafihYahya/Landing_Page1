import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h1 className='uppercase text-[#5651e5]'>SKILLS</h1>
        <h3 className=' text-xl py-4'>What I Can Do</h3>
        <div className=' py-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                <div className='p-6 shadow-xl rounded-xl hover:bg-gradient-to-r from-blue-400  to-[#5651e5] hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src='/../public/assets/skills/rectjs.png'
                                width='64'
                                height='64'
                                alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <p className='uppercase font-bold'>Reactjs</p>
                            </div>
                      </div>
                      
                </div>
                
                <div className='p-6 shadow-xl rounded-xl hover:bg-gradient-to-r from-black  to-[#5651e5] hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src='/../public/123.webp'
                                width='64'
                                height='64'
                                alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <p>TEE-HEE</p>
                            </div>
                      </div>
                      
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:bg-gradient-to-r from-green-400  to-[#5651e5] hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src='/../public/assets/skills/nodejs.png'
                                width='64'
                                height='64'
                                alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <p className='uppercase'>NodeJs</p>
                            </div>
                      </div>
                      
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:bg-gradient-to-r from-red-400  to-[#7b77fd]  hover:scale-105 ease-in duration-300  '>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src='/../public/assets/skills/laravel.png'
                                width='64'
                                height='64'
                                alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <p className='uppercase'>Laravel</p>
                            </div>
                      </div>
                      
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:bg-gradient-to-r from-yellow-400 via-blue-400  to-[#7b77fd] hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src='/../public/assets/skills/python.png'
                                width='64'
                                height='64'
                                alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <p className='uppercase'>Python</p>
                            </div>
                      </div>
                      
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:bg-gradient-to-r from-[#4a44eb]  to-[#7b77fd] hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src='/../public/assets/skills/cprog.png'
                                width='64'
                                height='64'
                                alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <p className='font-bold text-xl'>C</p>
                              <p className='uppercase'>language</p>
                            </div>
                      </div>
                      
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:bg-gradient-to-r from-blue-500 via-blue-300  to-[#7b77fd] hover:scale-105 ease-in duration-300'>
                      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='mx-auto'>
                                <Image src='/../public/assets/skills/flutter.png'
                                width='64'
                                height='64'
                                alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <p className='uppercase'>Flutter</p>
                            </div>
                      </div>
                      
                </div>

        </div>
      </div>

    </div>
  )
}

export default Skills