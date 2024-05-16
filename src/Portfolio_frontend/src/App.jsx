import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

const App = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto p-4 bg-custom-dark w-100">
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
            <footer className="bg-gray-800 text-center py-4 text-gray-300">
                Developed By Parkshit &copy; {new Date().getFullYear()}
            </footer>
        </div>
    );
}

export default App;


