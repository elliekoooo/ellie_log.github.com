import React from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

const Layout:React.FC<{props:any}> = (data: any) => {
    const content = data.props;
    return (
        <div className="page">
            <div className="split-container grid grid-flow-row-dense grid-cols-5 grid-rows-5">
                <div className="split-side col-span-1 min-w-fit">
                    <SideBar props={content}></SideBar>
                </div>
                <div className="split-content col-span-4 pl-6 ml-6">
                    <Content markdown={content}></Content>
                </div>
            </div>
        </div>
    );
};


export default Layout;