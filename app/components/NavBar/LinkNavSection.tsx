import Link from 'next/link';
import React from 'react';

export default function LinkNavSection({
    closeNavSection,
    children,
    index
}: {
    children: string;
    closeNavSection: () => void;
    index: number;
}) {
    return (
        <div>
            <Link
                href={`/${children.toLowerCase()}`}
                onClick={closeNavSection}
                className={`text-7xl flex flex-col items-center ${
                    index % 2 ? 'font-Bon-Voyage capitalize font-medium' : 'font-Poppins uppercase font-bold'
                }`}
            >
                {children}
                <p className='mt-2 text-[2.5vh] font-Arapey italic font-normal'>
                    {index < 10 ? '0' + index : index}
                </p>
            </Link>
        </div>
    );
}