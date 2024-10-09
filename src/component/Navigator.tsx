import { page } from "App";

export const Navigator = () => {

   const _page = page;

   return (
    <div className="fixed">
        {
            _page.map((p, index:number) => (
                <p key={index} className="circle my-3"></p>
            ))
        }
    </div>
   ) 
};