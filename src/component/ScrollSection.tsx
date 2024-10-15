import { MutableRefObject, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'store/store';

const pageHeight = window.innerHeight;
type sections = {
    refs: MutableRefObject<HTMLElement[]>
}& PropsWithChildren;

const throttle = (func:Function, delay: number) => {
    let last = 0;
    return (...args: any) => {
      const now = new Date().getTime();
      if (now - last >= delay) {
        last = now;
        func(args);
      }
    };
  };


export const ScrollSection:React.FC<sections> = ({
    refs,
    children
}:sections) => {
    const [position, setPosition] = useState(0); 
    const dispatch = useDispatch();

    useEffect(()=> {
        window.addEventListener('wheel', throttle(()=>handleScroll(), 100), {passive: false});
        window.addEventListener('scroll', throttle(()=>handleScroll(), 100),{passive: false});
        
        return() => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  

    useEffect(()=> {
        dispatch(set(position/pageHeight));
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
