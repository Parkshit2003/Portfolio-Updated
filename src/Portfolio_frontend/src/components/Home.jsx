import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Parkshitpic from './assets/PassPort photo my.jpeg';

const Home = () => {
    

    useEffect(() => {
        const typed = new Typed('.text', {
            strings: [" Software Engineer", "Frontend Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy(); 
        };
    }, []);

    return (
        <div className=" min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-5 mb-10">
            <div className="flex justify-center">
            <img className="rounded-full h-48 w-48 object-cover hover:shadow-cyan shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" src={Parkshitpic} alt="Parkshit Sharma" />
        </div>
    <div className="max-w-md w-full space-y-8 text-center text-antiquewhite">
        <p className="text-2xl text-text-antiquewhite-600 mt-10">Hello, It's Me</p>
        <h3 className="text-4xl font-bold text-text-antiquewhite-900 hover:text-cyan">Parkshit Sharma</h3>
        <h3 className="text-2xl text-text-antiquewhite-600">And I am a <br /><span className="text-cyan text"></span></h3>
        <p className="text-text-antiquewhite-500">
            I'm a web designer.<br/>
            My expertise is to create and design websites.
        </p>
        
    </div>
</div>

    );
}

export default Home;
