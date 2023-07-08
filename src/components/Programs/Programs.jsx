import React from "react";
import { Link } from "react-scroll";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">descubre</span>
        <span>nuestros</span>
        <span className="stroke-text">programas</span>
      </div>
      <div className="program-categories">
        {programsData.map((program, index) => (
          <Link to="join-us" spy={true} smooth={true} key={`program-${index}`}>
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Unete Ahora</span>
                <img src={RightArrow} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Programs;
