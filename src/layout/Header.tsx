import { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from '../store/store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome, faLaptop, faUser } from "@fortawesome/free-solid-svg-icons";

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
        <nav className="navbar is-danger is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="" href=""></a>    
                <a role="button" 
                    onClick={toggleNavBar} 
                    className={`navbar-burger js-burger ${active ? 'is-active':''}`}
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
                <div className="navbar-start">
                    <a className="navbar-item is-size-7">
                        <FontAwesomeIcon className="icon" icon={faHome}></FontAwesomeIcon>
                        <span className="mx-2 has-text-weight-bold">HOME</span>
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item is-size-7">
                        <FontAwesomeIcon className="icon" icon={faUser}></FontAwesomeIcon>
                        <span className="mx-2 has-text-weight-bold">ABOUT</span>
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item is-size-7">
                        <FontAwesomeIcon className="icon" icon={faLaptop}></FontAwesomeIcon>
                        <span className="mx-2 has-text-weight-bold">PROJECTS</span>
                    </a>
                </div>
                <div className="navbar-end mt-5">
                    <div className="navbar-item">
                        <div className="field is-grouped">
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