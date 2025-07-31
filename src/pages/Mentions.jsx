import React from "react";

const Mentions = () => {
return(
    <div className="mentions">
        <h1>Mentions légales</h1>

        <div className="menu">
            <div className="site-editor">
                 <ul>
                    <li>Rue</li>
                    <li>Ville</li>
                    <li>Téléphone</li>
                    <li>e-mail</li>
                </ul>
            </div>
        </div>
        <div className="menu">
            <div className="host">
                <strong>alwaysdata</strong>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <link rel="stylesheet" href="www.alwaysdata.com"/>
            </div>
        </div>
        <div className="menu">
            <div className="credits">
                <strong>Crédits</strong>
                <p>Ce site a été réalisé par John Doe, étudiant au LIEN</p>
                <p>Les images utilisées sur ce site sont libres de droits et on été obtenues sur le site LIEN</p>
                <p>Le favicon de ce site a été fournie par LIEN</p>
            </div>
        </div>
    </div>
)
}
export default Mentions;