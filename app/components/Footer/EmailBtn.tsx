'use client';

import React from 'react';
import { MdEmail } from 'react-icons/md';
import { IoIosCopy } from 'react-icons/io';
import gsap from 'gsap';

function EmailBtn() {
    function onClick() {
        const tl = gsap.timeline();
        navigator.clipboard.writeText('binglerlee@gmail.com');

        tl.set('.email', { display: 'flex', opacity: 0, y: -40 });
        tl.to('.email', { y: -80, opacity: 1 });
        tl.to('.email', { y: -40, opacity: 0 }, '+=1');
        tl.to('.email', { display: 'none', duration: 0 });
    }

    return (
        <>
            <button onClick={onClick}>
                <MdEmail />
            </button>
            <div className='email select-none hidden items-center gap-x-2 px-5 py-2 whitespace-nowrap absolute bg-white font-Poppins italic font-bold'>
                <IoIosCopy />
                Email copied to the clipboard
            </div>
        </>
    );
}

export default EmailBtn;
