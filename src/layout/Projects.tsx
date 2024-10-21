import { useTranslation } from "react-i18next";
import { ImageSlider } from "component/slider";
import { useEffect, useState } from "react";

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
                <p className="title is-uppercase has-text-weight-bold has-text-white mb-6">Toy Projects</p>
                <p className="subtitle has-text-white">Please </p>
                <ImageSlider srcs={Object.entries(projects)}/>
            </div>
        </div>
    )
};

export default Projects;