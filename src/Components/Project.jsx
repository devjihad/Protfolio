import React from 'react';
import clikon from "../assets/clikon.png"
import tomato from "../assets/tomato.png"
import relive from "../assets/relive.png"
import food from "../assets/food.png"
import anzo from "../assets/anzo.png"
import codeDuniya from "../assets/codeDuniya.png"

const Project = () => {
    return (
        <div className='pb-10'>
            <h2 className=' text-4xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent text-center font-semibold mt-10 my-10'>My latest work</h2>
            
          <div className='grid grid-cols-3 gap-8'>

            <div className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer rounded-lg'>
                <a href="https://clicon-final-project.vercel.app/"><img src={clikon} alt="" className='rounded-lg h-[200px] w-[350px]'/></a>
            </div>

            <div className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer rounded-lg'>
                <a href="https://food-app-iota-umber-55.vercel.app/"><img src={tomato} alt="" className='rounded-lg h-[200px] w-[350px]'/></a>
            </div>

            <div className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer rounded-lg'>
                <a href="https://relive-frontend-steel.vercel.app/"><img src={relive} alt="" className='rounded-lg h-[200px] w-[350px]'/></a>
            </div>

            <div className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer rounded-lg'>
                <a href="https://devjihad.github.io/food-kit/"><img src={food} alt="" className='rounded-lg h-[200px] w-[350px]'/></a>
            </div>

            <div className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer rounded-lg'>
                <a href="https://anzo-studio-indol.vercel.app/"><img src={anzo} alt="" className='rounded-lg h-[200px] w-[350px]'/></a>
            </div>

            <div className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer rounded-lg'>
                <a href="https://code-duniya-eight.vercel.app/"><img src={codeDuniya} alt="" className='rounded-lg h-[200px] w-[350px]'/></a>
            </div>

           

          </div>
        </div>
    );
};

export default Project;