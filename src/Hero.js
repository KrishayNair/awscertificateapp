import React from 'react'

function Hero() {
  return (
 
       <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-screen h-screen overflow-x-hidden mb-28">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block text-left px-3 p-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-black">
            Brand new
          </p>
          <h2 className="mb-5 text-left font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Certificate / Notes
            <br className="hidden md:block" />
            Storage and Quiz App{' '}
            <span className="inline-block text-deep-purple-accent-400">
             
            </span>
          </h2>
          <p className="pr-5 text-left mb-5 text-base text-gray-700 md:text-lg">
          Learn & Quiz: Expand Knowledge, Simplify Learning! Dive into notes, test your skills, and unlock your potential.
          </p>
          <div className="flex items-center">
            <a
              href="/quiz"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="https://www.youtube.com/@amazonwebservices"
              target="_blank"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
