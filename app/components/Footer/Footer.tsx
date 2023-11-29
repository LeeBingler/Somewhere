import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import ArrowBtn from './ArrowBtn';

function Footer() {
    return (
        <footer className='w-full flex justify-center'>
            <div className='w-10/12 border-t-[1px] border-[rgb(196,196,196)]'>
                <div className='pt-[3vh] w-full flex justify-between'>
                    <div className='flex items-center'>
                        <div className='flex'>
                            <MdEmail />
                            <FaTwitter />
                        </div>
                        <p className='font-Arapey italic text-[rgb(37,37,37)]'>
                            Somewhere ©2023-2024
                        </p>
                    </div>
                    <a
                        className='font-Arapey italic whitespace-nowrap md:text-[calc(12px+1vw)]'
                        href=''
                    >
                        website by Lee Bingler
                    </a>
                </div>
                <div className='pt-[3vh] flex justify-center items-center'>
                    <ArrowBtn />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
