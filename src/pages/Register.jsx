import React, { useState } from "react";
import Add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Register = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
        
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(response.user, {
              displayName: displayName,
              photoURL: downloadURL,
            })
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  }
  
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Marcius Chat</span>
        <span className="title">Registro</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="nome" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="senha" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Adicione um avatar</span>
          </label>
          <button>Cadastrar-se</button>
          {error && <span>Algo deu errado</span>}
        </form>
        <p>Você já possui uma conta? Logar</p>
      </div>
    </div>
  );
};

export default Register;
