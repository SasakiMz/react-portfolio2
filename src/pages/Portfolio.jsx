import "../css/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
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
        <picture><img src={banner} class="img-fluid"  alt="" /></picture>
        <section className="container text-center">
            <h1>Portfolio</h1>
            <p className="">Voici quelques-unes de mes réalisations.</p>
            <div class=" container text-center border-bottom border-4 border-primary mt-3 mb-5"></div>
        </section>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div class="card mt-3 mb-2">
                        <img src={fresh_food} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Fresh Food</h5>
                            <p class="card-text text-center">Site de vente de produits frais en ligne</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" class="btn btn-primary ">Voir le site</a>   
                            </div>                        
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1">Site réalisé avec PHP et MySQL</div>
                        </div>
                    </div>
                    <div class="card mt-3 mb-2">
                        <img src={seo} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">SEO</h5>
                            <p class="card-text text-center">Amélioration du référencement d'un site e-commerce</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" class="btn btn-primary ">Voir le site</a>   
                            </div> 
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                             <div className="my-1">Utilisation des outils SEO</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card mt-3 mb-2">
                            <img src={restaurant_japonais} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Restaurant Akira</h5>
                            <p class="card-text text-center">Site de vente de produits frais en ligne</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" class="btn btn-primary ">Voir le site</a>   
                            </div>
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1">Site réalisé avec WordPress</div>
                        </div>
                    </div>
                    <div class="card mt-3 mb-2">
                        <img src={coder} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Création d'une API</h5>
                            <p class="card-text text-center">Création d'une API RESTFULL publique</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" class="btn btn-primary ">Voir le site</a>   
                            </div>
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1">PHP - SYMFONY</div>
                        </div>
                    </div>                        
                </div>
                <div className="col">
                    <div class="card mt-3 mb-2">
                        <img src={bien_etre} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Espace bien-être</h5>
                            <p class="card-text text-center">Site de vente de produits frais en ligne</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" class="btn btn-primary ">Voir le site</a>   
                            </div>
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1">Site réalisé avec LARAVEL</div>
                        </div>
                    </div>
                    <div class="card mt-3 mb-2">
                        <img src={screens} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Maquette d'un site web</h5>
                            <p class="card-text text-center">Création du prototype d'un site</p>
                            <div className="contact-btn mt-2 mb-1">
                                <a href="#" class="btn btn-primary ">Voir le site</a>   
                            </div>
                        </div>
                        <div className="footercard border-top border-dark-subtle text-center bg-light rounded-1 rounded-top-0">
                            <div className="my-1">Réalisé avec FIGMA</div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </main>
)
}
export default Portfolio;