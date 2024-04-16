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
    const [toggle, setToggle] = useState(false);
    const isToggle = (isToggle:boolean) => {
        setToggle(isToggle);
    };

    const categories = data.category.group;
    const list = data.allMarkdownRemark.edges
                        .filter((d:any) => d.node.frontmatter?.category == (category == "" ? selected?.props?.frontmatter.category: category));

    const isSelected = true;
    return (
        <div className="my-3 mx-2">
            <div className="hidden lg:block">
                <Profile></Profile>
                <div className="mx-3 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">CATEGORY</div>
                <Category categories={categories} selectCategory={selectCategory}></Category>
                <div className="mx-3 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">LIST</div>
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
            <div className="lg:hidden flex">
                <Category categories={categories} selectCategory={selectCategory} ></Category>

                {/* <div onClick={()=>isToggle(!toggle)}>
                    <div className="flex">
                        <svg className="w-5 h-5 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                        <div className="mx-3">Blog</div>
                    </div>
                    <div className={toggle ? "text-xs pt-2" : "hidden"}>
                        <div className="mt-3 text-xs font-semibold">CATEGORY</div>
                        <Category categories={categories} selectCategory={selectCategory} ></Category>
                        <div className="mt-3 text-xs font-semibold">LIST</div>
                        {list?.map(({ node }: any) => (
                            <div key={node.id} className="pt-2 mx-5"> 
                                <Link to={node.frontmatter.slug}>
                                    <div className="text-xs px-2">{node.frontmatter.title}</div>
                                </Link>
                            </div>
                        ))}
                    </div> 
                </div> */}

            </div>
        </div>
    )    
};


export default SideBar;


