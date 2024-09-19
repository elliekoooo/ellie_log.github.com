import { ScrollSection } from "component/ScrollSection";
import { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";


const Content = () => {
    const menu = [Header, Footer];
    const sectionRefs = useRef<HTMLElement[]>([]);

    return (
        <div>
            <ScrollSection refs={sectionRefs}>
                {
                    menu.map((menu,index) => (
                        <section
                            key={index} 
                            className={"section bg"+(index+1)} 
                            ref={(el:HTMLElement) => sectionRefs.current[index] = el}>
                             { menu() }
                        </section>
                    ))
                }
            </ScrollSection>
        </div>
    )

}


             // menuName.map((item,index)=> (
                //     <section id={item} key={index} 
                //              ref={(el:HTMLElement) => sectionRefs.current[index] = el}
                //              className={'section bg'+(index+1)}>
                //         <p></p>
                //     </section>
                // ))


export default Content;
