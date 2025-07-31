import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
return(
    <div>
        <div className="headerservice">
            <h1>Mon offre de services</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <img src="#" alt="" />
        </div>
       <div className="services-propose">
            <div className="uxdesign">
                <h2>Ux Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolore cupiditate! Blanditiis et vero iste odio aliquam saepe eum vitae perferendis, unde nemo provident porro iure quaerat dignissimos, reiciendis consequatur.</p>
            </div>
            <div className="devweb">
                <h2>Développement Web</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolore cupiditate! Blanditiis et vero iste odio aliquam saepe eum vitae perferendis, unde nemo provident porro iure quaerat dignissimos, reiciendis consequatur.</p>
            </div>
            <div className="referencement">
                <h2>Référencement</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolore cupiditate! Blanditiis et vero iste odio aliquam saepe eum vitae perferendis, unde nemo provident porro iure quaerat dignissimos, reiciendis consequatur.</p>
            </div>
       </div>
    </div>
)
}
export default Services;