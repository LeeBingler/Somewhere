import { useEffect, useState } from 'react';

function useGetWindowSize() {
    const [screenSize, setScreenSize] = useState(() => getCurrentDimension());

    function getCurrentDimension() {
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
