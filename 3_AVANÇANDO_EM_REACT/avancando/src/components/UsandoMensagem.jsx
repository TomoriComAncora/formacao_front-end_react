function UsandoMensagem({changeMensagem}) {

    const mensagens = ["oi", "olá", "hello"];

  return (
    <div>
        <button onClick={()=> changeMensagem(mensagens[0])}>1</button>
        <button onClick={()=> changeMensagem(mensagens[1])}>2</button>
        <button onClick={()=> changeMensagem(mensagens[2])}>3</button>
    </div>
  )
}

export default UsandoMensagem