import React, { useRef, useState } from 'react';
import '../index.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


const Navbar = () => {
    const [value, setvalue] = useState('home')
    // const [data,setdata] = useState(false)
    // console.log(data)
    // const togle=()=>{
    //     setdata(!data)
    // }
    const menuref = useRef()

    const open =()=>{
        menuref.current.style.right ="0"
    }
    const close =()=>{
        menuref.current.style.right = "-350px"
    }
    return (
        <div className='flex justify-between items-center py-5 '>

            <h3 className=' text-4xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent font-semibold head '>Jihad</h3>

          <div className='relative md:hidden w-full'>
            <GiHamburgerMenu className='open md:hidden' onClick={open}/>
          </div>

           
                 <ul className=' bg-zinc-900 flex   items-center gap-6 list-none text-[20px] unorder  ' ref={menuref}>
                    <ImCross className='close md:hidden' onClick={close}/>

                <li> <AnchorLink className=''  href='#hero'> <p onClick={()=>{setvalue('home')}}> Home</p></AnchorLink>  {value === 'home' ? <hr className='text-blue-300 border '/>: <></>}</li>

                <li> <AnchorLink className='' offset={100} href='#about'> <p onClick={()=>{setvalue('about')}}> About Me</p></AnchorLink>  {value === 'about' ? <hr className='text-blue-300 border'/>: <></>}</li>

                <li> <AnchorLink className='' offset={50} href='#project'> <p onClick={()=>{setvalue('project')}}>Project</p> </AnchorLink>{value === 'project' ? <hr className='text-blue-300 border'/>: <></>}</li>

                <li> <AnchorLink className='' offset={50} href='#contact'> <p onClick={()=>{setvalue('contact')}}>Contact</p></AnchorLink>  {value === 'contact' ? <hr className='text-blue-300 border'/>: <></>}</li>
                </ul>
                <AnchorLink offset={50} href='#contact'><button className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer hidden md:block'>Contact Me</button></AnchorLink>
          
    

            

            
        </div>
    );
};

export default Navbar;