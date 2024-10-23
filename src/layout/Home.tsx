import { faBlogger, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
    const el = useRef(null);

    useEffect(()=> {
        const typed = new Typed(el.current, {
            strings: ['<i>Hey, I am Ellie from Seoul, Korea</i>'],
            typeSpeed: 100,
            loop: false,
            backDelay: 5000
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="home" className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container is-max-tablet has-text-left box px-5 py-5">
                    <span className="is-size-1 has-text-black has-text-weight-bold is-size-2 mx-3" ref={el}></span>
                    <p className="is-size-5 has-text-black my-6">
                        A goal-oriented, collaborative, <span className="underline_red">frontend-focused</span> web developer.<br/>

                        Please check my projects.<br/> 
                    </p>
                    <div className="field is-grouped is-grouped-right">
                        <div className="field-label">
                            <label className="label has-text-black is-size-7 underline_purple"><i>SOCIALS</i></label>
                        </div>
                        <p className="control">
                            <a className="git icon mx-2 my-3" target="_blank" href={'https://github.com/elliekoooo'}>
                                <FontAwesomeIcon className="is-size-1" icon={faSquareGithub}/>
                            </a>
                        </p>
                        <p className="control">
                            <a className="linked icon mx-2 my-3" target="_blank" href={''}>
                                <FontAwesomeIcon className="is-size-1" icon={faLinkedin}/>
                            </a>
                        </p>

                        <p className="control">
                            <a className="blog icon mx-2 my-3" target="_blank" href={'https://medium.com/@elliekoooo'}>
                                <FontAwesomeIcon className="is-size-1" icon={faBlogger}/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Home;