'use client';
import React from 'react';

function ArrowBtn() {
    return (
        <div className='group'>
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                className='translate-y-5 group-hover:translate-y-10 transition-all'
            >
                <svg
                    width='9'
                    height='101'
                    viewBox='0 0 9 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M9.00002 9.17745L4.50001 0L0 9.17745L3.54939 7.60869L3.54939 101H5.45062L5.45063 7.60869L9.00002 9.17745Z'
                        fill='currentColor'
                        shapeRendering='geometricPrecision'
                    ></path>
                </svg>
            </button>
        </div>
    );
}

export default ArrowBtn;
