import React from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

const Layout:React.FC<{props:any}> = (data: any) => {
    const content = data.props;
    return (
        <div className="grid lg:grid-cols-7 sm:grid-cols-3 gap-4 overflow-hidden">
            <div className="lg:col-span-2 sm:col-span-1 min-w-auto overflow-y-auto">
                <SideBar props={content}></SideBar>
            </div>
            <div className="lg:col-span-5 sm:col-span-2 overflow-y-auto">
                <Content markdown={content}></Content>
            </div>
        </div>
    );
};


export default Layout;