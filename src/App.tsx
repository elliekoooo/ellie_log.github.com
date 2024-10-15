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
import Home from 'layout/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export const page = [Home, About, Projects, Contact];

function App() {
  const sectionRefs = useRef<HTMLElement[]>([]);
  const lang = useSelector((state:any)=>state.langReducer);

  return (
    <div className='background-picture has-navbar-fixed-top'>
      <Header></Header>
      <div className="columns">
        <div className="column is-11">
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
        <div className='column my-3 is-1'>
          <div className='full-height center fixed'>
            <Navigator></Navigator>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;