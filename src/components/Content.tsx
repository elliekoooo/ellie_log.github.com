import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from 'react-markdown'

const Content:React.FC<{props:any}> = (data:any) => {
    const props = data.props;

    return (
        /* dark:prose-invert */
        <div className="mx-6 py-6 my-6 prose">  
            <ReactMarkdown>{props?.rawMarkdownBody}</ReactMarkdown>
        </div>
    )
}

export default Content;

