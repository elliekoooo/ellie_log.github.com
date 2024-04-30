import React from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Header from "../components/Header";

const Layout:React.FC<{props:any, location:any}> = (data: any) => {
    const content = data.props;

    //client인지 확인
    if(typeof window == "undefined")
        return;

    return (
        <div className="container">
            <Header></Header>
            <div className="grid lg:grid-cols-12 sm:grid-cols-4 gap-4">
                <div className="lg:col-span-4 sm:col-span-9">
                    <SideBar props={content}></SideBar>
                </div>
                <div className="lg:col-span-8 sm:col-span-9 overflow-y-12">
                    <Content location={location} markdown={content}></Content>
                </div>
            </div>
        </div>
    );
};


export default Layout;