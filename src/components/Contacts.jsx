import React from 'react'

const Contacts = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to
     bg-gray-800 p-4 text-white'>

        <div className='flex flex-col max-w-screen-lg p-4 justify-center
        mx-auto h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-b-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/7ad5dc55-1cde-492c-ba6c-f180517205df'
                    method='POST' className='flex flex-col w-full md:w-1/2'>
                        
                    <input type='text' name='name' placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />

                    <input type='text' name='email' placeholder='Enter your mail'
                    className='my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea name='message'
                    placeholder='Enter your message' 
                    rows='10' className='p-2 bg-transparent border-2 rounded-md
                     text-white focus:outline-none'>
                    </textarea>

                    <button className='text-white bg-gradient-to-b 
                    to bg-cyan-500 to-blue-500 px-6 py-3 my-8 
                    mx-auto flex items-center rounded-md hover:scale-110
                    duration-300'>Lets's talk</button>

                </form>
            </div>

        </div>

    </div>
  )
}

export default Contacts