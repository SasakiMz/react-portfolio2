import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
return(
    <div className="container">
       <div className="text-center">
            <h1>Contact</h1>
            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
       </div>
       <div className="container">
            <div className="row border">
                <div className="col">
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
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Votre message" rows="3"></textarea>
                    </div>
                    <input type="submit" />
                </div>
                <div class="col">
                    <div class="mb-3">
                        <h2>Mes coordonnées</h2>
                        <div>
                            <h4>John Doe</h4>
                            <p>40 rue Laure Diebold</p>
                            <p>69009 Lyon, France</p>
                            <p>10 20 30 40 50</p>
                            <p>john.doe@gmail.com</p>
                        </div>
                        <div className="adress">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1513433752225!2d2.3149887127561843!3d48.855324371212184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6702a3f0e77cb%3A0x4ddca7233e8e259d!2s69%20Rue%20de%20Varenne%2C%2075007%20Paris!5e0!3m2!1sfr!2sfr!4v1753911775389!5m2!1sfr!2sfr"></iframe>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
    
    )
}

export default Contact;