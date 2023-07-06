import React from "react";
import Header from "../Header/Header";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best Social Fitness in Aqp</span>
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
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
