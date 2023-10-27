const CartoesDeCarros = ({marca, km, cor}) => {
  return (
    <div>
        <div>
            <h3>Cartão do carro</h3>
            <ul>
                <li>Marca: {marca}</li>
                <li>Quilometragem: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
        </div>
    </div>
  )
}

export default CartoesDeCarros