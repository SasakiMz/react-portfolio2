import React from "react";
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
            <div class="border-bottom border-3 border-primary">
                    <h1>Contact</h1>
                    <p className="mb-3">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            </div>  
       </div>
       <div className="container shadow">
            <div className="row border my-5 p-3">
                <div className="col">
                    <div class="border-bottom border-3 border-primary mb-3">
                    <h2>Formulaire de contact</h2>
                    </div>  
                    <div class="mb-3">
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Votre nom"/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Votre adresse email"/>
                    </div>
                    <div class="mb-3">
                        <input type="phonenumber" class="form-control" id="exampleFormControlInput1" placeholder="Votre numéro de téléphone"/>
                    </div>
                    <div class="mb-3">
                        <input type="topic" class="form-control" id="exampleFormControlInput1" placeholder="Sujet"/>
                    </div>
                    <div class="text-area-message mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Votre message"></textarea>
                    </div>
                    <div className="contact-btn">
                        <button type="button" class="btn btn-primary">Envoyer</button>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <div class="border-bottom border-3 border-primary mb-3">
                            <h2>Mes coordonnées</h2>
                        </div>   
                        <section>
                            <h4>John Doe</h4>
                            <div>
                                <p className=""><img src={map} alt="" /> 40 rue Laure Diebold</p>
                                <p className=""><img src={point_map} alt="" /> 69009 Lyon, France</p>
                                <p className=""><img src={phone_number} alt="" /> 10 20 30 40 50</p>
                                <p className=""><img src={email} alt="" /> john.doe@gmail.com</p>
                            </div>
                            
                        </section>
                        <div className="map-responsive mt-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13836.735308308975!2d2.317569!3d48.855324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6702a3f0e77cb%3A0x4ddca7233e8e259d!2s69%20Rue%20de%20Varenne%2C%2075007%20Paris!5e1!3m2!1sfr!2sfr!4v1754838922336!5m2!1sfr!2sfr" 
                            width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </main>
    
    )
}

export default Contact;