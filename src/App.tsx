import { useRef } from 'react';

import './locales/config';

import './App.css';
import 'bulma/css/bulma.min.css';
import 'bulma-switch/dist/css/bulma-switch.min.css';
import { ScrollSection } from 'component/ScrollSection';
import About from 'layout/About';
import Projects from 'layout/Projects';
import Contact from 'layout/Contact';
import Header from 'layout/Header';
import { Navigator } from 'component/Navigator';
import { useSelector } from 'react-redux';
import './locales/config';


function App() {
  const page = [About, Projects, Contact];
  const sectionRefs = useRef<HTMLElement[]>([]);
  const lang = useSelector((state:any)=>state.myReducer);

  return (
      <div className=''>
        <div className='header my-5'>
          <Header></Header>
        </div>
        <ScrollSection refs={sectionRefs}>
            {
                page.map((p,index) => (
                    <section
                        key={index} 
                        className={"section"} 
                        ref={(el:HTMLElement) => sectionRefs.current[index] = el}>
                          { p(lang) }
                    </section>
                ))
            }
        </ScrollSection>
      </div>
  );
}

export default App;


