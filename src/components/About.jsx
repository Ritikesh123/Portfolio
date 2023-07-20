import React from 'react'

const About = () => {
  return(  
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white"
    >

      <div className="max-w-screen-lg p-4 mx-auto 
      flex flex-col justify-center w-full h-full">
        <div className="pb-20">
            <p className="text-4xl font-bold border-gray-500
            inline border-b-4">
            About
            </p>
        </div>

        <p className="text-lg mt-10">
        Hi...... I'm Ritikesh Raj as a Frontend Developer with 1.5+ years of experience, 
        I am driven by a deep passion for crafting exceptional user experiences and 
        bringing creative designs to life through code.
        </p>
        <br />


        <p className="text-lg">
        I hold a Bachelor of Engineering in Electrical and Electronics Engineering from 
        BIT Mesra Ranchi, where I honed my technical skills and gained a solid foundation
        in web development principles.
        </p>
        <br />

        
        <p className="text-lg">
        Throughout my career, I have worked on a diverse range of projects, collaborating 
        with cross-functional teams to build responsive and user-friendly websites and web 
        applications. My expertise lies in HTML, CSS, and JavaScript, and I am well-versed 
        in utilizing modern frameworks such as React and Vue.js to deliver seamless frontend 
        solutions. Some of my own driven project you can see in my Portfolio section.
        </p>
        <br />




      </div>


    </div>
  )
}

export default About
