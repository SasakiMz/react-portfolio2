import "../css/style.css";
import email from "../img/flaticons/flaticons-contact/email.png";
import map from "../img/flaticons/flaticons-contact/map.png";
import phone_number from "../img/flaticons/flaticons-contact/phone-number.png";
import point_map from "../img/flaticons/flaticons-contact/point-map.png";



const Mentions = () => {
return(
    <main className="container">      
        <div className="container">
            <div className=" container text-center border-bottom border-4 border-primary my-5">
                <h1>Mentions légales</h1>
            </div>
            <div className="accordion my-5" id="accordionExample">
                <section className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Editeur du site
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h4>John Doe</h4>
                            <div>
                                <p><img src={map} alt="" /> 40 rue Laure Diebold</p>
                                <p><img src={point_map} alt="" /> 69009 Lyon, France</p>
                                <p><img src={phone_number} alt="" /> 10 20 30 40 50</p>
                                <p><img src={email} alt="" /> john.doe@gmail.com</p>
                            </div>      
                        </div>
                    </div>
                </section>
                <section className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>alwaysdata</strong>
                            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                            <a href="www.alwaysdata.com"><img src="" alt="" />www.alwaysdata.com</a>
                        </div>
                    </div>
                </section>
                <section className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Crédits</strong>
                            <p>Ce site a été réalisé par John Doe, étudiant au <a href="">Centre Européen de formation.</a></p>
                            <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="">Pixabay</a></p>
                            <p>La favicon de ce site a été fournie par <a href="&">John doe icons erstellt von Freepik - Flaticon</a></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>


    </main>
)
}
export default Mentions;