import React from 'react'
import Footer from './Footer'

export default function Feature() {
  return (
    <div>
            <div className="relative">
 
<div className="bg-gradient-to-b from-red-500 to-red-800 h-64 flex flex-col items-center justify-center text-white px-4">
    <h1 className="text-center text-3xl font-extrabold mb-2 font-serif">
      Search according to your needs
    </h1>
    <p className="text-lg text-center">
      Discover the best opportunities and make your dream become reality.
    </p>
  </div>

 
  <div className="px-4">
  
    <div className="relative w-full sm:absolute sm:-bottom-10 sm:left-0">
      <div className="bg-white border border-gray-300 shadow-2xl rounded-lg mx-auto max-w-full sm:max-w-4xl p-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600">
            <option value="">Category</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
          <input
            type="number"
            placeholder="Min Price"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="number"
            placeholder="Max Price"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="bg-red-600 text-white p-2 justify-center rounded-md hover:bg-red-700 w-full sm:w-auto flex-shrink-0 mt-2 sm:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="sm:flex items-center sm:mt-10 max-w-screen-xl">
  <div className="sm:w-1/2 p-10">
    <div className="image object-center text-center">
      <img className="rounded-lg" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MXwxfHNlYXJjaHw4fHx3b3JrfGVufDB8MHx8fDE3MzczNzQwODR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="About Our Company" />
    </div>
  </div>
  <div className="sm:w-1/2 p-5">
    <div className="text">
      <h2 className="my-4 font-bold text-3xl sm:text-4xl">
        About <span className="text-red-600">Our Company</span>
      </h2>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
        doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat
        quia, repellat tempore voluptatum.
      </p>
    </div>

    
    <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 hover:text-white">
      Get Started
    </button>
  </div>
</div>








{/* //Feature */}
<section className="pt-12 bg-gray-50 sm:pt-16">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
        AI-Powered Customer Service Chatbot
      </p>
      <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
        Our AI-powered customer service chatbot is an innovative tool that can
        assist customers 24/7 with their inquiries, providing fast and accurate
        responses.
      </h1>

      <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
        <a
          href="#"
          className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Create a bot
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Book a demo
        </a>
      </div>
    </div>
  </div>

  <div className="bg-white">
    <div className="relative mx-auto mt-4 md:mt-8">
      <div className="lg:max-w-4xl lg:mx-auto">
        <img
          className="px-4 md:px-8"
          src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
          alt="Chatbot demo"
        />
      </div>
    </div>
  </div>
</section>










<section className="py-12 bg-white sm:py-16 lg:py-20">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
        Our Investors & Board of Directors
      </h2>
    </div>

    <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
      <div>
        <img
          className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png"
          alt="Board Member"
        />
        <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
          Jerome Bell
        </p>
        <p className="mt-2 text-base font-normal text-gray-600 font-pj">
          Co founder, Chairman, Executive Director
        </p>
      </div>

      <div>
        <img
          className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png"
          alt="Board Member"
        />
        <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
          Jerome Bell
        </p>
        <p className="mt-2 text-base font-normal text-gray-600 font-pj">
          Co founder, Chairman, Executive Director
        </p>
      </div>

      <div>
        <img
          className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png"
          alt="Board Member"
        />
        <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
          Jerome Bell
        </p>
        <p className="mt-2 text-base font-normal text-gray-600 font-pj">
          Co founder, Chairman, Executive Director
        </p>
      </div>

      <div>
        <img
          className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png"
          alt="Board Member"
        />
        <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
          Jerome Bell
        </p>
        <p className="mt-2 text-base font-normal text-gray-600 font-pj">
          Co founder, Chairman, Executive Director
        </p>
      </div>
    </div>

    <div className="mt-12 sm:mt-16">
      <svg
        className="w-auto h-4 mx-auto text-gray-300"
        viewBox="0 0 172 16"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* same <line> tags as original code */}
        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
        {/* ...baaki saare <line> tags same as original */}
      </svg>
    </div>

    <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
      <div>
        <img
          className="w-auto mx-auto h-11"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg"
          alt="Logo"
        />
      </div>
      <div>
        <img
          className="w-auto mx-auto h-11"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg"
          alt="Logo"
        />
      </div>
      <div>
        <img
          className="w-auto mx-auto h-11"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg"
          alt="Logo"
        />
      </div>
    </div>
  </div>
</section>








<section className="bg-zinc-50 overflow-hidden">
  <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
    {/* Image cards */}
    <div className="flex flex-col sm:flex-row mx-auto">
      <a href="#_">
        <img
          src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
          alt="Card 1"
        />
      </a>
      <a href="#_">
        <img
          src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
          alt="Card 2"
        />
      </a>
      <a href="#_">
        <img
          src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
          alt="Card 3"
        />
      </a>
      <a href="#_">
        <img
          src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
          alt="Card 4"
        />
      </a>
    </div>

    {/* Tutorial links */}
    {/* <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="flex w-0 flex-1 items-center p-4">
          <div className="w-full">
            <p className="text-sm font-medium text-neutral-900">Tutorial</p>
            <p className="mt-1 text-sm text-neutral-500">
              How to create animated image cards with Tailwind CSS and Astrojs
            </p>
            <p className="mt-2 text-xs text-orange-500 underline">
              <a href="https://lexingtonthemes.com">by © Lexington Themes</a>
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col divide-y divide-neutral-200">
            <div className="flex h-0 flex-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://lexingtonthemes.com/tutorials/how-to-create-animated-images-with-tailwind-css-and-astro-js/"
                className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Tutorial
              </a>
            </div>
            <div className="flex h-0 flex-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/UnwrappedDesign/lexington-tutorials/tree/main/src/pages/simplified-cards"
                className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Get the code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</section>


    </div>
  )
}
