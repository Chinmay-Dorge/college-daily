import React from 'react'
import {useSession , signIn , signOut } from 'next-auth/react';
import Link from 'next/link';


export default function Landing() {
    const { data: session, status } = useSession();

    return (
        <div className="bg-gray-800 text-white">

            <section
                className=" md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
                <div className="md:flex-1 md:mr-10">
                    <h1 className="font-pt-serif text-5xl font-bold mb-7">
                        College Daily <br />
                        <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100% text-3xl">
                            Software Engineering Project
                        </span>
                    </h1>
                    <p className="font-pt-serif font-normal mb-7">
                        A utility app for students which makes college life easy. Get an easy access to time table. Keep a track of all your tasks using the task schedular. Have an easy access to your Codeforces profile and many more features which will be added soon ...
                    </p>
                    <div className="font-montserrat">
                        <button onClick={()=>signIn()} className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                            Log In
                        </button>
                        <Link href='/aboutus'>
                        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg" >
                            About us
                        </button>
                        </Link>
                        
                    </div>
                </div>
                <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
                    <div className="relative">
                        <img src='dist/assets/Highlight3.svg' alt="" className="absolute -top-16 -left-10" />
                    </div>
                    <img src='dist/assets/MacBook Pro.png' alt="Macbook" />
                    <div className="relative">
                        <img src='dist/assets/Highlight2.svg' alt="" className="absolute -bottom-10 -right-6" />
                    </div>
                </div>
            </section>
        </div>
    )
}
