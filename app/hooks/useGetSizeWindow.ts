'use client';
import { useEffect, useState } from 'react';

function useGetWindowSize() {
    const [screenSize, setScreenSize] = useState(() => getCurrentDimension());

    function getCurrentDimension() {
        // Safety for next that dont underestand that is a hook to use on client only
        if (typeof window === 'undefined') {
            return {
                height: 10000,
                width: 10000,
            }
        }
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(() => getCurrentDimension());
        };

        window.addEventListener('resize', updateDimension);

        return () => {
            window.addEventListener('resize', updateDimension);
        };
    }, []);

    return screenSize;
}

export default useGetWindowSize;
