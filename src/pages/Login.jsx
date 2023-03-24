import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Marcius Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="senha" />
          <button>Logar</button>
        </form>
        <p>Você ainda não possui uma conta? Cadastre-se</p>
      </div>
    </div>
  );
};

export default Login;
