import { useTranslation } from "react-i18next";
import { ImageSlider } from "component/Slider";
import { useEffect, useState } from "react";

const Projects:React.FC = (lang: any) => {
    const { t } = useTranslation(lang);
    const [projects, setProjects] = useState({});

    const fetchData = async() => {
        const res = await Promise.resolve(t('projects',  {returnObjects: true}));

        if(typeof res == "string")
            return;
        else 
            setProjects(res);
    }

    useEffect(() => {
        fetchData();
    }, [t]);

    return (
        <div className="hero">
            <div className="hero-body">
                <p className="title is-uppercase has-text-weight-bold mb-6">Projects</p>
                <p className="subtitle"></p>
                <ImageSlider size={3} srcs={Object.entries(projects)}/>
            </div>
        </div>
    )
};

export default Projects;