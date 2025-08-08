import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import hero_bg from '../img/hero-bg.jpg';
import hero_about from '../img/john-doe-about.jpg';
 

const Home = () => {
return(
    <div className="container">
            <div>
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button>EN SAVOIR PLUS</button>
            </div>
        
        <div>
            <div>
                <h3>A propos</h3>
                <div>
                    <img src={hero_about} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia quos, ducimus neque vitae fugiat itaque culpa adipisci repudiandae facilis. Quibusdam quidem at dolorem deleniti omnis asperiores odio, nesciunt itaque!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur neque itaque laboriosam similique eaque, repudiandae sequi incidunt assumenda. Quod laboriosam voluptatibus at, sint sit explicabo tenetur officiis recusandae sequi ratione.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, ab animi ullam ut est iure incidunt consectetur facilis odit repellendus porro sunt ex maiores aspernatur nostrum. Nisi repudiandae numquam labore.</p>
                </div>
            </div>
            <div>
                <h3>Mes compétences</h3>
                    <div>
                        <span>HTML5 90%</span>
                        <span></span>
                    </div>
                    <div>
                        <span>CSS3 80%</span>
                        <span></span>
                    </div>
                    <div>
                        <span>JAVASCRIPT 70%</span>
                        <span></span>
                    </div>
                    <div>
                        <span>PHP 60%</span>
                        <span></span>
                    </div>
                    <div>
                        <span>REACT 50%</span>
                        <span></span>
                    </div>
            </div>
        </div>
    </div>
)
}
export default Home;