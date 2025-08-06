import React from "react";

const Mentions = () => {
return(
<div>
    <h1>Mentions légales</h1>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Editeur du site
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>John Doe</strong>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>John.doe@gmail.com</p>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hébergeur
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>alwaysdata</strong>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <a href="www.alwaysdata.com"><img src="" alt="" />www.alwaysdata.com</a>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Crédits
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Crédits</strong>
                <p>Ce site a été réalisé par John Doe, étudiant au <a href="">Centre Européen de formation.</a></p>
                <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="">Pixabay</a></p>
                <p>La favicon de ce site a été fournie par <a href="&">John doe icons erstellt von Freepik - Flaticon</a></p>
            </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Mentions;