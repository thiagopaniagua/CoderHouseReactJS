import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li> 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Menu
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Sorrentinos</a></li>
                            <li><a className="dropdown-item" href="#">Raviolones</a></li>
                            <li><a className="dropdown-item" href="#">Canelones</a></li>
                            <li><a className="dropdown-item" href="#">Fideos</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
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