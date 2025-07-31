const Contact = () => {
return(
    <div className="Contact">
       <div className="HeaderContact">
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem, architecto, voluptates explicabo ex soluta atque amet esse vel eum nisi optio obcaecati? Maiores dignissimos, aliquam ea tenetur suscipit fugit!</p>
       </div>
       <div className="board">
            <div className="form-contact">
                <h2>Formulaire de contact</h2>
                <form action="">
                    <label htmlFor=""><input type="text" id="" name="" placeholder="Votre nom"/></label>
                    <label htmlFor=""><input type="text" id="" name="" placeholder="Votre adresse email"/></label>
                    <label htmlFor=""><input type="text" id="" name="" placeholder="Votre numéro de téléphone"/></label>
                    <label htmlFor=""><input type="text" id="" name="" placeholder="Sujet"/></label>
                    <textarea name="" id="" placeholder="Votre message"></textarea>
                    <input type="submit" />
                </form>
            </div>
            <div className="contact-adress">
                <h2>Mes coordonnées</h2>
                <div className="contact-adress">
                    <h4>John Doe</h4>
                    <p>Rue</p>
                    <p>Ville</p>
                    <p>Téléphone</p>
                    <p>Mail</p>
                </div>
                <div className="adress">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1513433752225!2d2.3149887127561843!3d48.855324371212184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6702a3f0e77cb%3A0x4ddca7233e8e259d!2s69%20Rue%20de%20Varenne%2C%2075007%20Paris!5e0!3m2!1sfr!2sfr!4v1753911775389!5m2!1sfr!2sfr"></iframe>
                </div>
            </div>
       </div>
    </div>
    
    )
}

export default Contact;