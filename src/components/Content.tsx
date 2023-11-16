import React, { useRef, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Toc from "./TableOfContent";

const Content = (props:any) => {   
    const category = props.markdown.frontmatter?.category;
    const headingElemetns = useRef<any>({});
    const headers:any[] = [];

    return (
      <div className="grid grid-cols-12">
        <div className="col-span-8 mx-6 py-6 my-6 prose">  
              <span className="mr-3 bg-purple-500 text-white px-2 py-1 text-sm rounded">{category}</span>
              <ReactMarkdown 
                  remarkPlugins={[remarkGfm]} 
                  components={{
                    h3(props){
                      headers.push({
                        id: props.node.position?.start.line,
                        header: props.children[0]
                      });
                      //id는 line값
                       return <h3 id={""+props.node.position?.start.line} ref={headingElemetns}>{props.children[0]}</h3>
                    },
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
          <div className="col-span-4 mx-6 py-6 my-6">
            <Toc headers={headers} currId={headingElemetns.current.id}></Toc>
          </div>
      </div>

    )
}

export default Content;
