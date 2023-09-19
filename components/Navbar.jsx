import React from "react";
import Image from "next/image";
import Logo from "../public/download.png";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook} from "react-icons/ai";

import { useState } from "react";
const Navbar =() => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="fixed w-full  h-24 shadow-xl bg-white">
            <div>
            <div className="flex justify-between items-center h-full w-full px-4  2xl:px-16">
                <Link href="/">
                    <Image
                    src={Logo}
                    alt="Logo"
                    width="90"
                    //height="10"
                    className="cursor-pointer"
                    priority
                    />
                    </Link>
                    <div className="hidden sm:flex">
                        <ul className="hidden sm:flex">
                            <Link href='/about'>
                                <li className="ml-10  hover:border-b text-xl text-sm">O nas</li>
                            </Link>
                            <Link href='/contact'>
                                <li className="ml-10  hover:border-b text-xl text-sm">Kontakt</li>
                            </Link>
                            <Link href='/ponudba'>
                                <li className="ml-10  hover:border-b text-xl text-sm">Ponudba</li>
                            </Link><li className="ml-10 uppercase hover:border-b text-xl text-sm">
                            <label class="relative block">
                                <span class="sr-only">Search</span>
                                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 0 0"></svg>
                                </span>
                                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full  pl-1   focus:outline-none  sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                            </label>
                            </li>
                        </ul>
                    </div>
                    <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                        <AiOutlineMenu size={25}/>

                    </div>
                </div>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-end">
                   <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25}/>

                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link href='/'>
                            <li onClick={() => setMenuOpen (false)}
                            className="py-4 cursor-pointer">Home</li>
                        </Link>
                        <Link href='/about'>
                            <li onClick={() => setMenuOpen (false)}
                            className="py-4 cursor-pointer">O nas</li>
                        </Link>
                        <Link href='/contact'>
                            <li onClick={() => setMenuOpen (false)}
                            className="py-4 cursor-pointer">Kontakt</li>
                        </Link>
                        <Link href='/ponudba'>
                            <li onClick={() => setMenuOpen (false)}
                            className="py-4 cursor-pointer">Ponudba</li>
                        </Link>
                        <li className=" uppercase hover:border-b  text-sm">
                            <label class="relative block">
                                <span class="sr-only">Search</span>
                                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 0 0"></svg>
                                </span>
                                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 pr-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 sm:text-sm" placeholder="Search anything..." type="text" name="search"/>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={20} className="cursor-pointer" />
                    <AiOutlineFacebook size={20} className="cursor-pointer" />
                    

                </div>
                <Link href="/">
                <Image
                    src={Logo}
                    alt="Logo"
                    width="105"
                    height="40"
                    className="cursor-pointer pt-8"
                    priority
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar