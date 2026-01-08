import React from 'react';
import me from '../assets/me.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div className='flex justify-between py-20' id='hero'>
            
            <div className='w-1/2 mt-5'>
                <h2 className='text-[55px] font-semibold leading-16 mb-5 '><span className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent'>I'm Jihad,</span> frontend developer based in USA</h2>
                <p className='font-medium'>I'm a frontend developer creating responsive, user-friendly interfaces using modern web technologies for smooth, engaging user experiences.</p>
                <div className='mt-8'>

                    <AnchorLink offset={50} href='#contact'><button className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300   px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110 mr-6 cursor-pointer'>Connect with me</button></AnchorLink>
                    
                    <button className='border-2   px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110 cursor-pointer '>My resume</button>
                </div>
            </div>

            <div className='w-1/2 '>
                <img src={me} alt="" className='w-[350px] h-[350px] rounded-full mx-auto' />
            </div>
        </div>
    );
};

export default Hero;