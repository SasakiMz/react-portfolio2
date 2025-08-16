import React from "react";
import './footer.css';
import githublogo from '../../img/logos_social_media/github-logo.png';
import twitterlogo from '../../img/logos_social_media/twitter-logo.png';
import linkedinlogo from '../../img/logos_social_media/linkedin-logo.png'
 

const FooterComp = () => {
    return (
        <div className="container-fluid sticky-bottom">
            <footer className=" bg-dark text-white row" id="footer">
                <div className="col-phone-12 col-md-3 col-xl-3 pt-3 px-xl-5">
                    <h5 className="title-footer">John Doe</h5>
                    <p className="pfooter">40 Rue Laure Diebold</p>
                    <p className="pfooter">69009 Lyon, France</p>
                    <p className="pfooter">10 20 30 40 50</p>
                    <p className="pfooter">John.Doe@gmail.com</p>
                    <div className="mt-sm-3">
                        <a target="_blank" href="/" className="iconefooter"><img src={githublogo} alt="" /></a>
                        <a target="_blank" href="/" className="iconefooter"><img src={twitterlogo} alt="" /></a>
                        <a target="_blank" href="/" className="iconefooter"><img src={linkedinlogo} alt="" /></a>
                    </div>
                </div>
                <div className="col-phone-12 col-md-3 col-xl-3 pt-3 px-xl-5">                
                    <h5 className="title-footer">Liens utiles</h5>
                    <p className="pfooter"><a href=".">Accueil</a></p>
                    <p className="pfooter"><a href="./services">Services</a></p>
                    <p className="pfooter"><a href="./portfolio">Portfolio</a></p>
                    <p className="pfooter"><a href="./contact">Me contacter</a></p>
                    <p className="pfooter"><a href="./mentions">Mentions légales</a></p>
                </div>
                <div className="col-phone-12 col-md-3 col-xl-3 pt-3 px-xl-5">
                    <h5>Mes dernières réalisations</h5>
                    <p className="pfooter"><a href="./portfolio">FreshFood</a></p>
                    <p className="pfooter"><a href="./portfolio">Restaurant Akira</a></p>
                    <p className="pfooter"><a href="./portfolio">Espace bien-être</a></p>
                    <p className="pfooter"><a href="./portfolio">SEO</a></p>
                    <p className="pfooter"><a href="./portfolio">Création d'une API</a></p>
                    <p className="pfooter"><a href="./portfolio">Maquette d'un site</a></p>
                </div>
            </footer>
        </div>
     
    )
}

export default FooterComp