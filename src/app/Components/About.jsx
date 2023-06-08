import React from 'react'

const About = () => {
  return (
    <div  id='About' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h1 className='py-4 uppercase  text-[#5651e5] '>About</h1>
                <h2 className='py-4 font-bold'>Who I Am</h2>
                <p className='py-2 text-gray-600s'>Lorem ipsum dolor sit amet consectetu
                    r adipisicing elit. Officia odit alias unde, ad reiciendis quasi corporis corrupti quaerat nemo, blanditiis dolorum non eveni
                    et dolorem ex fugit qui, aliquam
                     asperiores quis!
                </p>
                <p className='py-2 text-gray-600'>Checkout My latest Work</p>

            </div>
            <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-centers p-4 hover:scale-105 ease-in duration-300'>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About