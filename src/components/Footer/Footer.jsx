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
                        <a href="/" className="iconefooter"><img src={githublogo} alt="" /></a>
                        <a href="/" className="iconefooter"><img src={twitterlogo} alt="" /></a>
                        <a href="/" className="iconefooter"><img src={linkedinlogo} alt="" /></a>
                    </div>
                </div>
                <div className="col-phone-12 col-md-3 col-xl-3 pt-3 px-xl-5">                
                    <h5 className="title-footer">Liens utiles</h5>
                    <p className="pfooter"><a href="">Accueil</a></p>
                    <p className="pfooter"><a href="">Services</a></p>
                    <p className="pfooter"><a href="">Portfolio</a></p>
                    <p className="pfooter"><a href="">Me contacter</a></p>
                    <p className="pfooter"><a href="">Mentions légales</a></p>
                </div>
                <div className="col-phone-12 col-md-3 col-xl-3 pt-3 px-xl-5">
                    <h5>Mes dernières réalisations</h5>
                    <p className="pfooter">FreshFood</p>
                    <p className="pfooter">Restaurant Akira</p>
                    <p className="pfooter">Espace bien-être</p>
                    <p className="pfooter">SEO</p>
                    <p className="pfooter">Création d'une API</p>
                    <p className="pfooter">Maquette d'un site</p>
                </div>
            </footer>
        </div>
     
    )
}

export default FooterComp