import React from 'react'
import ecommerceWithFilter from "../assets/ecommercewithfilter.png"
import productLogin from "../assets/productLogin.png"
import carVisit from "../assets/Car_visit.png"
import delivery from '../assets/Food-delivery234.png'
import validationform from '../assets/Formik-yup-validationform.png'
import todoList from '../assets/todoList.png'
import registration from '../assets/Registration-form.png'

const Portfolio = () => {

  

  const portfolios = [
    {
      id: 1,
      src: ecommerceWithFilter,
      demoURL: "https://ecommerce-with-filter.netlify.app/",
      codeURL: "https://github.com/Ritikesh123/E-Commerce-Cart-or-Filter"
    },

    
    {
      id: 2,
      src: productLogin,
      demoURL: "https://productlogin.netlify.app/",
      codeURL: "https://github.com/Ritikesh123/Auth-login_with-Product"
    },

    {
      id: 3,
      src: carVisit,
      demoURL: "https://carvisit.netlify.app/",
      codeURL: "https://github.com/Ritikesh123/car-classified"
    },
    
    {
      id: 4,
      src: delivery,
      demoURL: "https://food-delivery234.netlify.app/",
      codeURL: "https://github.com/RitikeshRaj-RR/namaste-react"
    },

    {
      id : 5,
      src :validationform,
      demoURL: "https://formik-yup-validationform.netlify.app/",
      codeURL: "https://github.com/RitikeshRaj-RR/Validation-formik_yup"
    },

    {
      id: 6,
      src: todoList,
      demoURL: "https://react-todolist234.netlify.app/",
      codeURL: "https://github.com/RitikeshRaj-RR/react-Todo"
    },

    {
      id: 7,
      src: registration,
      demoURL: "https://normal-registration-form.netlify.app/",
      codeURL: "https://github.com/RitikeshRaj-RR/registration-form"
    },
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to 
    bg-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-8 mx-auto flex flex-col
      justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
          border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here </p>
        </div>

        



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0'>

        {
          portfolios.map(({id, src, demoURL, codeURL}) =>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className='rounded-md
                  duration-200 hover:scale-105' />

          <div className='flex items-center justify-center'>
            <a href={demoURL} target='_blank' rel='noopener noreferrer'>
            <button className='w-1/2 px-6 py-2 m-4 duration-200
            hover:scale-105'>Demo</button>
            </a>
            <a href={codeURL} target='_blank' rel='noopener noreferrer'>
            <button onClick="codeURL" className='w-1/2 px-6 py-2 m-4 duration-200
            hover:scale-105'>Code</button>
            </a>

          </div>
        </div>
          ))
        }

        

        </div>

      </div>


    </div>
  )
}

export default Portfolio;
