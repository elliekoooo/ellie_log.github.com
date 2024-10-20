import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
    const el = useRef(null);

    useEffect(()=> {
        const typed = new Typed(el.current, {
            strings: ['<i>Hey, I am Ellie from Seoul</i>'],
            typeSpeed: 100,
            loop: true,
            backDelay: 5000
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="home" className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <span className="title has-text-white has-text-weight-bold is-size-2 mx-6" ref={el}></span>
                    <p className="subtitle has-text-white my-6">
                        Hey, I am Ellie from Seoul, <br/>
                        A goal-oriented, collaborative, frontend-focused web developer.<br/>
                        Please check my projects.<br/> 
                    </p>
                    <p className="has-text-centered">
                        <a className="button is-medium is-info is-light is-focus has-text-grey" href="#projects">PROJECTS</a>
                    </p>
                </div>
            </div>
        </div>
    )
};


export default Home;