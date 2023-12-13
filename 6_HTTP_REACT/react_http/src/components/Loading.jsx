import "./Loading.css";

function Loading() {
  return (
    <div className="modal">
      <div className="loading">
        <p>Carregando</p>
        <span className="progress"></span>
      </div>
    </div>
  );
}

export default Loading;
