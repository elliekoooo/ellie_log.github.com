import React from "react";
import ReactMarkdown from 'react-markdown'

const Content = (props:any) => {   
    const category = props.markdown.frontmatter?.category;
    return (
        /* dark:prose-invert */
        <div className="mx-6 py-6 my-6 prose">  
            <span className="mr-3 bg-purple-500 text-white px-2 py-1 text-sm rounded cursor-pointer">{category}</span>
            <ReactMarkdown className="my-5" children={props.markdown.rawMarkdownBody}></ReactMarkdown>
        </div>
    )
}




export default Content;

