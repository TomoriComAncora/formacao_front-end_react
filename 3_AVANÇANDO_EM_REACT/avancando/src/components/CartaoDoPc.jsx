const CartaoDoPc = ({ processador, memoria, armazenamento, placaDeVideo }) => {
  return (
    <div>
      <div className="pc">
        <ul>
          <h3>Componentes do PC</h3>
          <li>Processador: {processador}</li>
          <li>Memória: {memoria}</li>
          <li>Armazenamento: {armazenamento}</li>
          <li>Placa de Vídeo: {placaDeVideo}</li>
        </ul>
      </div>
    </div>
  );
};

export default CartaoDoPc;
