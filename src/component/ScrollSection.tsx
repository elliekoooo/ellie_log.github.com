import { MutableRefObject, PropsWithChildren, useEffect, useRef, useState } from 'react';

const pageHeight = window.innerHeight;
type sections = {
    refs: MutableRefObject<HTMLElement[]>
}& PropsWithChildren;

const throttle = (func:Function, delay: number) => {
    let lastCall = 0;
    return (...args: any) => {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(args);
      }
    };
  };

export const useGetPosition = () => {
    const [position, setPosition] = useState(0); 
    
    return { position, setPosition };
};

export const ScrollSection:React.FC<sections> = ({
    refs,
    children
}:sections) => {
    const {position, setPosition} = useGetPosition();

    useEffect(()=> {
        window.addEventListener('wheel', throttle(()=>handleScroll(), 100), {passive: false});
        window.addEventListener('scroll', throttle(()=>handleScroll(), 100),{passive: false});
        
        return() => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  

    useEffect(()=> {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }, [position]);

    const handleScroll = () => {
      setPosition((Math.round(window.scrollY/pageHeight)*pageHeight));
    }; 

    return (
        <div>
            {  children  }
        </div>
    )


};
