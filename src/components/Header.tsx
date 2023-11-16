import { Link } from "gatsby";
import React from "react";

const Header = () => {
    return (
        <div className="m-2 lg:flex hidden fixed">
            <span className="text-xs ms-9 hover:bg-purple-200 cursor-pointer">
            <Link to="https://github.com/elliekoooo/">about</Link>
            </span>
            <span className="text-xs ms-5 hover:bg-purple-200 cursor-pointer">
                <Link to="https://github.com/elliekoooo">github</Link>
            </span>
        </div>
    )

};

export default Header;