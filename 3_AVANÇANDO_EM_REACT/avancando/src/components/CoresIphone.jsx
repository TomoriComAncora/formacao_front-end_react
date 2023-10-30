function CoresIphone({escolherCor}) {

    const cores = ["azul", "preto", "vermelho", "branco", "verde"];
  return (
    <div>
        <button onClick={()=>{escolherCor(cores[0])}}>Azul</button>
        <button onClick={()=>{escolherCor(cores[1])}}>Preto</button>
        <button onClick={()=>{escolherCor(cores[2])}}>Vermelho</button>
        <button onClick={()=>{escolherCor(cores[3])}}>Branco</button>
        <button onClick={()=>{escolherCor(cores[4])}}>Verde</button>
    </div>
  )
}

export default CoresIphone