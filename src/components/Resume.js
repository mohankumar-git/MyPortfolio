import React from 'react'
import ResumeImg from "../assets/resume.jpg"

const Resume = () => {
    const config = {
        link: 'https://drive.google.com/file/d/18seVajQQfE70gxHGgGlaF6gAYiwweTI-/view?usp=drive_link'
    }

    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 gap-5'>
            <div className='md:w-1/2 py-5 flex justify-center md:justify-end'> 
                <img className='w-[300px]' src={ResumeImg} alt='ResumeImg' />
            </div>
            <div className='md:w-1/2 flex justify-center py-4'>
                <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-[#5551e3] mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5 md:text-2xl'>You can view my resume <a target='_blank' className='download-btn' href={config.link}>Download</a></p>
                </div>
            </div>
        </section>
      )
}

export default Resume