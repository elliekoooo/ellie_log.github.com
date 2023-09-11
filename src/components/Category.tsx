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