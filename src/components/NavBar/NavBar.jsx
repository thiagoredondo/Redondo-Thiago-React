import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {


  return (
    <nav className="navbar">

      <ul className="categories">
        <Link to="/category/grabados" className="category">Grabados</Link>
        <Link to="/category/estampados" className="category">Estampados</Link>
        <Link to="/category/etiquetas" className="category">Etiquetas</Link>
      </ul>

      <Link to="/" className="brand primary-font-color">
      <img 
        src="/img/logo.png" 
        alt="Logo Serigrafía Gomez" 
        className="icon-brand"
      />
        <p className="title-brand ">Serigrafia Gomez</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar