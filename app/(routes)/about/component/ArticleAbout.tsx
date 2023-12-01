import React from 'react';

function ArticleAbout() {
    return (
        <article
            className='w-[80%] md:w-[60%] h-[80vh] mr-6 overflow-y-scroll text-white whitespace-pre-line
                        backdrop-blur-sm
                                    font-Bon-Voyage font-medium text-[6.7vw] leading-[8vw] md:text-5xl
                                    selection:bg-none selection:text-[rgb(205,0,0)]'
        >
            <div>
                <p>
                    <b className='font-Poppins font-extrabold'>SOMEWHERE </b> is
                </p>
                <p>an webapp that showcase some</p>
                <p>of Tim Burton's movies,</p>
                <p>coded by</p>
                <p>Lee Bingler</p>
                <p>which focuses on</p>
                <p>
                    <b className='font-Poppins font-extrabold'> MAKING CREATIVE</b>
                </p>
                <p>
                    <b className='font-Poppins font-extrabold'> AND USER FRIENDLY EXPERIENCE</b>
                </p>
            </div>
            <div className='mt-10'>
                <p>
                    <b className='font-Poppins font-extrabold'> Somewhere </b> is made with
                </p>
                <p>a modern tech stack such as,</p>
                <b className='font-Poppins font-extrabold'> GSAP </b>,
                <b className='font-Poppins font-extrabold'> TAILWIND </b>,
                <b className='font-Poppins font-extrabold'> JEST </b>
                <p>
                    and
                    <b className='font-Poppins font-extrabold'> NEXT.JS </b>
                </p>
                <p>which bring the greatest</p>
                <p>user experience with quality animation,</p>
                <p>mobile and desktop support and a good</p>
                <p>reliability.</p>
            </div>
        </article>
    );
}

export default ArticleAbout;
