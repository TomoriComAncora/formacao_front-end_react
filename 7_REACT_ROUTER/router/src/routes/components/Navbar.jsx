import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contato</Link> */}

        <NavLink to={"/"} className={({isActive}) => (isActive ? "active": "")}>Home</NavLink>
        <NavLink to={"/contact"} className={({isActive}) => (isActive ? "active": "")}>Contato</NavLink>
    </nav>
  )
}

export default Navbar