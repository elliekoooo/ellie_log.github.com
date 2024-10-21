import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const About = (lang: any) => {
    const { t } = useTranslation(lang);
    const skills:string[] = ["Javascript", "Typescript", "Github", "Angular", "React", "Java", "HTML", "CSS", "Spring Boot"];

    return (
        <div id="about" className="hero is-fullheight-with-navbar">
            <div className="hero-body has-text-white-bis">
                <div className="container">
                    <p className="is-size-1 is-uppercase has-text-white-bis mb-6">About</p>
                    <p className="subtitle mx-5 is-uppercase has-text-white-bis">Profile Summary</p>
                    <div className="box has-text-grey is-size-5 my-6 px-6 py-6">
                        { t('about.dec') }
                    </div>
                    <p className="subtitle mx-5 is-uppercase has-text-white-bis">My Skills</p>
                    <div className="box">
                        <div className="tags"> 
                        {
                            skills.map((skill:string, index:number) => (
                                <span key={index} className="tag is-info is-light is-hoverable is-size-7">{ skill }</span>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;