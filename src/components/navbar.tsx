import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { PTlogo, Invlogo } from '@/assets/inde'
import { FaSearch } from "react-icons/fa";


function Navbar() {
    return (
        <header className=' bg-sky-400 top-0 left-0 w-full items-center z-10'>
            <div className='container mx-auto'>
                <div className='container'>
                    <div className='flex items-center justify-between h-20 relative'>
                        <div className='px-4'>
                            <Image src={PTlogo} alt='PTlogo' className='w-[200px] h-[100] pl-10'></Image>
                        </div>
                        <div className='flex items-center justify-center p-4'>
                            <nav className='absolute py-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:top-0 lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none'>
                                <ul className='flex items-center'>
                                    <li className='group'>
                                        <Link href='/' className='text-base text-white py-2 mx-8 flex group-hover:text-primary'>Login</Link>
                                    </li>
                                    <li className='group'>
                                        <Link href='/addUser' className='text-base text-white py-2 mx-8 flex group-hover:text-primary'>addUser</Link>
                                    </li>
                                    <li className='group'>
                                        <Link href='/updateUser' className='text-base text-white py-2 mx-8 flex group-hover:text-primary'>updateUser</Link>
                                    </li>
                                    <li className='group'>
                                        <Link href='#' className='text-base text-white py-2 mx-8 flex group-hover:text-primary'>Lorem</Link>
                                    </li>
                                    <li className='group text-white pr-8'>
                                        <FaSearch className='text-2xl' />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar