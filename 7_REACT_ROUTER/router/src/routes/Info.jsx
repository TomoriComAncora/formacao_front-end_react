import { useParams } from "react-router-dom"

function Info() {

    const {id} = useParams();

  return (
    <div>
        <h1>Mais informações do produto: {id}</h1>
    </div>
  )
}

export default Info