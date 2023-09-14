import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Content = (props:any) => {   
    const category = props.markdown.frontmatter?.category;
    return (
        /* dark:prose-invert */
        <div className="mx-6 py-6 my-6 prose">  
            <span className="mr-3 bg-purple-500 text-white px-2 py-1 text-sm rounded">{category}</span>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                components={{
                    code({node, inline, className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter
                          {...props}
                          children={String(children).replace(/\n$/, '')}
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                        />
                      ) : (
                        <code {...props} className={className}>
                          {children}
                        </code>
                      )
                    }
                  }}
                className="my-5" 
                children={props.markdown.rawMarkdownBody}></ReactMarkdown>
        </div>
    )
}




export default Content;

