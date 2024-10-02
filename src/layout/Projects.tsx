import { useTranslation } from "react-i18next";
import { ImageSlider } from "component/Slider";

const Projects:React.FC = (lang: any) => {
    const { t } = useTranslation(lang);

    const projects:object = t('projects',  {returnObjects: true});

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