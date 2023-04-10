import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import trollimage from '../public/assets/trolls.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-col2 gap-8'>

               <ProjectItem 
                title='Troll Generator' 
                backgroundImg={trollimage} 
                projectUrl='/troll'
               />
                {/* <ProjectItem 
                title='Troll Generator' 
                backgroundImg={trollimage} 
                projectUrl='/troll'
               /> */}

            </div>
        </div>
    </div>
  )
}

export default Projects