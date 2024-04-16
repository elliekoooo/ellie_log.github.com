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
            <div className="hidden lg:block mx-5 overflow-auto">
                <div className="flex flex-wrap my-2 cursor-pointer mx-2">
                    {categories.map((c:category) => (
                        <div key={c?.fieldValue} 
                            onClick={() => onclick(c.fieldValue)} 
                            className="px-2 py-1 my-1 mx-1 text-xs bg-gray-200 rounded-full shadow-sm">
                                {/* 공백 있을시 개행되서 정규식으로 대체해줌  */}
                                { c?.fieldValue.replaceAll(" ", "\u00a0") }
                                <span className="text-gray-300 text-xs">({c.totalCount})</span>
                        </div>
                    ))}   
                </div>  
            </div> 
    )
};


export default Category;