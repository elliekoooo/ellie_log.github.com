import { useStaticQuery, graphql, Link } from "gatsby";
import React, { useState } from "react";
import Category from "./Category";
import Profile from "./Profile";

const SideBar = (selected:any) => {    
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {frontmatter: {date: ASC}}
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "YY-MM-DD")
                            slug
                            category
                        }
                        id
                        excerpt(format: MARKDOWN)
                    }
                }
            }
            category: allMarkdownRemark(limit: 2000) {
                group(field: { frontmatter: { category: SELECT } }) {
                    fieldValue
                    totalCount
                }
            }
        }`);

    const [category, setCategory] = useState("");    
    const selectCategory = (category: string) => {
        setCategory(category);
    };

    const categories = data.category.group;
    const list = data.allMarkdownRemark.edges
                        .filter((d:any) => d.node.frontmatter?.category == (category == "" ? selected?.props?.frontmatter.category: category));

    const isSelected = true;
    return (
        <div className="my-3">
            <div className="mx-5">
                <Profile></Profile>
                <div className="mx-3 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">CATEGORY</div>
                <Category categories={categories} selectCategory={selectCategory} ></Category>
                <div className="mx-3 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">POSTS</div>
                {list?.map(({ node }: any) => (
                    <div key={node.id} className={`${selected?.props?.id == node.id ? "text-purple-400 hover:text-rose-300 pl-2 mx-3 my-3 rounded" : "hover:text-rose-300 pl-2 mx-3 my-3"}`}> 
                        <Link to={node.frontmatter.slug}>
                            <span className="font-semibold text-xs px-2">{node.frontmatter.title}</span>
                            <span className="pl-1 italic text-xs text-gray-300">{node.frontmatter.category}</span>
                            <span className="pl-3 italic text-xs text-gray-300">{node.frontmatter.date}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )    
};

export default SideBar;


