import Image from 'next/image';
import React from 'react';
import propertyImg from '/public/assets/unnamed.jpg'
import Projectitem from './Projectitem';


const Projects = () => {
  return (
    <div id='Projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h1 className='text-[#5651e5] uppercase'>Projects</h1>
            <h3 className='text-xl py-4 font-bold '>My Websites</h3>
            <div className='grid md:grid-cols-2 gap-8 '>
                    <Projectitem 
                    title= 'Bloodborne'
                    backgroundImg = {propertyImg}
                    property='/bloodborne'
                    />
                    <Projectitem 
                    title= 'Bloodborne' 
                    backgroundImg = {propertyImg}
                    />
                    <Projectitem 
                    title= 'Bloodborne' 
                    backgroundImg = {propertyImg}
                    />
                    <Projectitem 
                    title= 'Bloodborne' 
                    backgroundImg = {propertyImg}
           />
           </div>
        </div>
    </div>
  )
}

export default Projects