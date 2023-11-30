import Link from 'next/link';
import React from 'react';

function LogoLink() {
    return (
        <Link className='cursor-pointer' href={'/films'}>
            LOGO SOMEWHERE
        </Link>
    );
}

export default LogoLink;
