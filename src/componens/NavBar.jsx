import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to={"#"}>Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/"}>Inicio</NavLink>
                    </li> 
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Menu
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to={"/category/sorrentinos"}>Sorrentinos</NavLink></li>
                            <li><NavLink className="dropdown-item" to={"/category/raviolones"}>Raviolones</NavLink></li>
                            <li><NavLink className="dropdown-item" to={"/category/canelones"}>Canelones</NavLink></li>
                            <li><NavLink className="dropdown-item" to={"/category/fideos"}>Fideos</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"#"}>Sobre Nosotros</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"#"}>Contacto</NavLink>
                    </li>
                </ul> 
            </div>
            <div className="d-flex justify-content-end"> 
                <CartWidget></CartWidget>
            </div>
        </div>
    </nav>
      
    )
}

export default NavBar;