import React, { useState } from "react";
import PageHeader from "../../components/Header";
import Input from "../../components/Inputs";
import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setTelephoneNumber] = useState("");

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  function handleSave() {}

  return (
    <>
      <div id="signup-page-form" className="container">
        <PageHeader
          title="Crie a sua conta"
          description="O primeiro passo, é você preencher esse formulário de inscrição"
        />
        <main>
          <form onSubmit={handleSave}>
            <fieldset>
              <legend>Seus dados</legend>
              <Input
                value={name}
                name="name"
                label="Nome"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                value={lastname}
                name="lastname"
                label="Sobrenome"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                value={email}
                name="email"
                label="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                value={cellphone}
                name="cellphone"
                label="Telefone celular"
                type="number"
                maxLength={11}
                onChange={(e) => setTelephoneNumber(e.target.value)}
              />

              <Input
                value={password}
                name="password"
                label="Digite a sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                value={confirmpassword}
                name="confirmpassword"
                label="Confirmar senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! Preencha com todos os seus dados <br />
              </p>
              <button type="submit">Salvar Cadastro</button>
            </footer>
          </form>
        </main>
      </div>
    </>
  );
}
