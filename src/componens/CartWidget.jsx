import svgCart from "../assets/cart3.svg"

const CartWidget = () =>{
    return(
       
        < >
        <img src={svgCart} alt="ImagenCarrito" width={25} />
        <span className="position-absolute top-2 start-99 translate-middle badge rounded-pill bg-danger">
          2
          <span className="visually-hidden">unread messages</span>
        </span>
      </>
    )
}

export default CartWidget;