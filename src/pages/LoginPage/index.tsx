import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Input from "../../components/Inputs";
import PageHeader from "../../components/Header";

import "./styles.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {}

  return (
    <div id="signup-page-form" className="container">
      <PageHeader title="Faça o seu Login" />
      <main>
        <form onSubmit={handleLogin}>
          <fieldset>
            <Input
              value={email}
              name="email"
              label="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              value={password}
              name="password"
              label="Digite a sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <footer>
            <button type="submit">Entrar</button>

            <Link to="/signup" className="back-link">
              <FiLogIn size={16} color="e02141" />
              Não tenho cadastro
            </Link>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
