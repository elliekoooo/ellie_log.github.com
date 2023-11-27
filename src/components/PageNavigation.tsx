// import { Link } from "gatsby";
// import React from "react";

// interface page {
//     id?: string
//     frontmatter?: { category: string }
//     rawMarkdownBody: string
// }

// const Navigation:React.FC<page> = ({rawMarkdownBody}) => {
//     return (
//         <div className="grid fixed my-5 mx-5">
//             {getTitles(rawMarkdownBody).map((title:string, index:number) => (
//                 <Link className="m-1" key={index} to={"#"+index}>{
//                    <div className={renderSwitch(title)}>
//                         { (index)+ ". " + title.replaceAll("#", "") }
//                     </div>
//                 }</Link>
//             ))         
//             }
//         </div>
//     )
// };

// const getTitles = (markdown: string): string[] => {
//     return markdown.split('\n').filter((l:string) => l.indexOf("#") > -1);
// }

// const renderSwitch = (title: string) => {
//      switch(title.lastIndexOf("#")){
//         case 0: 
//             return "hover:font-semibold hover:text-violet-600 cursor-pointer";
//         case 1:
//             return "hover:font-semibold hover:text-violet-600 cursor-pointer ml-2 text-sm";
//         case 2:
//             return "hover:font-semibold hover:text-violet-600 cursor-pointer ml-3 text-xs";       
//     };
// }

// export default Navigation;