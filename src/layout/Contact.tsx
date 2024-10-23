import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = (lang: any) => {
    return (
        <div id="contact" className="hero">
            <div className="hero-body">
                <p className="mx-2 is-size-1 is-uppercase has-text-black mb-4">Contact</p>
                <div className="columns">
                    <div className="column">
                        <p className="subtitle mx-5 is-uppercase has-text-black is-size-6 underline_purple">
                            Get In Touch!
                        </p>
                        <div className="box">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="ENTER YOUR NAME"></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="ENTER YOUR EMAIL"></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="ENTER YOUR MESSAGE"></textarea>
                                </div>
                            </div>
                            <div className="field is-grouped is-grouped-right">
                                <div className="control">
                                    <button className="button is-light">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;