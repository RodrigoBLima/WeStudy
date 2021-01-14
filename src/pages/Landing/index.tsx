import React from "react";

import landingImg from "../../assets/images/landing.svg";

import { Link } from "react-router-dom";

import "./styles.css";

export default function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <h1>WeStudy</h1>
          <h2>Crie um grupo de estudos online.</h2>
        </div>
        <img src={landingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="/login" className="login">
            Entrar
          </Link>
          <Link to="/signup" className="signup-classes">
            Registre-se
          </Link>
        </div>

        <span className="total-connections">
          Total de 10.003 grupos já criados.
        </span>
      </div>
    </div>
  );
}
