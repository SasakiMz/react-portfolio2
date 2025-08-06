import React from "react";
 

const FooterComp = () => {
    return (
        <footer className="footer">
            
            <div className="about-me-footer">
                <h5>John Doe</h5>
                <p>40 Rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>John.Doe@gmail.com</p>
                <ul>
                    <li>
                        <span></span>
                        <span><i className="github-css"></i></span>
                    </li>
                    <li>
                        <span></span>
                        <span><i className="twitter-css"></i></span>
                    </li>
                    <li>
                        <span></span>
                        <span><i className="linkdin-css"></i></span>
                    </li>
                </ul>
            </div>
            <div className="links-utile">
                <h5>Liens utiles</h5>
                <p>Accueil LIEN</p>
                <p>Services LIEN</p>
                <p>Portfolio LIEN</p>
                <p>Me contacter LIEN</p>
                <p>Mentions légales LIEN</p>
            </div>
            <div className="lasts-realizations">
                <h5>Mes dernières réalisations</h5>
                <p>FreshFood</p>
                <p>Restaurant Akira</p>
                <p>Espace bien-être</p>
                <p>SEO</p>
                <p>Création d'une API</p>
                <p>Maquette d'un site</p>
            </div>
        </footer>
    )
}

export default FooterComp