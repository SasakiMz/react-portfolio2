import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
return(
<div className="container text-center ">
    <h1>Mon offre de Services</h1>
    <div>Voici les prestations sur lesqueles je peux intervenir</div>
    
    <div className="row">
        <div className="col">
            <div class="card">
                <img src="" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">UX Design</h5>
                    <p class="card-text">
                        l'UX Design est une discipline qui consiste à concevoir des produits(sites web, appli mobiles,logiciels,objects connectés, etc) en plaçant
                        l'utilisateur au centre des préoccupations. l'Objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                    </p>
                </div>
            </div>        
        </div>
        <div className="col">
            <div class="card">
                <img src="" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Développement web</h5>
                    <p class="card-text">
                        Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc...) et des frameworks (bootstrap, React, Angular,etc...)            
                    </p>
                </div>
            </div>            
        </div>
        <div className="col">
            <div class="card">
                <img src="" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Référencement</h5>
                    <p class="card-text">
                        le référencement naturel(SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs
                        de recherche (Google,Bing, Yahoo etc...).L'Objectif est d'attirer un maximum de visiteurs qualifiés sur le site.            
                    </p>
                </div>
            </div>            
        </div>
    </div>
</div>
)
}
export default Services;