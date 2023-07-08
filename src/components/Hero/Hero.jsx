import React from "react";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image-back_skyblue.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import "./Hero.css";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "155px" : "266px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "linear" }}
          ></motion.div>
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
              Aquí te ayudaremos a moldear y construir tu cuerpo ideal para que
              vivas tu vida al máximo
            </span>
          </div>
        </div>
        {/* Gym stats */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={80} start={30} delay="4" preFix="+" />
            </span>
            <span>trainers expertos</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>miembros</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={20} delay="4" preFix="+" />
            </span>
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
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="Heart Icon" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calorias Quemadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
