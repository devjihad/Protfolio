import React from 'react';
import '../index.css'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-5'>
            <h3 className=' text-3xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent' id="head">Jihad</h3>
            <ul className='flex justify-center items-center gap-6 list-none text-[20px]'>
                <li>Home</li>
                <li>About Me</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
            <button className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer'>Contact Me</button>
        </div>
    );
};

export default Navbar;