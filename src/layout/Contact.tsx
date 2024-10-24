import { useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = (lang: any) => {
    const form = useRef<HTMLFormElement>(null);

    const send = (e:any) => {
        e.preventDefault();

        console.log(form.current);

        if(form.current){                        
            emailjs.sendForm('service_4osi97k', 'template_zshm8hv', form.current, 'ftmlpBTiWpuaspQLy')
                .then((r) => {
                    console.log(r);
                }, (err) => {
                    console.log(err.text);
            });
        }

    };

    return (
        <div id="contact" className="hero">
            <div className="hero-body">
                <div className="container is-max-tablet">
                    <p className="mx-2 is-size-1 is-uppercase has-text-black mb-4">Contact</p>
                    <div className="columns">
                        <div className="column">
                            <p className="subtitle mx-5 is-uppercase has-text-black is-size-6 underline_purple">
                                Get In Touch!
                            </p>
                            <form className="form" ref={form} onSubmit={send}>
                                {/* <input name="to_name" className="input is-hidden" type="text" value={'Ellie'}/> */}
                                <div className="box">
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control">
                                            <input name="from_name" className="input" type="text" placeholder="ENTER YOUR NAME"></input>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input name="email" className="input" type="email" placeholder="ENTER YOUR EMAIL"></input>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Message</label>
                                        <div className="control">
                                            <textarea name="message" className="textarea" placeholder="ENTER YOUR MESSAGE"></textarea>
                                        </div>
                                    </div>
                                    <div className="field is-grouped is-grouped-right">
                                        <div className="control">
                                            <button type="submit" className="button is-light">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;