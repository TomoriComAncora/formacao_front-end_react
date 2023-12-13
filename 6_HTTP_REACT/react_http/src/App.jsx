import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/Loading";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  // 1 - regatando dados
  const [products, setProducts] = useState([]);

  // 4 - custom hooks
  const { data: itens, httpConfig, loading, error } = useFetch(url);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   getData();
  // }, []);

  const clearForm = () => {
    setName("");
    setPrice("");
  };
  // 2 enviando dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // 5 - refatorando o post
    httpConfig(product, "POST");

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((statePassado) => [...statePassado, addedProduct]);

    // clearForm();
  };

  return (
    <div className="app">
      <h1>HTTP em React</h1>
      {/* 6 - loading */}
      {loading && <Loading/>}
      {/* 7 - tratamento de erros */}
      {error && <p>{error}</p>}
      {/* 1 - resgatando dados */}
      <ul>
        {itens &&
          itens.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>

      {/* 2 enviando dados */}
      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* <input type="submit" value={"Enviar"} /> */}
          {/* 7 - loading no post */}
          {loading && <input type="submit" disabled value={"Aguarde"}/>}
          {!loading && <input type="submit" value={"Enviar"}/>}
        </form>
      </div>
    </div>
  );
}

export default App;
