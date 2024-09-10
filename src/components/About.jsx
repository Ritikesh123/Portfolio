import React from 'react'

const About = () => {
  return(  
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white"
    >

      <div className="max-w-screen-lg p-4 mx-auto 
      flex flex-col justify-center w-full h-full">
        <div className="pb-0">
            <p className="text-4xl font-bold border-gray-500
            inline border-b-4">
            About
            </p>
        </div>

        <p className="text-lg mt-10">
          I am Ritikesh Raj, a Frontend Developer with nearly 3 years of experience, specializing in creating dynamic, 
          user-centric web solutions. My journey has been driven by a passion for designing exceptional user experiences
          and translating creative concepts into high-performance code.
        </p>
        <br />


        <p className="text-lg">
          I hold a Bachelor of Engineering in Electrical and Electronics Engineering from BIT Mesra Ranchi, 
          where I built a strong technical foundation. This has enabled me to approach web development with 
          a problem-solving mindset, driving impactful solutions in my work.

        </p>
        <br />

        
        <p className="text-lg">
          Throughout my career, I’ve had the privilege of working with companies like Sapphire Human Solution 
          and Tech Mahindra, where I contributed to building responsive, scalable, and efficient web applications. 
          I collaborated with cross-functional teams to deliver new features, optimize performance, and ensure seamless 
          frontend-backend integration. Proficient in HTML, CSS, and JavaScript, I am well-versed in frameworks such as 
          ReactJS, which I use to deliver top-tier frontend solutions.
        </p>
        <br />

        <p className="text-lg">
          My portfolio highlights several self-driven projects, reflecting my dedication to creating innovative and user-friendly web applications.
        </p>
        <br />




      </div>


    </div>
  )
}

export default About
