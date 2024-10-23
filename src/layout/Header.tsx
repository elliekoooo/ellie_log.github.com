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
                    className={`navbar-burger js-burger has-text-black ${active ? 'is-active':''}`}
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
                    <a className="navbar-item link has-text-black mx-2" href="#home">
                        <span className="is-size-6">HOME</span>
                    </a>
                    <a className="navbar-item link has-text-black mx-2" href="#about">
                        <span className="is-size-6">ABOUT</span>
                    </a>
                    <a className="navbar-item link has-text-black mx-2" href="#projects">
                        <span className="is-size-6">PROJECTS</span>
                    </a>
                    <a className="navbar-item link has-text-black mx-2" href="#contact">
                        <span className="is-size-6">CONTACTS</span>
                    </a>
                    <div className="navbar-item">
                        <span className="mx-5 has-text-grey-light has-text-weight-bold is-clickable" onClick={()=>changeLang()}>
                            <span className={checked ? '' : 'has-text-black is-size-7'}>KO</span> | <span className={checked ? 'has-text-black is-size-7':''}>EN</span>
                        </span>   
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;


{/* <input id="switch" type="checkbox" name="switch" className="switch is-info" checked={checked} onChange={()=>changeLang()}/>
<label htmlFor="switch"/> */}