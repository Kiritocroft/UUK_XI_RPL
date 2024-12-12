"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link'
import { PTlogo, Invlogo} from '@/assets/inde'

export default function Home() {
  return (
    <>
      <header className='fixed bg-sky-400 top-0 left-0 w-full items-center z-10'>
        <div>
          <div className='container'>
            <div className='flex items-center justify-between h-20 relative'>
              <div className='px-4'>
                <Image src={PTlogo} alt='PTlogo' className='w-[200px] h-[100] pl-10'></Image>
              </div>
              <div className='flex items-center justify-center p-4'>
                <nav className='absolute py-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:top-0 lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none'>
                  <ul className='block lg:flex'>
                    <li className='group'>
                      <Link href='/user' className='text-base text-white py-2 mx-8 flex group-hover:text-primary'>PakBot</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-white py-2 mx-8 flex group-hover:text-primary'>Simba</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-white py-2 mx-8 flex group-hover:text-primary'>Susah</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-white py-2 mx-8 flex group-hover:text-primary'>Gusti</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex bg-white p-12 rounded shadow-md w-full max-w-3xl items-center">
                <div className="w-1/2">
                    <Image src={Invlogo} alt="Invlogo" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                        <Link href='/user'>
                            <button
                                type="submit"
                                className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-2 px-24 rounded-full focus:outline-none focus:shadow-outline"
                                >
                                Login
                            </button>
                              </Link>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">
                                New user? <a href="#" className="font-bold text-gray-700 underline">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
