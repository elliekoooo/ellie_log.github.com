import { useStaticQuery, graphql, Link } from "gatsby";
import React, { useState } from "react";

const SideBar = ({id, getId}: any) => {
    let setId = (id: any) => {
        return getId(id);
    };
    
     const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY")
                            slug
                        }
                    id
                    excerpt(format: MARKDOWN)
                    rawMarkdownBody
                }
            }
        }
    }`);

    return (
        <div className="mx-6 my-6 py-3">
            { data.allMarkdownRemark.edges.map(({ node }:any) => (
                <div className="my-3" key={node.id} onClick={() => setId(node)}>
                    <div className="font-light text-sm my-1">{node.frontmatter.title}</div>
                    <div className="font-thin text-xs">{node.frontmatter.date}</div>
                </div>
            ))}
        </div>
    )
};

export default SideBar;
