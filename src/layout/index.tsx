import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

const Layout:React.FC<{props:any}> = (data: any) => {
    const content = data.props;
    return (
        <div className="page">
            <div className="split-container grid grid-flow-row-dense grid-cols-6 grid-rows-5">
                <div className="split-side col-span-1 bg-blue-100">
                    <SideBar></SideBar>
                </div>
                <div className="split-content col-span-5 pl-6 ml-6">
                    <Content markdown={content.rawMarkdownBody}></Content>
                </div>
            </div>
        </div>
    );
};


export default Layout;