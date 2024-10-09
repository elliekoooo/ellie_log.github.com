import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from '../store/store';

const Header:any = () => {
    const [checked,setChecked] = useState(false);
    const dispatch = useDispatch();

    const changeLang = () => {
        setChecked(!checked);
        dispatch(change(!checked));
    };

    return (
        <div className="columns is-vcentered">
            <div className="column">
                <div className="field"> 
                    <input 
                        id="switch" 
                        type="checkbox"
                        name="switch" 
                        className="switch is-rounded is-outlined" 
                        checked={checked}
                        onChange={()=>changeLang()}
                    />
                    <label htmlFor="switch"></label>
                </div>
            </div>
        </div>
    )
}

export default Header;