import React from "react";
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
          <div className="category" key={`program-${index}`}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Unete Ahora</span>
              <img src={RightArrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
