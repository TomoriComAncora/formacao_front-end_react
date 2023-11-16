import "./MyForm.module.css";

import { useState } from "react";

function MyForm({userName, userEmail}) {
  // 3 gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  // 8 descrição do usuário
  const [bio, setBio] = useState("");

  // 9 select 
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name, email);

  // 5 envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("seu nome:",name, "\n seu email:", email, "\n sua Bio é:", bio, "\n sua função é:", role);

    // 7 limpando formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 1 criaçaõ de formulário */}
      {/* 5 envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // 6 controlled input
            value={name}
          />
        </div>
        {/* 2 label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            // 4 simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6 controlled input
            value={email || ""}
          />
        </label>
        {/* 8 textarea */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder="Descrição do usuário" onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* 9 select */}
        <label>
          <span>Função do sistema</span>
          <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
            <option value="usuario">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm;
