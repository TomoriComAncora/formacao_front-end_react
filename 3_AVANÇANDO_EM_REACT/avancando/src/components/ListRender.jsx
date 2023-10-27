import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Lucas", "Lucas1", "Lucas2"]);

  const [users, setUsers] = useState([
    { id: 1, nome: "Lucas", idade: 21 },
    { id: 2, nome: "Fabricio", idade: 21 },
    { id: 3, nome: "Goran", idade: 31 },
  ]);

  const deletarUsuario = () => {
    const numeroAleatorio = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
      prevUsers.filter((item) => numeroAleatorio != item.id)
    );
  };

  return (
    <div>
      {/* 4 render sem key */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* 5 render com key */}
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.nome} - {item.idade} anos
          </li>
        ))}
      </ul>
      {/* 6 previous state */}
      <div>
        <button onClick={deletarUsuario}>Deletar usuário aleatório</button>
      </div>
    </div>
  );
};

export default ListRender;
