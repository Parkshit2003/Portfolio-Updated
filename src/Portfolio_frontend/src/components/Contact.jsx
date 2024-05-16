import React from 'react';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-custom-dark text-antiquewhite  min-h-screen py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 '>
            <div className='mt-20'>
                <h1 className='text-7xl '>Contact <span className='text-cyan'>Me</span></h1>
                <h3 className=' text-xl mt-3 mb-20'>Let's Work Together</h3>
                <p className='mb-5 text-2xl'>sharmaparkshit000079@gmail.com</p>
                <p className='mb-5 text-2xl'>+91-9086054637</p>
                <a href="https://api.whatsapp.com/send?phone=919086054637https://api.whatsapp.com/send?phone=919086054637">
                <button className="mt-2 text-3xl text-cyan py-2 px-4 rounded-full hover:text-custom-dark hover:bg-cyan transition duration-300 hover:shadow-antiquewhite">
            <FaWhatsapp/>
        </button>
                </a>
                <a href="https://www.linkedin.com/in/parkshit2003/">
                <button className="mt-2 text-3xl text-cyan py-2 px-4 rounded-full hover:text-custom-dark hover:bg-cyan transition duration-300 hover:shadow-antiquewhite">
            <FaLinkedin/>
        </button>
                </a>
                <a href="https://github.com/Parkshit2003">
                <button className="mt-2 text-3xl text-cyan py-2 px-4 rounded-full hover:text-custom-dark hover:bg-cyan transition duration-300 hover:shadow-antiquewhite">
            <FaGithub/>
        </button>
                </a>
                <a href="https://www.instagram.com/itzzz_prikshit/">
                <button className="mt-2 text-3xl text-cyan py-2 px-4 rounded-full hover:text-custom-dark hover:bg-cyan transition duration-300 hover:shadow-antiquewhite">
            <FaInstagram/>
        </button>
                </a>
            </div>
            <div id="contact-form" className='mt-20'>
                <h2 className='text-4xl text-cyan text-bold'>Enquiry Form</h2>
                <form className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white-700 mb-3">Name:</label>
                        <input type="text" id="name" name="name" className="form-input mt-1 block w-full border rounded-md focus:border-cyan bg-gray-400 " placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white-700 mb-3">Email:</label>
                        <input type="email" id="email" name="email" className="form-input mt-1 block w-full border rounded-md focus:border-cyan bg-gray-400" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white-700 mb-3">Message:</label>
                        <textarea id="message" name="message" rows="4" className="form-textarea mt-1 block w-full border rounded-md focus:border-cyan bg-gray-400" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="bg-cyan text-black py-2 px-4 rounded-lg hover:bg-cyan transition duration-300 border border-gray hover:shadow-antiquewhite">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
