import "./MyForm.module.css"

function MyForm() {
  return (
    <div>
        {/* 1 criaçaõ de formulário */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome"/>
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm