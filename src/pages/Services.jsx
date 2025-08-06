import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
return(
<div>
    <h1>Mon offre de Services</h1>
    <div>Voici les prestations sur lesqueles je peux intervenir</div>
    <div class="card-Services">
     <img src="" class="card-img-top" alt=""/>
        <div class="card-body-Services">
            <h5 class="card-title-Services">UX Design</h5>
            <p class="card-text-Services">
                l'UX Design est une discipline qui consiste à concevoir des produits(sites web, appli mobiles,logiciels,objects connectés, etc) en plaçant
                l'utilisateur au centre des préoccupations. l'Objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
            </p>
        </div>
    </div>
    <div class="card-Services">
     <img src="" class="card-img-top" alt=""/>
        <div class="card-body-Services">
            <h5 class="card-title-Services">Développement web</h5>
            <p class="card-text-Services">
Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc...) et des frameworks (bootstrap, React, Angular,etc...)            </p>
        </div>
    </div>
    <div class="card-Services">
     <img src="" class="card-img-top" alt=""/>
        <div class="card-body-Services">
            <h5 class="card-title-Services">Référencement</h5>
            <p class="card-text-Services">
le référencement naturel(SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs
de recherche (Google,Bing, Yahoo etc...).L'Objectif est d'attirer un maximum de visiteurs qualifiés sur le site.            </p>
        </div>
    </div>
</div>
)
}
export default Services;