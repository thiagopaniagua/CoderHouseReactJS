import { useContext } from "react";
import svgCart from "../assets/cart3.svg"
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const {CantTotalProducts} = useContext(CartContext)
  
  return(
       CantTotalProducts()> 0 ?
        <Link to={"/cart"}>
        <img src={svgCart} alt="ImagenCarrito" width={25} />
        <span className="position-absolute top-2 start-99 translate-middle badge rounded-pill bg-danger">
          {CantTotalProducts()}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link> : ""
    )
}

export default CartWidget;