import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e6]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Creative Solutions to Technical Problems</p>
                <p className='py-2 text-gray-600'>
                    Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule!
                    Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule!
                    Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule!
                    Trollz Rule! Trollz Rule! Trollz Rule!
                </p>
                <p className='py-2 text-gray-600'>
                    Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule!
                    Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule!
                    Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule! Trollz Rule!
                    Trollz Rule! Trollz Rule! Trollz Rule!
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media.istockphoto.com/id/506061551/photo/laptop-on-white-table.jpg?s=612x612&w=0&k=20&c=VUhXE3jkNA_RdqdsjFVq1TX2aPymd6sj7uUoVlDzF4U=" alt="computer"></img>
            </div>
        </div>
    </div>
  )
}

export default About