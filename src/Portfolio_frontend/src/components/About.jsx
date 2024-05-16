// src/components/About.js
import React from 'react';
const EducationItem = ({ institution, duration, details }) => (
    <div className="mb-4 p-4 border rounded-lg ">
      <h2 className="text-4xl font-bold mb-2 text-cyan" >{institution}</h2>
      <p className="text-antiquewhite mb-2">{duration}</p>
      <ul className="list-disc list-inside text-xl text-antiquewhite">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );

const About = () => {
    return (
        <div className='bg-custom-dark  min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-gray text-center text-5xl font-bold mb-4  bg-gray-800 pt-5 pb-5 border border-cyan text-antiquewhite mb-10 mt-20'>Education</h1>

        <div className="p-4 bg-gray-800  ">
          <EducationItem
            institution="Lovely Professional University, Jalandhar"
            duration="Aug'21 - Jul'25"
            details={[
              "Current GPA: 7.48",
              "Full Stack Development",
              "Elective in Multi-media"
            ]}
          />
          <EducationItem
            institution="Delhi Public School, J&K"
            duration="Apr'20 - Jun'21"
            details={[
              "Percentage: 93%",
              "Board: Central Board of Secondary Education",
              "Subjects: English, Physics, Chemistry, Mathematics"
            ]}
          />
        </div>
        </div>
      );
    }
    export default About;