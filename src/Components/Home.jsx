import React, { useState } from 'react'
// import ForBiggerJoyrides from "../assets/ForBiggerJoyrides.mp4"
import lyric from "../assets/lyric.webm"
import TextPressure from '../TextPressure';
import BlurText from "../BlurText";
import ScrollVelocity from '../ScrollVelocity';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";



export default function Home() {



    

    const faqs = [
        {
            id: 1,
            question: "What types of hosting plans do you offer?",
            answer:
                "We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.",
        },
        {
            id: 2,
            question: "What is the uptime guarantee for your hosting services?",
            answer: "We guarantee an uptime of 99.9% for all our hosting services.",
        },
        {
            id: 3,
            question: "Do you provide website migration assistance?",
            answer: "Yes, we offer free website migration assistance for new customers.",
        },
        {
            id: 4,
            question: "What security measures do you have in place?",
            answer:
                "We employ advanced security measures including firewalls, DDoS protection, and regular security audits.",
        },
    ];


    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    }
    return (
        <>
            <div>


                <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
                    {/* Background Video */}
                    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                        <video
                            className="min-w-full min-h-full absolute object-cover"
                            src={lyric}
                            type="video/mp4"
                            autoPlay
                            muted
                            loop
                        ></video>
                    </div>

                    {/* Content */}
                    <div className="video-content space-y-2 z-10">


                        <BlurText
                            text="WELCOME NEXA WORLD"
                            delay={150}
                            animateBy="words"
                            direction="top"

                            className="text-7xl mb-8 font-bold"
                        />



                        <div style={{ position: 'relative', height: '300px' }}>
                            <TextPressure
                                text="NEXA!"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#ffffff"
                                strokeColor="#ff0000"
                                minFontSize={36}
                            />
                        </div>


                    </div>

                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]"></div>
                </section>
            </div>



            {/* hero section */}



            <div className="flex h-screen justify-center items-center ">
                <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
                    <div className="text-center ">
                        <h1
                            className="text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
                            <span className="block xl:inline"><span className="mb-1 block">Create amazing</span>
                                <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                                    podcast show notes
                                </span>
                            </span>
                            <div className="mt-2">10X faster
                                <span className="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42"
                                    className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                                    preserveAspectRatio="none">
                                    <path
                                        d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                                    </path>
                                </svg>
                                    <span className="relative">with AI tools.</span>
                                </span>
                            </div>
                        </h1>
                        <p className="mx-auto mt-3 max-w-xl text-lg sm:mt-5 md:mt-5">
                            example is the AI Content Generator
                            that helps you and your team break through creative blocks to create amazing, original content 10X
                            faster.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                            <div className="rounded-md shadow"><Link
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                                to="/form">Get started for free 🚀
                            </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <ScrollVelocity
                texts={['NEXA TECH', 'Scroll Down']}

                className="custom-scroll-text"
            />







            <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">

                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hey 👋 I
                                am
                                <br className="block sm:hidden" />Jenny Carter
                            </h2>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                                Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>

                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                                    <span className="relative"> Have a question? </span>
                                </span>
                                <br className="block sm:hidden" />Ask me on <a href="https://www.instagram.com/jenny.carter" title="" target="_blank" rel="noopener noreferrer"
                                    className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Twitter</a>
                            </p>
                        </div>

                        <div className="relative">
                            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>




            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="xl:flex xl:items-center xl:justify-between">
                        <h2 className="text-xl font-bold text-center text-gray-400 xl:text-left font-pj">1000+ Big brands trust us</h2>

                        <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
                            <img className="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg" alt="" />
                            <img className="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-squarestone.svg" alt="" />
                            <img className="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-martino.svg" alt="" />
                            <img className="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-waverio.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>












            <section className="py-24 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">Choose your plan </h2>
                        <p className="text-gray-500 text-center leading-6 mb-9">7 Days free trial. No credit card required.</p>

                        <div className="flex justify-center items-center">
                            <label className="min-w-[3.5rem] text-xl relative text-gray-900 mr-4 font-medium">Bill Monthly</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="basic-with-description"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-indigo-100 rounded-full peer peer-checked:bg-indigo-100 transition-colors ease-in-out duration-200"></div>
                                <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-indigo-600 rounded-full shadow transform transition peer-checked:translate-x-full"></span>
                            </label>
                            <label className="relative min-w-[3.5rem] font-medium text-xl text-gray-500 ml-4 ">
                                Bill Yearly
                            </label>
                        </div>

                    </div>

                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">

                        <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
                            <h3 className="font-manrope text-2xl font-bold mb-3">Free</h3>
                            <div className="flex items-center mb-6">
                                <span className="font-manrope mr-2 text-6xl font-semibold">$0</span>
                                <span className="text-xl text-gray-500 ">/ month</span>
                            </div>

                            <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>2 auto tracking</span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>7 Day transaction clearing </span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>24/7 Customer support </span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>All widget access</span>
                                </li>
                            </ul>
                            <a href="javascript:;" className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700">Purchase Plan</a>

                        </div>

                        <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-indigo-50 transition-all duration-500 hover:bg-indigo-100 ">
                            <div className="uppercase bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white">
                                MOST POPULAR
                            </div>
                            <div className="p-6 xl:py-9 xl:px-12">
                                <h3 className="font-manrope text-2xl font-bold mb-3">Advanced</h3>
                                <div className="flex items-center mb-6">
                                    <span className="font-manrope mr-2 text-6xl font-semibold text-indigo-600">$150</span>
                                    <span className="text-xl text-gray-500 ">/ month</span>
                                </div>

                                <ul className="mb-12 space-y-6 text-left text-lg ">
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>AI Advisor</span>
                                    </li>
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>Unlimited auto tracking</span>
                                    </li>
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>1 Day transaction clearing </span>
                                    </li>
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>Priority customer support</span>
                                    </li>
                                    <li className="flex items-center space-x-4">

                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>All Widget Access</span>
                                    </li>
                                </ul>
                                <a href="javascript:;" className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit block mx-auto hover:bg-indigo-700">Purchase Plan</a>

                            </div>
                        </div>

                        <div className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
                            <h3 className="font-manrope text-2xl font-bold mb-3">Team</h3>
                            <div className="flex items-center mb-6">
                                <span className="font-manrope mr-2 text-6xl font-semibold">$180</span>
                                <span className="text-xl text-gray-500 ">/ month</span>
                            </div>

                            <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>AI Advisor</span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Unlimited auto tracking </span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>1 Day transaction clearing </span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>Priority customer support</span>
                                </li>
                                <li className="flex items-center space-x-4">

                                    <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>All Widget Access</span>
                                </li>
                            </ul>
                            <a href="javascript:;" className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700">Purchase Plan</a>

                        </div>
                    </div>


                </div>
            </section>










            <div className="bg-[#F2F4FF] h-screen">
                <section className="max-w-5xl mx-auto py-10 sm:py-20">
                    <div className="flex items-center justify-center flex-col gap-y-2 py-5">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            Frequently asked questions
                        </h2>
                        <p className="text-lg font-medium text-slate-700/70">
                            Questions related to web hosting
                        </p>
                    </div>
                    <div className="w-full px-7 md:px-10 xl:px-2 py-4">
                        <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className={`border-b border-[#0A071B]/10 ${faq.id === faqs.length ? "" : "border-b"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                                    >
                                        <span>{faq.question}</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transition-transform duration-200 ${openId === faq.id ? "rotate-180" : ""
                                                }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                                        </svg>
                                    </button>
                                    {openId === faq.id && (
                                        <div className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>







{/* pagination */}
    <div className="flex justify-center">
      <nav className="bg-gray-200 rounded-full px-4 py-2">
        <ul className="flex text-gray-600 gap-4 font-medium py-2">
          <li>
            <a
              href="#"
              className="rounded-full px-4 py-2 bg-white text-gray-600"
            >
              1
            </a>
          </li>
          <li>
            <Link
              to="/feature"
              className="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              4
            </Link>
          </li>
     
        </ul>
      </nav>
    </div>





{/* Footer */}















            </div>
        </>
    )
}
