import React, { useState } from 'react'

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return (

        <nav className="  w-full flex  flex-center justify-between  sticky top-0 sm:mr-auto">
            {/* <div className="align-middle flex items-center">
                <span className="text-xl bg-black text-white wiggle   ">
                    Logo
                </span>
            </div> */}

            <button className=" rounded-xl px-3 py-1 sm:hidden" onClick={handleShowMenu} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>
            <ul className={` absolute right-0 top-full  w-32 sm:w-auto sm:flex sm:h-auto sm:relative ${showMenu ? "block" : "hidden"}`} >
                <li className="px-5 py-1 xs:hover:border-b-4 border-green-500 cursor-pointer">menu 1</li>
                <li className="px-5 py-1 xs:hover:border-b-4 border-green-500 cursor-pointer">menu 2</li>
                <li className="px-5 py-1 xs:hover:border-b-4 border-green-500 cursor-pointer">menu 3</li>
            </ul>


        </nav>

    )
}
