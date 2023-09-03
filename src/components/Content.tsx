import { PageProps, graphql } from "gatsby";
import React from "react";
import ReactMarkdown from 'react-markdown'

const Content = (props:any) => {
    return (
        /* dark:prose-invert */
        <div className="mx-6 py-6 my-6 prose">  
            <ReactMarkdown children={props.markdown}></ReactMarkdown>
        </div>
    )
}




export default Content;

