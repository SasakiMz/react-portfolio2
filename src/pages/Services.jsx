import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import banner from "../img/banner.jpg";
import wen from "../img/flaticons/wen.png";
import tag from "../img/flaticons/tag.png";
import pencil from "../img/flaticons/pencil.png";

const Services = () => {
return(
<main>
    <picture><img src={banner} className="img-fluid"  alt="" /></picture>
    <div className="container text-center py-sm-5 ">
        <div className="headerservices mt-2">
            <h1 className="title-font">Mon offre de Services</h1>
            <p className="paragraph">Voici les prestations sur lesquelles je peux intervenir</p>
            <div className=" container text-center border-bottom border-4 border-primary mt-3 mb-5"></div>
        </div>
        <div className="row py-sm-5">
            <div className="col-sm-12 col-md-4 col-xl-4 my-2">
                <div className="card card_services">
                    <div className="justify-content-center my-3">
                        <img src={pencil} className="card-img-top icons_services" alt=""/>
                    </div>
                    <div className="card-body ">
                        <h5 className="card-title title-font">UX Design</h5>
                        <p className="card-text paragraph">
                            l'UX Design est une discipline qui consiste à concevoir des produits en plaçant
                            l'utilisateur au centre des préoccupations. l'Objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                        </p>
                    </div>
                </div>        
            </div>
            <div className="col-sm-12 col-md-4 col-xl-4 my-2 ">
                <div className="card card_services">
                    <div className="justify-content-center my-3">
                        <img src={tag} className="card-img-top icons_services" alt=""/>
                    </div>
                    <div className="card-body ">
                        <h5 className="card-title title-font">Développement web</h5>
                        <p className="card-text paragraph pb-3 pb-md-4">
                            Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation et des frameworks
                        </p>
                    </div>
                </div>            
            </div>
            <div className="col-sm-12 col-md-4 col-xl-4 my-2">
                <div className="card card_services">
                    <div className="justify-content-center my-3">
                        <img src={wen} className="card-img-top icons_services" alt=""/>
                    </div>
                    <div className="card-body ">
                        <h5 className="card-title title-font">Référencement</h5>
                        <p className="card-text paragraph">
                            le référencement naturel est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs
                            de recherche.L'Objectif est d'attirer un maximum de visiteurs qualifiés sur le site.            
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