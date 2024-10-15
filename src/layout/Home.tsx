import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
    const el = useRef(null);

    useEffect(()=> {
        const typed = new Typed(el.current, {
            strings: ['<i>MY PORTFOLIO...</i>'],
            typeSpeed: 200,
            loop: true,
            backDelay: 2000
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="hero is-fullheight-with-navbar">
            <div className="hero-body is-vcentered my-6">
                <span className="has-text-weight-bold is-size-1 has-text-white" ref={el}></span>
            </div>
        </div>
    )
};


export default Home;