import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () =>{
    const {cart, addItem, removeItem, clear, CantTotalProducts, AddiTotalProducts} = useContext(CartContext)

    if(CantTotalProducts() == 0 ){
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-warning" role="alert">
                             Lo sentimos, no se encontraron productos en el carrito!
                        </div>
                        <Link to={"/"} className="btn btn-warning my-5">  Volver a la página principal </Link>
                    </div>
                </div>
            
            </div>
        )
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col">

                </div>
            </div>
            <div className="row">
                <div className="col">
            <table className="table">
                    <thead className="text-center">
                        <tr>
                        <th scope="col"><button className=" btn btn-warning" onClick={clear}> Vaciar todo<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" alt="Eliminar Producto" title="Eliminar Producto">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                        </svg></button></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {cart.map(product =>
                           
                        <tr key={product.id}>
                        <th scope="row"><img src={product.image} alt={product.name} width={80}/></th>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                        <td> ${product.price * product.quantity}</td>
                        <td><a href="#" onClick= { ()=>{removeItem(product.id)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" alt="Eliminar Producto" title="Eliminar Producto">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                        </svg></a></td>
                        </tr>
                         )}
                         <tr>
                            <td colSpan={4}>Suma Total</td>
                            <td>${AddiTotalProducts()}</td>
                            <td><Link to={"/checkout"} className="btn btn-warning">Finalizar</Link></td>
                         </tr>
                        </tbody> 
                        </table> 
                </div>
            </div>
        </div>
    )
};

export default Cart;