import { useTranslation } from "react-i18next";

const About = (lang: any) => {
    const { t } = useTranslation(lang);
    const skills:string[] = ["Javascript", "Typescript", "Github", "Angular", "React", "Java", "HTML", "CSS", "Spring Boot"];

    return (
        <div className="hero">
            <div className="hero-body has-text-white-bis">
                <p className="title is-uppercase has-text-weight-bold has-text-white-bis mb-6">About</p>
                <div className="columns">
                    <div className="column mx-5">
                        <p className="subtitle mx-5 is-uppercase has-text-white-bis">Profile Summary</p>
                        <div className="box test">
                            { t('about.dec') }
                        </div>
                    </div>
                    <div className="column mx-5">
                        <p className="subtitle mx-5 is-uppercase has-text-white-bis">My Skills</p>
                        <div className="box">
                            <div className="tags are-info"> 
                            {
                                skills.map((skill:string, index:number) => (
                                    <span key={index} className="tag">{ skill }</span>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;