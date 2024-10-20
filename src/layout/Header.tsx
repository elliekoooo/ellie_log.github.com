import { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from '../store/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome, faLaptop, faLink, faLinkSlash, faUser } from "@fortawesome/free-solid-svg-icons";

const Header:any = () => {
    const [checked,setChecked] = useState(false);
    const dispatch = useDispatch();

    const changeLang = () => {
        setChecked(!checked);
        dispatch(change(!checked));
    };

    const [active, setActive] = useState(false);

    const toggleNavBar = () => {
        setActive(!active);
    };

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" 
                    onClick={toggleNavBar} 
                    className={`navbar-burger js-burger has-text-white ${active ? 'is-active':''}`}
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navExm">

                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navExm" className={`navbar-menu ${active ? 'is-active':''}`}>
                <div className="navbar-end">
                    <a className="navbar-item link has-text-white" href="#home">
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        <span className="has-text-weight-bold is-size-7">HOME</span>
                    </a>
                    <a className="navbar-item link has-text-white" href="#about">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        <span className="has-text-weight-bold is-size-7">ABOUT</span>
                    </a>
                    <a className="navbar-item link has-text-white" href="#projects">
                        <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                        <span className="has-text-weight-bold is-size-7">PROJECTS</span>
                    </a>
                    <a className="navbar-item link has-text-white" href="#contact">
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                        <span className="has-text-weight-bold is-size-7">CONTACTS</span>
                    </a>
                    <div className="navbar-item">
                        <div className="field is-grouped px-1 pt-2">
                            <p className="control">
                                <a className="has-text-grey-light icon mx-1" target="_blank" href={'https://github.com/elliekoooo'}>
                                    <FontAwesomeIcon className="is-size-3" icon={faSquareGithub}/>
                                </a>
                                <a className="has-text-grey-light icon mx-1" target="_blank" href={''}>
                                    <FontAwesomeIcon className="is-size-3" icon={faLinkedin}/>
                                </a>
                                <a className="has-text-grey-light icon mx-1" target="_blank" href={'https://medium.com/@elliekoooo'}>
                                    <FontAwesomeIcon className="is-size-3" icon={faBlogger}/>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <input id="switch" type="checkbox" name="switch" className="switch is-info" checked={checked} onChange={()=>changeLang()}/>
                        <label htmlFor="switch"/>
                    </div>
                </div>
            </div>
        </nav>

        // <div className="fixed mx-6 my-6">
        //     <div className="field">
        //         <a className='has-text-grey-light icon mx-1' href={'https://github.com/elliekoooo'} target='_blank'>
        //             <FontAwesomeIcon className="is-size-3" icon={faSquareGithub}/>
        //         </a>
        //         <a className='has-text-grey-light icon mx-1' href={''} target='_blank'>
        //             <FontAwesomeIcon className="is-size-3" icon={faLinkedin}/>
        //         </a>
        //         <a className='has-text-grey-light icon mx-1' href={'https://medium.com/@elliekoooo'} target='_blank'>
        //             <FontAwesomeIcon className="is-size-3" icon={faBlogger}/>
        //         </a>
        //         <input 
        //             id="switch" 
        //             type="checkbox"
        //             name="switch" 
        //             className="switch" 
        //             checked={checked}
        //             onChange={()=>changeLang()}
        //         />
        //         <label htmlFor="switch"/>
        //     </div>
        // </div>
    )
}

export default Header;