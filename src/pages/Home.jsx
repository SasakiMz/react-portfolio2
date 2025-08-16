import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import hero_about from '../img/john-doe-about.jpg';
import "../css/home.css";
import "../css/style.css";

 

const Home = () => {
return(
    <div className="">
            <div className="img-fluid hero" id="text_background">
                <div className="">
                    <div className="text-white text-center">                    
                        <h1 className="mt-1">Bonjour, je suis John Doe</h1>
                        <h2 className="mt-1">Développeur web full stack</h2>
                    </div>
                    <div className="text-center mt-1">
                        <button type="button" class="btn btn-danger ">En savoir plus</button>
                    </div>
                </div>
            </div>
    <div className="container">
                <div className="sections row border rounded-1 shadow ">
            <div className="col col-md-6">
                    <div class="border-bottom border-3 border-primary mb-5">
                        <h3>A propos</h3>
                    </div>
                <div>
                    <img src={hero_about} class="img-fluid" alt="" />
                </div> 
                <div className="pt-3">
                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia quos, ducimus neque vitae fugiat itaque culpa adipisci repudiandae facilis. Quibusdam quidem at dolorem deleniti omnis asperiores odio, nesciunt itaque!</p>
                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur neque itaque laboriosam similique eaque, repudiandae sequi incidunt assumenda. Quod laboriosam voluptatibus at, sint sit explicabo tenetur officiis recusandae sequi ratione.</p>
                    <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, ab animi ullam ut est iure incidunt consectetur facilis odit repellendus porro sunt ex maiores aspernatur nostrum. Nisi repudiandae numquam labore.</p>
                </div>
            </div>
            <div className="col col-md-6">
               <div class="border-bottom border-3 border-primary mb-5">
                    <h3>Mes compétences</h3>
                </div>
               <div className="html5 mb-3">
                    <p className="pbarprogress">HTML5 90%</p>
                    <div class="progress mt-2">
                        <div class="progress-bar bg-danger barhtml5" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                 <div className="html5 mb-3">
                    <p className="pbarprogress">CSS3 80%</p>
                    <div class="progress mt-2">
                        <div class="progress-bar bg-info barcss3" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                 <div className="html5 mb-3">
                    <p className="pbarprogress">JAVASCRIPT 70%</p>
                    <div class="progress mt-2">
                        <div class="progress-bar bg-warning barjs" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                 <div className="html5 mb-3">
                    <p className="pbarprogress">PHP 60%</p>
                    <div class="progress mt-2">
                        <div class="progress-bar bg-success barphp" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                 <div className="html5 mb-3 ">
                    <p className="pbarprogress">REACT 50%</p>
                    <div class="progress mt-2">
                        <div class="progress-bar bg-primary barreact" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    </div>
)
}
export default Home;