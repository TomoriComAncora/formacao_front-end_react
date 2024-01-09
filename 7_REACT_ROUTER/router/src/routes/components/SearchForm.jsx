import { useState } from "react"

import { useNavigate } from "react-router-dom"


function SearchForm() {
    const navigate = useNavigate();
    const [querry, setquerry] = useState();

    const handleSubmit = (e)=>{
        e.preventDefault();

        navigate("/search?q=" + querry)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setquerry(e.target.value)}/>
        <input type="submit" value={"Buscar"}/>
    </form>
  )
}

export default SearchForm