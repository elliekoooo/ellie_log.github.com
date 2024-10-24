import { useTranslation } from "react-i18next";
import { ImageSlider } from "component/slider";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faDolly, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";

const Projects:React.FC = (lang: any) => {
    const { t } = useTranslation(lang);
    const [projects, setProjects] = useState([] as any);

    //TODO
    //PROJECTS 탭으로 만들기

    const fetchData = async() => {
        const res = await Promise.resolve(t('projects',  {returnObjects: true}));

        //FIXME
        if(typeof res == "string")
            return;
        else 
            setProjects(Object.entries(res));
    }

    useEffect(() => {
        fetchData();
    }, [t]);

    return (
        <div id="projects" className="hero">
            <div className="hero-body">
                <div className="container is-max-tablet">
                    <p className="mx-2 is-size-1 is-uppercase has-text-black mb-4">Projects</p>
                    <p className="subtitle mx-5 is-uppercase has-text-black is-size-6 underline_purple">
                        My personal projects ({ projects?.length })
                    </p>
                    <ImageSlider srcs={projects}/>
                </div>
            </div>
        </div>
    )
};

export default Projects;