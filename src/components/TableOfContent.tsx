import React from "react";

const Toc = (toc: any) => {   
    let options = document.querySelectorAll('h3');
    options.forEach((o:Element)=>{
        observer.observe(o);
    });

    return (
            <div id="toc" className="lg:fixed lg:block hidden text-xs" dangerouslySetInnerHTML={{__html: toc?.props}}></div>
        );
    };
    
    
const observer = new IntersectionObserver((entries) => {
    entries.map((e) => {  
        e.target.classList.remove("text-slate-300");
   
        if(!e.isIntersecting){
            return;
        }
        
        if(e.intersectionRatio > 1){
            e.target.classList.add("text-slate-300");
        }

    }, { threshold: 1.0});

});



export default Toc;



