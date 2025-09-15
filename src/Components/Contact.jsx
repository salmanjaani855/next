"use client"
import { useEffect, useState } from "react"

export default function Contact() {


    const [stars, setStars] = useState(0)
  const [downloads, setDownloads] = useState(0)
  const [sponsors, setSponsors] = useState(0)

  useEffect(() => {
    const animateCountUp = (setter, target, suffix = "") => {
      let current = 0
      const increment = Math.ceil(target / 100) // speed adjust
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          clearInterval(interval)
          setter(target + suffix)
        } else {
          setter(current)
        }
      }, 10)
    }

    animateCountUp(setStars, 4670, "+")
    animateCountUp(setDownloads, 80000, "+")
    animateCountUp(setSponsors, 100, "+")
  }, [])





  const apps = [
    {
      name: "Notion",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be92ee5ddf0080fb90_notion.png",
    },
    {
      name: "Asana",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bef9d004f8a9cf3b29_asana.png",
    },
    {
      name: "Slack",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be8c099d4e1ed55770_slack.png",
    },
    {
      name: "Loom",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be5b31ba243e4da377_loom.png",
    },
    {
      name: "Spotify",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bea97e140677496dae_spotify.png",
    },
    {
      name: "Webflow",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bea73fcc6ee568f6f0_webflow.png",
    },
    {
      name: "Adobe Illustrator",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bdf9d004f8a9cf3b09_adobe-illustrator.png",
    },
    {
      name: "Figma",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be1de916069b5e1aaa_figma.png",
    },
    {
      name: "Photoshop",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be1de916069b5e1a86_adobe-photoshop.png",
    },
    {
      name: "Premiere Pro",
      img: "https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be051d32942a7aa31e_adobe-premierepro.png",
    },
  ];

  return (
    <div>
              <section id="contact" className="py-20 bg-gray-900 text-white">
  <div className="container-custom">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Get In <span className="text-amber-600">Touch</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Have questions or ready to book? Reach out to us anytime.
        </p>
        <div className="space-y-6">
        
          <div className="flex items-start">
            <svg className="h-6 w-6 text-amber-600 mt-1 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3zm0 1c-2.667 0-8 1.333-8 4v2h16v-2c0-2.667-5.333-4-8-4z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-1">Location</h3>
              <p className="text-gray-300"> Lucknow, UP, India</p>
            </div>
          </div>

       
          <div className="flex items-start">
            <svg className="h-6 w-6 text-amber-400 mt-1 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h1l2 5-2 1a11 11 0 006 6l1-2 5 2v1a2 2 0 01-2 2h-1c-6.627 0-12-5.373-12-12V5z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-1">Phone</h3>
              <p className="text-gray-300">+91 9876543210</p>
            </div>
          </div>

   
          <div className="flex items-start">
            <svg className="h-6 w-6 text-amber-400 mt-1 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 12l-4-4-4 4m8 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m0-4a2 2 0 012-2h8a2 2 0 012 2v4z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-gray-300">kuldeepprajapati2111@gmail.com</p>
            </div>
          </div>
        </div>

      
        <div className="mt-8 flex space-x-4">
     
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Facebook">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-1c-1 0-1 .5-1 1v1h3l-1 3h-2v7A10 10 0 0022 12z"/>
            </svg>
          </a>
       
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Instagram">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z"/>
            </svg>
          </a>
   
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Twitter">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.26 4.26 0 0016.11 4c-2.36 0-4.27 1.91-4.27 4.27 0 .33.04.66.1.97C7.7 8.99 4.07 7.13 1.64 4.16a4.26 4.26 0 00-.58 2.15c0 1.48.75 2.79 1.88 3.55a4.22 4.22 0 01-1.93-.53v.05c0 2.07 1.47 3.8 3.42 4.19a4.3 4.3 0 01-1.93.07c.55 1.71 2.13 2.96 4 2.99A8.58 8.58 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 5.5a8.52 8.52 0 01-2.54.7z"/>
            </svg>
          </a>
          
          <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="LinkedIn">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 112.5 2.5 2.5 2.5 0 01-2.5-2.5zM3 8h4v12H3zm6 0h3.8v1.75h.05a4.15 4.15 0 013.7-2.05c3.95 0 4.7 2.6 4.7 5.95V20h-4v-5.5c0-1.3-.02-3-1.85-3-1.86 0-2.15 1.45-2.15 2.9V20h-4z"/>
            </svg>
          </a>
        </div>
      </div>


      <div className="bg-gray-800 p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
        <form className="space-y-6">
          <div>
            <label for="name" className="block text-sm font-medium mb-1">Your Name</label>
            <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Enter your name" />
          </div>
          <div>
            <label for="email" className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Enter your email" />
          </div>
          <div>
            <label for="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-lg transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>








<div className="bg-black">
  <section
    id="features"
    className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
  >
    <div className="relative mx-auto max-w-5xl text-center">
      <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
        Why choose us
      </span>
      <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
        Build a Website That Your Customers Love
      </h2>
      <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-400">
        Our templates allow for maximum customization. No technical skills required – our intuitive
        design tools let you get the job done easily.
      </p>
    </div>

    {/* Features Grid */}
    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
      {/* Feature 1 */}
      <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-indigo-500 bg-gradient-to-b from-indigo-600 to-indigo-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-color-swatch"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
            <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
            <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
            <line x1="17" y1="17" x2="17" y2="17.01" />
          </svg>
        </div>
        <h3 className="mt-6 text-gray-400">Customizable</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
          Tailor your landing page's look and feel, from the color scheme to the font size, to the
          design of the page.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-indigo-500 bg-gradient-to-b from-indigo-600 to-indigo-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-bolt"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
          </svg>
        </div>
        <h3 className="mt-6 text-gray-400">Fast Performance</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
          We build our templates for speed in mind, for super-fast load times so your customers never
          waver.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-indigo-500 bg-gradient-to-b from-indigo-600 to-indigo-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-tools"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
            <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
            <polyline points="12 8 7 3 3 7 8 12" />
            <line x1="7" y1="8" x2="5.5" y2="9.5" />
            <polyline points="16 12 21 17 17 21 12 16" />
            <line x1="16" y1="17" x2="14.5" y2="18.5" />
          </svg>
        </div>
        <h3 className="mt-6 text-gray-400">Fully Featured</h3>
        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
          Everything you need to succeed and launch your landing page, right out of the box. No need
          to install anything else.
        </p>
      </div>
    </div>

    {/* Gradient Backgrounds */}
    <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b border-indigo-500/20 bg-gradient-to-tr from-indigo-600/20 via-transparent to-transparent"></div>
    <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full bg-gradient-to-tl from-red-600/20 via-transparent to-transparent"></div>
  </section>
</div>










    <div className="h-screen dark:bg-gray-900">
      <div className="pt-12 bg-gray-50 dark:bg-gray-900 sm:pt-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
              Trusted by developers
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-600 dark:text-gray-400 sm:mt-4">
              This package powers many production applications on many different hosting platforms.
            </p>
          </div>
        </div>

        <div className="pb-12 mt-10 bg-gray-50 dark:bg-gray-900 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-900"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  
                  {/* Stars */}
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Stars on GitHub
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                      {stars}
                    </dd>
                  </div>

                  {/* Downloads */}
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Downloads
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                      {downloads}
                    </dd>
                  </div>

                  {/* Sponsors */}
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Sponsors
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                      {sponsors}
                    </dd>
                  </div>

                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="bg-gray-300 flex items-center justify-center min-h-screen">
      {/* Navigation */}
      <section className="fixed bottom-10 inset-x-0 flex justify-center">
        <ul className="flex space-x-4">
          {apps.map((app, index) => (
            <li
              key={index}
              className="group relative flex items-center justify-center w-20 transition-all duration-500 hover:w-32"
            >
              <a
                href="#"
                className="pointer-events-auto flex items-center justify-center w-full h-full"
              >
                <img
                  src={app.img}
                  alt={`${app.name} app icon`}
                  className="w-full object-contain"
                />
              </a>
              <div className="absolute top-0 transform -translate-y-full bg-gray-100 text-gray-800 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {app.name}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>

    </div>
  )
}
