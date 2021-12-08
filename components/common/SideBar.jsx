import React, { useState } from "react";

export default function SideBar() {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className="relative">
            <button className={`rounded-xl px-3 py-1 sm:hidden z-10 absolute ${showMenu ? "text-white" : "text-black"} hover:rotate-[360deg] duration-500`} onClick={handleShowMenu} >
                {!showMenu ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>}
            </button>
            <nav className={` absolute w-2/3 top-0 sm:w-1/3 lg:w-1/5 bg-[#02011a] sm:block animate-scaleX text-gray-300 ${showMenu ? "block" : "hidden"}`}>
                <h1 className="text-3xl text-center mb-20 pt-10">Logo</h1>
                <ul className="flex flex-col justify-center">
                    <li className="cursor-pointer px-6 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 1</li>
                    <li className="cursor-pointer px-6 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 1</li>
                    <li>
                        <div className="flex justify-between pl-6 py-3">
                            <div>tieu de</div>
                            <div className="cursor-pointer pr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                        <ul className="bg-blue-900">
                            <li className="cursor-pointer pl-14 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 2</li>

                        </ul>
                    </li>
                    <li>
                        <div className="flex justify-between pl-6  py-3">
                            <div>tieu de</div>
                            <div className="cursor-pointer pr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                        <ul className="bg-blue-900">
                            <li className="cursor-pointer pl-14 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 2</li>
                            <li className="cursor-pointer pl-14 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 2</li>
                            <li>
                                <div className="flex justify-between pl-14  py-3 bg-[#02011a]">
                                    <div>tieu de</div>
                                    <div className="cursor-pointer pr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <ul>
                                    <li className="cursor-pointer pl-20 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 3</li>
                                    <li className="cursor-pointer pl-20 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 3</li>
                                    <li className="cursor-pointer pl-20 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 3</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="cursor-pointer px-6 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 1</li>
                    <li className="cursor-pointer px-6 py-3 border-b-2 border-blue-500 hover:bg-white hover:text-[#02011a] duration-2000" >menu level 1</li>

                </ul>
            </nav>
        </div>
    );
}
