import { faBlogger, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Typed from "typed.js";

const Home = (lang: any) => {
    const { t } = useTranslation(lang);
    const el = useRef(null);

    useEffect(()=> {
        const typed = new Typed(el.current, {
            strings: ['<i>Hey, I am Ellie :-)</i>'],
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
                <div className="container is-max-tablet py-6">
                    <div className="card has-text-left">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-96x96">
                                        <img className="" src={require('../assets/images/profile.png')} />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <span className="title is-size-1-desktop is-size-6-touch has-text-black has-text-weight-bold is-size-1 mx-3" ref={el}></span>
                                    <p className="subtitle is-7 is-uppercase mx-3">Seoul, Korea</p>
                                </div>
                            </div>
                            <div className="content">
                                <div className="is-size-5 has-text-black my-6">
                                    <div dangerouslySetInnerHTML={{__html: t('home.content')}}></div>
                                </div>
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
                </div>
            </div>
        </div>
    )
};


export default Home;