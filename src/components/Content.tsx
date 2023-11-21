import React, { useRef } from "react";
import Toc from "./TableOfContent";

const Content = (props:any) => {   
    const category = props.markdown.frontmatter?.category;
    const headingElemetns = useRef<any>({});

    return (
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8 mx-6 py-6 my-6 prose">  
              <span className="mr-3 bg-purple-500 text-white px-2 py-1 text-sm rounded">{category}</span>
              <div dangerouslySetInnerHTML={{__html: props.markdown.html}}></div>    
          </div>
          <div className="lg:col-span-4 min-w-auto overflow-y-auto mx-6 py-6 my-6">
            <Toc props={props.markdown.tableOfContents} currId={headingElemetns.current.id}></Toc>
          </div>
      </div>

    )
}

export default Content;
