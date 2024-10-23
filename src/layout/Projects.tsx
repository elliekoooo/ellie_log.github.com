import { useTranslation } from "react-i18next";
import { ImageSlider } from "component/slider";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faDolly, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";

const Projects:React.FC = (lang: any) => {
    const { t } = useTranslation(lang);
    const [projects, setProjects] = useState({});

    const fetchData = async() => {
        const res = await Promise.resolve(t('projects',  {returnObjects: true}));

        //FIXME
        if(typeof res == "string")
            return;
        else 
            setProjects(res);
    }

    useEffect(() => {
        fetchData();
    }, [t]);

    return (
        <div id="projects" className="hero">
            <div className="hero-body">
                <p className="mx-2 is-size-1 is-uppercase has-text-black mb-4">Projects</p>
                <p className="subtitle mx-5 is-uppercase has-text-black is-size-6 underline_purple">
                    My personal projects
                </p>
                <ImageSlider srcs={Object.entries(projects)}/>
            </div>
        </div>
    )
};

export default Projects;