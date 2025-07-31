import React from "react";


const Home = () => {
return(
    <div className="home">
            <div className="image-background-home">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button>EN SAVOIR PLUS</button>
                <img src="#" alt="" />
            </div>
        
        <div className="about">
            <div className="about-me">
                <h3>A propos</h3>
                <div className="image-about-me">
                    <img src="" alt="" />
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia quos, ducimus neque vitae fugiat itaque culpa adipisci repudiandae facilis. Quibusdam quidem at dolorem deleniti omnis asperiores odio, nesciunt itaque!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur neque itaque laboriosam similique eaque, repudiandae sequi incidunt assumenda. Quod laboriosam voluptatibus at, sint sit explicabo tenetur officiis recusandae sequi ratione.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, ab animi ullam ut est iure incidunt consectetur facilis odit repellendus porro sunt ex maiores aspernatur nostrum. Nisi repudiandae numquam labore.</p>
                </div>
            </div>
            <div className="skills">
                <h3>Mes compétences</h3>
                    <div className="skill-container">
                        <span className="title">HTML5 90%</span>
                        <span className="skill-bar"></span>
                    </div>
                    <div className="skill-container">
                        <span className="title">CSS3 80%</span>
                        <span className="skill-bar"></span>
                    </div>
                    <div className="skill-container">
                        <span className="title">JAVASCRIPT 70%</span>
                        <span className="skill-bar"></span>
                    </div>
                    <div className="skill-container">
                        <span className="title">PHP 60%</span>
                        <span className="skill-bar"></span>
                    </div>
                    <div className="skill-container">
                        <span className="title">REACT 50%</span>
                        <span className="skill-bar"></span>
                    </div>
            </div>
        </div>
    </div>
)
}
export default Home;