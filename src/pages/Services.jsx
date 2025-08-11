import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/services.css";
import "../css/style.css";
import banner from "../img/banner.jpg";
import wen from "../img/flaticons/wen.png";
import tag from "../img/flaticons/tag.png";
import pencil from "../img/flaticons/pencil.png";

const Services = () => {
return(
<main>
    <picture><img src={banner} class="img-fluid"  alt="" /></picture>
    <div className="container text-center py-sm-5 ">
        <div className="headerservices">
            <h1>Mon offre de Services</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <div class=" container text-center border-bottom border-4 border-primary mt-3 mb-5"></div>
        </div>
        <div className="row py-sm-5">
            <div className="col-sm-12 col-md-4 col-xl-4">
                <div class="card">
                    <img src={pencil} class="card-img-top" alt=""/>
                    <div class="card-body card-services">
                        <h5 class="card-title">UX Design</h5>
                        <p class="card-text">
                            l'UX Design est une discipline qui consiste à concevoir des produits(sites web, appli mobiles,logiciels,objects connectés, etc) en plaçant
                            l'utilisateur au centre des préoccupations. l'Objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                        </p>
                    </div>
                </div>        
            </div>
            <div className="col-sm-12 col-md-4 col-xl-4 py-sm-3">
                <div class="card">
                    <img src={tag} class="card-img-top" alt=""/>
                    <div class="card-body card-services">
                        <h5 class="card-title">Développement web</h5>
                        <p class="card-text">
                            Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc...) et des frameworks (bootstrap, React, Angular,etc...)            
                        </p>
                    </div>
                </div>            
            </div>
            <div className="col-sm-12 col-md-4 col-xl-4">
                <div class="card">
                    <img src={wen} class="card-img-top" alt=""/>
                    <div class="card-body card-services">
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
</main>
)
}
export default Services;