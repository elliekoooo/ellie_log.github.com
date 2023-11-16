import React, {  } from "react";

const Toc = (toc: any) => {   
    return (
        <div dangerouslySetInnerHTML={{__html: toc?.props}}></div>
    );
};

export default Toc;



