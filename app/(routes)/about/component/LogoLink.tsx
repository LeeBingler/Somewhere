import Link from 'next/link';
import React from 'react';

function LogoLink() {
    return (
        <Link className='cursor-pointer text-white flex items-center gap-x-2' href={'/films'}>
            <svg x='0' y='0' width='60' height='49.91639004667182'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 99.8 83.7'>
                    <path
                        d='M2 2h71.7L2 73.8V2zm47.9 55.7L2 9.9v71.8h58.3M97.7 9.9L26 81.6h71.8V9.9zm-47.8 16l47.9 47.9V2H30.4'
                        stroke='#ffffff'
                        stroke-width='4'
                    ></path>
                </svg>
            </svg>
            <p className='font-Poppins font-extrabold text-3xl'>Somewhere</p>
        </Link>
    );
}

export default LogoLink;
