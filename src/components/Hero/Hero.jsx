import React from "react";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image-back_skyblue.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>El mejor gimnasio social de arequipa</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Moldea </span>
            <span>tu</span>
          </div>
          <div>
            <span>cuerpo ideal</span>
          </div>
          <div>
            <span>
              Aquí te ayudaremos a moldear y construir tu cuerpo ideal y vivir
              tu vida al máximo
            </span>
          </div>
        </div>
        {/* Gym stats */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>trainers expertos</span>
          </div>
          <div>
            <span>+978</span>
            <span>miembros</span>
          </div>
          <div>
            <span>+50</span>
            <span>programas de fitness</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Empezar</button>
          <button className="btn">Aprende Mas</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Unete Ahora</button>
        <div className="heart-rate">
          <img src={Heart} alt="Heart Icon" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        {/* Calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calorias Quemadas</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
