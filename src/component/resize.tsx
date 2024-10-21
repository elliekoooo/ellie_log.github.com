import { useEffect, useState } from "react";


export const Resizing = () => {
    const [size, resetSize] = useState(window.innerWidth);
     
     useEffect(() => {
         const handle = () => resetSize(window.innerWidth);
         window.addEventListener('resize', handle);
         
         return ()=>window.removeEventListener('resize', handle);
     }, []);

     return size;
};

