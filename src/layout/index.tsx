import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

const Layout:React.FC = () => {
    const [id, setId] = useState("");
    const getId = (id:string) => {
        setId(id);
    };
    return (
        <div className="page">
            <div className="split-container grid grid-flow-row-dense grid-cols-6 grid-rows-5">
                <div className="split-side col-span-1 bg-blue-100">
                    <SideBar props={id} getId={getId}></SideBar>
                </div>
                <div className="split-content col-span-5">
                    <Content props={id}></Content>
                </div>
            </div>
        </div>
    );

};

export default Layout;