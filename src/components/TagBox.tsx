import React from "react";

const TagBox:React.FC<{tag:[]}> = (tags) => {
    console.log(tags);    
    return (
        <div className="mx-5 my-6 pt-6 text-gray-700 rounded">
        </div>
    )
};


export default TagBox;