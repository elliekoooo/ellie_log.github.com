import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

const Toc = (props: any) => {   
    console.log(props);
    return (
        <div>
            {props.headers.map((props:any) => {
                return(
                    <div>
                        <Link key={props.id} className="text-xs font-light" to={"#"+props.id}>
                            {props.header}
                        </Link>
                    </div>
                )
            })}         
        </div>
    )    
};

export default Toc;



