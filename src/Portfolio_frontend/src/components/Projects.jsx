import React from 'react';

const Projects = () => {
    return (
        <div className="bg-custom-dark min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-antiquewhite border border-cyan pt-5 pb-5 text-center text-5xl font-bold mb-8 bg-gray-800 mt-20 mb-10">Projects Delivered Till <span className='text-cyan'>Now...</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 w-full aspect-w-1 aspect-h-1 rounded-lg shadow-lg border border-cyan flex
                 flex-col justify-center items-center p-6 project-card">
                    <h1 className="text-xl font-bold text-cyan mb-2">Watch Show</h1>
                    <p className="text-gray-300 mt-4 mb-4">
                        A movie website made using ReactJS,
                        fetching one movie API to show the results
                        with various functionalities in it.
                    </p>
                    <div className="space-x-4">
                    <a href="https://github.com/Parkshit2003/Watch-now" target="_blank" rel="noopener noreferrer">
    <button className="bg-cyan text-black py-2 px-4 rounded-lg hover:bg-cyan transition duration-300 border border-white hover:shadow-antiquewhite">
        Visit Project
    </button>
</a>
                    </div>
                </div>
                <div className="bg-gray-800 w-full aspect-w-1 aspect-h-1 project-card rounded-lg shadow-lg border border-cyan flex
                 flex-col justify-center items-center p-6">
                    <h1 className="text-xl font-bold text-cyan mb-2">PokeMania</h1>
                    <p className="text-gray-300 mt-4 mb-4">
                        A ReactJS website reflecting various
                        Pokémons with their features, fetching
                        the API to get the data.
                    </p>
                    <a href="https://github.com/Parkshit2003/Pokemon" target="_blank" rel="noopener noreferrer">
    <button className="bg-cyan text-black py-2 px-4 rounded-lg hover:bg-cyan transition duration-300 border border-white hover:shadow-antiquewhite">
        Visit Project
    </button>
</a>
                </div>
                <div className="bg-gray-800 project-card w-full aspect-w-1 aspect-h-1 rounded-lg shadow-lg border border-cyan flex
                 flex-col justify-center items-center p-6">
                    <h1 className="text-xl font-bold text-cyan mb-2">To Do's List</h1>
                    <p className="text-gray-300 mt-4 mb-4">
                        A to-do application made using ReactJS
                        with various functionalities including adding,
                        editing, deleting, and dragging the cards
                        accordingly.
                    </p>
                    <a href="https://github.com/Parkshit2003/airtribe" target="_blank" rel="noopener noreferrer">
    <button className="bg-cyan text-black py-2 px-4 rounded-lg hover:bg-cyan transition duration-300 border border-white hover:shadow-antiquewhite">
        Visit Project
    </button>
</a>
                </div>
                <div className="bg-gray-800 project-card w-full aspect-w-1 aspect-h-1 rounded-lg shadow-lg border border-cyan flex
                 flex-col justify-center items-center p-6">
                    <h1 className="text-xl font-bold text-cyan mb-2">To Do's List</h1>
                    <p className="text-gray-300 mt-4 mb-4">
                        A to-do application made using ReactJS
                        with various functionalities including adding,
                        editing, deleting, and dragging the cards
                        accordingly.
                    </p>
                    <a href="https://github.com/Parkshit2003/airtribe" target="_blank" rel="noopener noreferrer">
    <button className="bg-cyan text-black py-2 px-4 rounded-lg hover:bg-cyan transition duration-300 border border-white hover:shadow-antiquewhite">
        Visit Project
    </button>
</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;
