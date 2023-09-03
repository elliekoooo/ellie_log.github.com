import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import TagBox from "./TagBox";

const SideBar = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY")
                            slug
                            tag
                        }
                    id
                    excerpt(format: MARKDOWN)
                }
            }
        }
    }`);

    return (
        <div className="mx-6 my-6 py-3">
                {data.allMarkdownRemark.edges.map(({ node }: any) => (
                    <div key={node.id}>
                        <div>
                            <TagBox tag={node.frontmatter.tag}></TagBox>
                        </div>
                        <div className="my-3">
                            <div className="font-light text-sm my-1"><Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link></div>
                        </div>
                    </div>    
                ))}
        </div>
    )
};

export default SideBar;
