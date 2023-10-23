// 4 template Ecpression
import Espiao from "./Espiao";

function TemplateExpression() {
  const soma = (a, b) => {
    return a + b;
  };

  const nome = "Lucas";

  const data = {
    idade: 21,
    profissao: "T.I",
  }
  return (
    <div>
      <h1>A soma é {2 + 2}</h1>
      <p>A soma 3 e 5 é = {soma(3,5)}</p>
      <h3>Meu nome é {nome}, tenho {data.idade} e sou da {data.profissao}</h3>
      <Espiao/>
    </div>
  );
}

export default TemplateExpression;
