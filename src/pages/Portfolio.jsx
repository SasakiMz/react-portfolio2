import "../css/style.css";
import "../css/portfolio.css";

import seo from '../img/portfolio/seo.jpg';
import fresh_food from '../img/portfolio/fresh-food.jpg';
import restaurant_japonais from '../img/portfolio/restaurant-japonais.jpg';
import screens from '../img/portfolio/screens.jpg';
import bien_etre from '../img/portfolio/espace-bien-etre.jpg';
import coder from '../img/portfolio/coder.jpg'
import banner from "../img/banner.jpg";


const Portfolio = () => {
return(
    <main>
        <picture><img src={banner} className="img-fluid" alt="bannière"/></picture>
        <section className="container text-center mt-3">
            <h1 className="title-font">Portfolio</h1>
            <p className="paragraph">Voici quelques-unes de mes réalisations.</p>
            <div className="container text-center border-bottom border-4 border-primary mt-3 mb-5"></div>
        </section>
        <section className="container">
            <div className="row">
                <article className="col my-3">
                    <div className="card card-portfolio mt-3 mb-2">
                        <img src={fresh_food} className="card-img-top" alt="image de légumes frais"/>
                        <div className="card-body">
                            <strong className="card-title text-center">Fresh Food</strong>
                            <p className="card-text text-center paragraph">Site de vente de produits frais en ligne</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" className="btn btn-primary">Voir le site</a>   
                            </div>                        
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1 paragraph">Site réalisé avec PHP et MySQL</div>
                        </div>
                    </div>
                    <div className="card card-portfolio mt-3 mb-2">
                        <img src={seo} className="card-img-top" alt="image d'optimisation SEO"/>
                        <div className="card-body">
                            <strong className="card-title text-center">SEO</strong>
                            <p className="card-text text-center paragraph">Amélioration du référencement d'un site e-commerce</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" className="btn btn-primary">Voir le site</a>   
                            </div> 
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                             <div className="my-1 paragraph">Utilisation des outils SEO</div>
                        </div>
                    </div>
                </article>
                <article className="col my-3">
                    <div className="card card-portfolio mt-3 mb-2">
                            <img src={restaurant_japonais} className="card-img-top" alt="image de sushi"/>
                        <div className="card-body">
                            <strong className="card-title text-center">Restaurant Akira</strong>
                            <p className="card-text text-center paragraph">Site de vente de produits frais en ligne</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" className="btn btn-primary">Voir le site</a>   
                            </div>
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1 paragraph">Site réalisé avec WordPress</div>
                        </div>
                    </div>
                    <div className="card card-portfolio mt-3 mb-2">
                        <img src={coder} className="card-img-top" alt="image de code"/>
                        <div className="card-body">
                            <strong className="card-title text-center">Création d'une API</strong>
                            <p className="card-text text-center">Création d'une API RESTFULL publique</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" className="btn btn-primary">Voir le site</a>   
                            </div>
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1">PHP - SYMFONY</div>
                        </div>
                    </div>                        
                </article>
                <article className="col my-3">
                    <div className="card card-portfolio mt-3 mb-2">
                        <img src={bien_etre} className="card-img-top" alt="image avec bouddha"/>
                        <div className="card-body">
                            <strong className="card-title text-center">Espace bien-être</strong>
                            <p className="card-text text-center paragraph">Site de vente de produits frais en ligne</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" className="btn btn-primary">Voir le site</a>   
                            </div>
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1 paragraph">Site réalisé avec LARAVEL</div>
                        </div>
                    </div>
                    <div className="card card-portfolio mt-3 mb-2">
                        <img src={screens} className="card-img-top" alt="image d'ordinateurs"/>
                        <div className="card-body">
                            <strong className="card-title text-center">Maquette d'un site web</strong>
                            <p className="card-text text-center paragraph">Création du prototype d'un site</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" className="btn btn-primary">Voir le site</a>   
                            </div>
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1 paragraph">Réalisé avec FIGMA</div>
                        </div>
                    </div>
                </article>
            </div>        
        </section>
    </main>
)
}
export default Portfolio;