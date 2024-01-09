import { useFetch } from "../hooks/useFetch"
import { useParams, Link } from "react-router-dom"

function Product() {
    const {id} = useParams();

    const url = "http://localhost:3000/products/" + id;

    const {data: product} = useFetch(url);

    if(!product){
        return <h1>Carregando...</h1>
    }
    
    console.log(product);

  return (
    <>
      <p>ID do produto: {id}</p>
        <div>
            <h1>Nome: {product.name}</h1>
            <p>Preço: {product.price}</p>
            {/* 8 rota aninhada */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
    </>
  )
}

export default Product