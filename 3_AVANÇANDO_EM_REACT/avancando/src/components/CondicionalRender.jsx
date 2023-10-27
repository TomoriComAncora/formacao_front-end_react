import React from "react";

const CondicionalRender = () => {
  const x = 5;

  const nome = "Lucas";

  return (
    <div>
      {/* 7 render considicional */}
      <h3>Isso será exibido?</h3>
      {x > 3 && <p>Se x for true sim!</p>}
      {/* 8 else */}
      <h3>Render ternário</h3>
      {nome === "Vinicius" ? (
        <div>
          <p>Olá Vinicius!</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
    </div>
  );
};

export default CondicionalRender;
