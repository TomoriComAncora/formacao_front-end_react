import { useFetch } from "../hooks/useFetch"

import { useParams } from "react-router-dom"

function Product() {
    const {id} = useParams();

    const url = "http://localhost:3000/products/" + id;

    const {data: product} = useFetch(url);
  return (
    <div>
        <p>ID do produto: {id}</p>
        <div>
            <h1>Nome: {product.name}</h1>
            <p>Preço: {product.price}</p>
        </div>
    </div>
  )
}

export default Product