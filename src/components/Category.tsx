import React from "react";

type category = {
    fieldValue: string
    totalCount: number
}


const Category:React.FC<{categories:category[], selectCategory:any}> = ({categories, selectCategory}) => {
    const onclick = (category:string) => {
        selectCategory(category);
    };

    return (
        <div className="max-w-xs">
            <div className="mx-3 px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">CATEGORY</div>
            <div className="split-side max-h-32 p-4 justify-start items-start py-2 cursor-pointer">
                {categories.map((c:category) => (
                    <div key={c?.fieldValue} 
                          onClick={() => onclick(c.fieldValue)}
                          className="text-sm px-3 pb-1">
                            {c.fieldValue}
                            <span className="text-gray-300 text-xs mx-1">({c.totalCount})</span>
                    </div>
                ))}   
            </div>  
        </div> 
    )
};


export default Category;