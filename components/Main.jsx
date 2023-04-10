import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Creative Solutions to Technical Problems
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm<span className='text-[#5651e5]'> Adam</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Full Stack Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Full Stack Engineer experienced in developing real-world applications and working in team
                 and solo environments. Skilled in multiple coding languages, problem solving, and design principals.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                       <Link href='https://www.linkedin.com/in/adam-bergstrom-38a744260/'>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='https://github.com/AdamBergstrom138'>
                            <FaGithub />
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Link href='/#contact'>
                            <AiOutlineMail />
                        </Link>
                    </div>
                    {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main