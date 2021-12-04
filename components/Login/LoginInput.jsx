import React from 'react'

export default function LoginInput() {
    return (
        <div className="opacity-90 w-screen  xs:w-3/4 sm:w-2/3 md:w-1/2 lg:w-[400px] absolute -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2" >
            <form className="bg-blue-50 shadow-md rounded px-8 py-20 ">
                <div className="mb-4">
                    <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="username ">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="flex items-center justify-between">
                    <input className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Sign In" />

                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>

        </div>
    )
}
