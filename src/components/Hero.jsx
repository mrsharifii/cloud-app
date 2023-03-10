import React from "react";

import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
    return (
        <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto pt-8">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 mt-5">
                    <p className="text-2xl">Unique Sequencing & Production</p>
                    <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Management</h1>
                    <p className="text-2xl">This is our Tech brand</p>
                    <button className="py-3 px-6 mt-4 sm:w-[60%]">Get Started</button>
                </div>
                <div className="mb-4">
                <img className="w-full" src={bgImg} alt='/' />
                </div>
                <div className="flex absolute flex-col py-8 md:min-w-[760px] bottom-[-8%]
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200/80 border
                border-slate-300 rounded-xl text-center shadow-xl">
                    <p className="text-2xl mb-4 font-semibold">Data Services</p>
                    <div className="flex justify-between flex-wrap px-4">
                        <p className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-indigo-600 mr-2" /> App Security</p>
                        <p className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-6 text-indigo-600 mr-2" /> Dashboard Design</p>
                        <p className="flex px-4 py-2 text-slate-500"><PaperAirplaneIcon className="h-6 text-indigo-600 mr-2" /> Cloud Data</p>
                        <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-indigo-600 mr-2" /> API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero