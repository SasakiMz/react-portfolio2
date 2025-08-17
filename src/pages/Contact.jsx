import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/contact.css";
import "../css/style.css";
import email from "../img/flaticons/flaticons-contact/email.png";
import map from "../img/flaticons/flaticons-contact/map.png";
import phone_number from "../img/flaticons/flaticons-contact/phone-number.png";
import point_map from "../img/flaticons/flaticons-contact/point-map.png";

const Contact = () => {
return(  
    <main className="container">
       <div className="text-center">
            <div className="border-bottom border-3 border-primary mt-2">
                    <h1 className="title-font">Contact</h1>
                    <p className="mb-3 paragraph">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            </div>  
       </div>
       <section className="container shadow">
            <div className="row border my-5 p-3">
                <article className="col">
                    <div className="border-bottom border-3 border-primary mb-3 mt-2">
                    <h2>Formulaire de contact</h2>
                    </div> 
                    <form>
                        <div className="mb-3">
                            <input type="name" className="form-control exampleFormControlInput1" name="lname" placeholder="Votre nom"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control exampleFormControlInput1" name="mail" placeholder="Votre adresse email"/>
                        </div>
                        <div className="mb-3">
                            <input type="phone" className="form-control exampleFormControlInput1" name="phonenumber" placeholder="Votre numéro de téléphone"/>
                        </div>
                        <div className="mb-3">
                            <input type="topic" className="form-control exampleFormControlInput1" name="topic" placeholder="Sujet"/>
                        </div>
                        <div className="text-area-message mb-3">
                            <textarea className="form-control exampleFormControlTextarea1" name="message" placeholder="Votre message"></textarea>
                        </div>
                        <div className="contact-btn">
                            <button type="button" className="btn btn-primary">Envoyer</button>
                        </div>
                    </form>  
                </article>
                <article className="col"> 
                    <div className="mb-3">
                        <div className="border-bottom border-3 border-primary mb-3 mt-2">
                            <h2>Mes coordonnées</h2>
                        </div>   
                        <section>
                            <strong>John Doe</strong>
                            <div>
                                <p className="paragraph">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-map" viewBox="0 0 16 16">
                                        <path d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                                    </svg> 40 rue Laure Diebold
                                </p>
                                <p className="paragraph">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg> 69009 Lyon, France
                                </p>
                                <p className="paragraph">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    </svg> 10 20 30 40 50
                                </p>
                                <p className="paragraph">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                                    </svg> john.doe@gmail.com
                                </p>
                            </div>   
                        </section>
                        <div className="map-responsive mt-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13836.735308308975!2d2.317569!3d48.855324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6702a3f0e77cb%3A0x4ddca7233e8e259d!2s69%20Rue%20de%20Varenne%2C%2075007%20Paris!5e1!3m2!1sfr!2sfr!4v1754838922336!5m2!1sfr!2sfr" ></iframe>                        
                        </div>
                    </div>
                </article>
            </div>
       </section>
    </main>
    
    )
}

export default Contact;