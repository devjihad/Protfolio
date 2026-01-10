import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {

     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "bf619a68-fb17-4390-a8a1-dc989a323eb0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    toast('Message send successfully')
  };

    return (
        <div id='contact'>
            <h2 className=' text-4xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent text-center font-semibold mt-10 my-10'>Get in touch</h2>

           <div className=' md:flex gap-10 px-10'>

             <div className='md:w-1/2 mb-8 md:mb-0'>
                <h2 className=' text-4xl bg-linear-to-r/decreasing from-zinc-500 to-blue-300 bg-clip-text text-transparent  font-semibold  my-5'>Let's talk</h2>
                <p className='text-[18px]'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

                <h3 className='flex gap-3 items-center text-[22px] my-2'><MdEmail/> mdhajihad609@gmail.com</h3>
                <h3 className='flex gap-3 items-center text-2xl my-2'><MdPhoneInTalk/> 01306561609</h3>
                <p className='flex gap-3 items-center text-2xl my-2'><FaLocationDot/> Dhanmondi 15 R8/A, Dhaka</p>
            </div>

            <div className='md:w-1/2'>
                <form  onSubmit={onSubmit}>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="" className='text-[16px] mb-2 '>Your name</label>
                        <input type="text" name='name' placeholder='Enter your name' className='px-3 py-1.25 md:px-5 md:py-3 rounded-lg text-xl bg-gray-700' />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="" className='text-[16px] mb-2 '>Your Email</label>
                        <input type="email" name='email' placeholder='Enter your email'  className='px-3 py-1.25 md:px-5 md:py-3rounded-lg text-xl bg-gray-700'/>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="" className='text-[16px] mb-2 '>Write your message here</label>
                        <textarea name="message" id="" placeholder='Enter your message' className='px-3 py-1.25 md:px-5 md:py-3 rounded-lg text-xl bg-gray-700    min-h-40 md:min-h-50'></textarea>
                    </div>

                     <button className=' bg-linear-to-r/decreasing from-zinc-500 to-blue-300  px-5 py-2 rounded-lg font-medium transition duration-300 hover:scale-110  cursor-pointer'>Submit Now</button>
                </form>
            </div>
           </div>
           <ToastContainer/>
        </div>
    );
};

export default Contact;