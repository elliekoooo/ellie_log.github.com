import { MutableRefObject, PropsWithChildren, useEffect, useRef } from 'react';

const pageHeight = window.innerHeight;
type sections = {
    refs: MutableRefObject<HTMLElement[]>
}& PropsWithChildren;


export const ScrollSection:React.FC<sections> = ({
    refs,
    children
}:sections) => {
    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        
        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    

    const handleScroll = () => {
        // setTimeout(() => {
        //    refs?.current[Math.ceil(window.scrollY/pageHeight)]?.scrollIntoView({behavior: 'smooth'});
        // }, 500);
    }; 

    return (
        <div>
            { children }
        </div>
    )

};


