import React, { useState } from "react"
import { Link, animateScroll as scroll} from 'react-scroll'

import {MenuIcon, XIcon} from '@heroicons/react/outline'
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg mb-2">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex justify-center items-center">
                  <h1 className="text-3xl font-bold mx-4 sm:text-4xl">Atromis</h1>
                  <ul className="hidden md:flex cursor-pointer px-6">
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                    <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                    <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                  </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="bg-transparent text-indigo-600 mr-4 px-3 py-2">Sign In</button>
                    <button className="px-3 py-2">Sign Up</button>
                </div>
                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}    
                </div>
            </div>

            <ul className={!nav ? 'hidden' : "absolute bg-zinc-200 w-full px-8"}>
                    <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-600 px-3 py-2 mb-4">Sign In</button>
                    <button className="px-3 py-2">Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar