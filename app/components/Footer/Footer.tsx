import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import ArrowBtn from './ArrowBtn';
import Link from 'next/link';
import EmailBtn from './EmailBtn';

function Footer() {
    return (
        <footer className='w-full flex justify-center pt-16'>
            <div className='w-10/12 border-t-[1px] border-[rgb(196,196,196)]'>
                <div className='pt-[3vh] w-full flex justify-between'>
                    <div
                        className='flex gap-x-1 items-center text-sm
                    md:text-[min(calc(12px+0.5vw),22px)] md:gap-x-[1vw]'
                    >
                        <EmailBtn />
                        <Link href={'https://twitter.com/LeeBingler'} target='_blank'>
                            <FaTwitter />
                        </Link>
                        <p
                            className=' font-Arapey-regular font-light italic whitespace-nowrap text-[rgb(37,37,37)]
                        '
                        >
                            Somewhere ©2023-2024
                        </p>
                    </div>
                    <Link
                        href='https://www.lee-bingler.com/'
                        target='_blank'
                        className='text-sm italic font-Arapey-regular font-light whitespace-nowrap
                        md:text-[calc(12px+0.5vw)]'
                    >
                        website by L.Bingler
                    </Link>
                </div>
                <div className='pt-[3vh] flex justify-center items-center'>
                    <ArrowBtn />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
