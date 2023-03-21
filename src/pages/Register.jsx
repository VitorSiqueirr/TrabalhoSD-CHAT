import React from "react";

const Register = () => {
  return <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">Marcius Chat</span>
        <span className="title">Registro</span>
        <form>
            <input type="text" placeholder="nome"/>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="senha"/>
            <input type="file" />
            <button>Cadastrar-se</button>
        </form>
        <p>Você já possui uma conta? Logar</p>
    </div>
  </div>;
};

export default Register;
