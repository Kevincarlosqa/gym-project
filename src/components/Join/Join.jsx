import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (e.target[0].value === "") {
      alert("Ingresa un correo");
      return;
    }
    emailjs
      .sendForm(
        "service_fdtolpl",
        "template_z4owamp",
        form.current,
        "lYSwyJnykE42mR0RN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">listo para</span>
          <span>llevar tu</span>
        </div>
        <div>
          <span>cuerpo al</span>
          <span className="stroke-text">siguiente nivel?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Ingresa tu direccion de correo"
          />
          <button className="btn btn-j">Unete Ahora</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
