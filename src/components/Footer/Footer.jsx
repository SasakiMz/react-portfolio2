import React from "react";
import './footer.css';
import "../../css/style.css";
import githublogo from '../../img/logos_social_media/github-logo.png';
import twitterlogo from '../../img/logos_social_media/twitter-logo.png';
import linkedinlogo from '../../img/logos_social_media/linkedin-logo.png'
 

const FooterComp = () => {
    return (
        <footer className="container-fluid sticky-bottom">
            <div className=" bg-dark text-white row" id="footer">
                <div className="col-phone-12 col-md-3 col-xl-3 pt-3 px-xl-5">
                    <h5 className="title-footer">John Doe</h5>
                    <address>
                        <p>40 Rue Laure Diebold</p>
                        <p>69009 Lyon, France</p>
                        <p>10 20 30 40 50</p>
                        <p>John.Doe@gmail.com</p>
                    </address>
                    <div className="mt-sm-3">
                        <a target="_blank" href="/" rel="noopener noreferrer" ><img className="iconefooter mx-1 " src={githublogo} alt="Lien vers Github" /></a>
                        <a target="_blank" href="/" rel="noopener noreferrer" ><img className="iconefooter mx-1" src={twitterlogo} alt="Lien vers Twitter" /></a>
                        <a target="_blank" href="/" rel="noopener noreferrer" ><img className="iconefooter mx-1" src={linkedinlogo} alt="Lien vers LinkedIn" /></a>
                    </div>
                </div>
                <div className="col-phone-12 col-md-3 col-xl-3 pt-3 px-xl-5">                
                    <h5 className="title-footer">Liens utiles</h5>
                    <ul className="list-unstyled ps-0">
                        <li><a href="/" className="pfooter">Accueil</a></li>
                        <li><a href="/services" className="pfooter">Services</a></li>
                        <li><a href="/portfolio" className="pfooter">Portfolio</a></li>
                        <li><a href="/contact" className="pfooter">Me contacter</a></li>
                        <li><a href="/mentions" className="pfooter">Mentions légales</a></li>
                    </ul>
                </div>
                <div className="col-phone-12 col-md-3 col-xl-3 pt-3 px-xl-5">
                    <h5>Mes dernières réalisations</h5>
                    <ul className="list-unstyled ps-0">
                        <li><a href="/portfolio" className="pfooter">FreshFood</a></li>
                        <li><a href="/portfolio" className="pfooter">Restaurant Akira</a></li>
                        <li><a href="/portfolio" className="pfooter">Espace bien-être</a></li>
                        <li><a href="/portfolio" className="pfooter">SEO</a></li>
                        <li><a href="/portfolio" className="pfooter">Création d'une API</a></li>
                        <li><a href="/portfolio" className="pfooter">Maquette d'un site</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterComp