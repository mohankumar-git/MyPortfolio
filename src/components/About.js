import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
    const config  = {
        line1: 'Hi, My name is Mohankumar. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.',
        line3: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose'
    }

  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5'> 
            <img src={AboutImg} alt='AboutImg' />
        </div>
        <div className='md:w-1/2 flex py-4'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-[#5551e3] mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5 md:text-2xl'>{config.line1}</p>
            <p className='pb-5 md:text-2xl'>{config.line2}</p>
            <p className='pb-5 md:text-2xl'>{config.line3}</p>
            </div>
        </div>
    </section>
  )
}

export default About