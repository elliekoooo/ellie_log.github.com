import React from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Header from "../components/Header";
import Navigation from "../components/PageNavigation";

const Layout:React.FC<{props:any}> = (data: any) => {
    const content = data.props;
    return (
        <div className="container">
            <Header></Header>
            <div className="grid lg:grid-cols-9 sm:grid-cols-4 gap-4 overflow-hidden">
                <div className="lg:col-span-3 sm:col-span-1 min-w-auto overflow-y-auto">
                    <SideBar props={content}></SideBar>
                </div>
                <div className="lg:col-span-6 sm:col-span-3 overflow-y-auto">
                    <Content markdown={content}></Content>
                </div>
                {/* <div className="lg:col-span-1 sm:col-span-1 min-w-auto overflow-y-auto"> */}
                    {/* <Navigation rawMarkdownBody={content.rawMarkdownBody}></Navigation> */}
                {/* </div> */}
            </div>
        </div>
    );
};


export default Layout;