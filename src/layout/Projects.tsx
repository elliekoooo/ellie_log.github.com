import { useTranslation } from "react-i18next";
import { project1 } from "../assets/images/";
import { ImageSlider } from "component/Slider";

const Projects:React.FC = (lang: any) => {
    const { t } = useTranslation(lang);

    const projects = t('projects',  {returnObjects: true});

    return (
        <div className="hero">
            <div className="hero-body">
                <p className="title is-uppercase">Projects</p>
                <p className="subtitle"></p>
            </div>
            <div className="columns">    
                <ImageSlider num={5} srcs={Object.entries(projects)}/>
            </div>
        </div>
    )
};

export default Projects;