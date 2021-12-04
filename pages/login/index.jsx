import React from 'react'
import LoginInput from 'components/Login/LoginInput'
import Head from 'next/head'

export default function Login() {
    return (
        <div className="bg-login-background w-screen h-screen w-screen bg-center">
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <LoginInput />
            </main>
        </div>


    )
}
