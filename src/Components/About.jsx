import React from 'react';
import me from '../assets/me.png'
const About = () => {
    return (
        <div id='about'>
            <h2 className=' text-4xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent text-center font-semibold mt-10 my-7'>About Me</h2>
            <div className='md:grid md:grid-cols-3 gap-8 justify-between '>
                <div className=' md:col-span-1 mb-8 md:mb-0'>
                    <img src={me} alt="" className='h-[400px] w-full rounded-lg' />
                </div>

                <div className='md:col-span-2'>
                    <p className='mb-8 mt-3'>
                        I'm a frontend developer focused on building responsive, user-friendly, and visually engaging web interfaces. I specialize in transforming designs into functional web experiences using HTML, CSS, JavaScript, and modern frameworks.   My goal is to create clean, efficient, and accessible code that ensures smooth performance across all devices and browsers.<br/> I enjoy crafting interactive components, improving usability, and delivering interfaces that provide a seamless user experience while aligning with modern design trends and best practices.
                    </p>
                    <div className='flex gap-2 items-center mb-1 transition duration-500 hover:scale-108'>
                        <p className='min-w-[100px]'>HTML & CSS</p>
                        <hr className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300 h-1 w-[65%] border-0 outline-0'/>
                    </div>

                    <div className='flex gap-2 items-center mb-1 transition duration-500 hover:scale-108'>
                        <p className='min-w-[100px]'>Javascript</p>
                        <hr className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300 h-1 w-[75%] border-0 outline-0'/>
                    </div>

                    <div className='flex gap-2 items-center mb-1 transition duration-500 hover:scale-108'>
                        <p className='min-w-[100px]'>React JS</p>
                        <hr className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300 h-1 w-[80%] border-0 outline-0'/>
                    </div>

                    <div className='flex gap-2 items-center transition duration-500 hover:scale-108'>
                        <p className='min-w-[100px]'>Next JS</p>
                        <hr className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300 h-1 w-[65%] border-0 outline-0'/>
                    </div>

                </div>
            </div>



            <div className='flex justify-evenly py-10'>

                <div className='text-center transition duration-400 hover:scale-115'>
                    <h3 className=' text-3xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent mb-2'>1.5+</h3>
                    <p className='text-[12px]'>YEARS OF EXPERIENCE</p>
                </div>
                
                <div className='border-r-2 border-l-2 border-white px-7 md:px-28 text-center ' >
                    <div className='transition duration-400 hover:scale-115'>
                        <h3 className=' text-3xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent mb-2'>30+</h3>
                    <p className='text-[12px]'>PROJECT COMPLITE</p>
                    </div>
                </div>
                
                <div className='text-center transition duration-400 hover:scale-115 '>
                    <h3 className=' text-3xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent mb-2'>5+</h3>
                    <p className='text-[12px]'>HAPPY CLIENT</p>
                </div>
                
                
            </div>
        </div>
    );
};

export default About;