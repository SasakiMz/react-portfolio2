import React from "react";
import seo from '../img/portfolio/seo.jpg'
import fresh_food from '../img/portfolio/fresh-food.jpg'
import restaurant_japonais from '../img/portfolio/restaurant-japonais.jpg'
import screens from '../img/portfolio/screens.jpg'
import bien_etre from '../img/portfolio/espace-bien-etre.jpg'
import coder from '../img/portfolio/coder.jpg'

const Portfolio = () => {
return(
    <div className="realizations-portfolio">
        <div className="title-portfolio">
                <h1>Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations.</p>
        </div>
        <div className="realizations">
            <div className="my-realisations">
                <img src="" alt="" />
                <span className="img-portfolio">
                    <img src={fresh_food} alt="" />                    
                </span>
                <span className="name-realizations"> 
                    <strong>Fresh Food</strong>
                    <p>Site de vente de produits frais en ligne</p>
                </span>
            </div>
            <div className="my-realisations">
                <span className="img-portfolio">     
                    <img src={restaurant_japonais} alt="" />              
                </span>
                <span className="name-realizations">
                    <strong>Restaurant Akira</strong>
                    <p>Site de vente de produits frais en ligne</p>
                </span>
            </div>
            <div className="my-realisations">
                <span className="img-portfolio">                   
                    <img src={bien_etre} alt="" />
                </span>
                <span className="name-realizations">
                    <strong>Espace bien-être</strong>
                    <p>Site de vente de produits frais en ligne</p>
                </span>
            </div>
            <div className="my-realisations">
                <span className="img-portfolio">               
                    <img src={seo} alt="" />   
                </span>
                <span className="name-realizations">
                    <strong>SEO</strong>
                    <p>Amélioration du référencement d'un site e-commerce</p>
                </span>
            </div>
            <div className="my-realisations">
                <span className="img-portfolio">               
                    <img src={coder} alt="" />     
                </span>
                <span className="name-realizations">
                    <strong>Création d'une API</strong>
                    <p>Création d'une API RESTFULL publique</p>
                </span>
            </div>
            <div className="my-realisations">
                <span className="img-portfolio">             
                    <img src={screens} alt="" />       
                </span>
                <span className="name-realizations">
                    <strong>Maquette d'un site web</strong>
                    <p>Création du prototype d'un site</p>
                </span>
            </div>
        </div>
        
    </div>
)
}
export default Portfolio;