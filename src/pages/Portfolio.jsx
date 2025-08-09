import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import seo from '../img/portfolio/seo.jpg';
import fresh_food from '../img/portfolio/fresh-food.jpg';
import restaurant_japonais from '../img/portfolio/restaurant-japonais.jpg';
import screens from '../img/portfolio/screens.jpg';
import bien_etre from '../img/portfolio/espace-bien-etre.jpg';
import coder from '../img/portfolio/coder.jpg'

const Portfolio = () => {
return(
    <div className="container">
        <img src="" alt="" />
        <div className="container text-center">
            <h1>Portfolio</h1>
            <p>Voici quelques-unes de mes réalisations.</p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <div class="card">
                        <img src={fresh_food} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Fresh Food</h5>
                            <p class="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            <div className="footercard">
                                <p>Site réalisé avec PHP et MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                            <img src={restaurant_japonais} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Restaurant Akira</h5>
                            <p class="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            <div className="footercard">
                                <p>Site réalisé avec WordPress</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card">
                        <img src={bien_etre} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Espace bien-être</h5>
                            <p class="card-text">Site de vente de produits frais en ligne</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            <div className="footercard">
                                <p>Site réalisé avec LARAVEL</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src={seo} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">SEO</h5>
                            <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            <div className="footercard">
                                <p>Utilisation des outils SEO</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="col">
                    <div class="card">
                        <img src={coder} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Création d'une API</h5>
                            <p class="card-text">Création d'une API RESTFULL publique</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                            <div className="footercard">
                                <p>PHP - SYMFONY</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src={screens} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Maquette d'un site web</h5>
                            <p class="card-text">Création du prototype d'un site</p>
                            <a href="#" class="btn btn-primary">Voir le site</a>
                        </div>
                        <div className="footercard">
                            <p>Réalisé avec FIGMA</p>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
)
}
export default Portfolio;