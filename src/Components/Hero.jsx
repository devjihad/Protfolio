import React from 'react';
import me from '../assets/me.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div className='flex flex-col-reverse gap-5 lg:gap-0  md:flex-row justify-between py-10 md:py-20' id='hero'>
            
            <div className='w-full md:w-2/3 lg:w-1/2 mt-5'>
                <h2 className='text-[28px] md:text-[40px] lg:text-[45px] font-semibold leading-10 md:leading-16 mb-5 '><span className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent'>I'm Jihad,</span> frontend developer based in USA</h2>
                <p className='font-medium'>I'm a frontend developer creating responsive, user-friendly interfaces using modern web technologies for smooth, engaging user experiences.</p>
                <div className='mt-8'>

                    <AnchorLink offset={50} href='#contact'><button className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300   px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110 mr-6 cursor-pointer'>Connect with me</button></AnchorLink>
                    
                   
                    <a href="../../public/resume.pdf" target='blank' className='border-2   px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110 cursor-pointer '> My resume</a>
                </div>
            </div>

            <div className='w-full md:w-1/3 lg:w-1/2 '>
                <img src={me} alt="" className='w-[350px] h-[350px] rounded-full mx-auto' />
            </div>
        </div>
    );
};

export default Hero;