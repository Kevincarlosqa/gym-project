import React from "react";
import { Link } from "react-scroll";

import { plansData } from "../../data/plansData";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">LISTO PARA</span>
        <span>ENTRENAR CON</span>
        <span className="stroke-text">NOSOTROS?</span>
      </div>
      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>S/. {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span></span>
            </div>
            <Link
              to="join-us"
              spy={true}
              smooth={true}
              style={{ cursor: "pointer", width: "100%" }}
            >
              <button className="btn" style={{ width: "100%" }}>
                {" "}
                Unete Ahora
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
