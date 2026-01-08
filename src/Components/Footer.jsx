import React from 'react';

const Footer = () => {
    return (
        <div className='pt-16  pb-24'>
            <div className='flex justify-center gap-10'>
            <div className='w-1/2'>
                 <p className='text-4xl head bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent pb-3 font-semibold'>Jihad</p>

                  <p className='font-medium'>I'm a frontend developer creating responsive, user-friendly interfaces using modern web technologies for smooth, engaging user experiences.</p>
            </div>

            <div className='w-1/2 pt-10  '>
                <input type="email" name="" id="" placeholder='Enter your email'  className='px-5 py-3 rounded-xl text-xl bg-gray-700 hover:border-2 mr-7 '/>
                <button className='bg-linear-to-r/decreasing from-zinc-500 to-blue-300 px-5 py-[12px] rounded-lg font-semibold transition duration-300 hover:scale-110  cursor-pointer text-xl '>Subscribe</button>
            </div>
            </div>
            <hr className='my-5'/>

            <div className='flex justify-between '>
                <h3>© Jihad. All rights reserved.</h3>
                <div className='flex justify-end gap-5'>
                    <p>Tearms of Service</p>
                    <p>Privecy Policy</p>
                    <p>Contact with me</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;