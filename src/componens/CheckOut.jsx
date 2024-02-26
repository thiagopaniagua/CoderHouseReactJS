import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckOut = () =>{
    const {cart, clear, CantTotalProducts, AddiTotalProducts} = useContext(CartContext)
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [orderId, setOrderId] = useState();
    const [celular, setCelular] = useState();


    const generateOrder = () => {
        if(nombre.length === 0) {
            return false;
        };
        if(email.length === 0) {
            return false;
        };
        if(celular.length === 0) {
            return false;
        };
    }
    const buyer = {name:nombre, email:email, phone:celular};
    const items = cart.map(item => ({id: item.idx, title:item.name, price:item.price}));
    const fecha = new Date();
    const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`; 
    const total = AddiTotalProducts();
    const order = {buyer:buyer, items:items, date:date, total,total};
    
    
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(resultado => {
        clear();
        setOrderId(resultado.id);
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>CheckOut</h1>
                    <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="name" className="form-control" id="nombre"  onInput={(e)=>{setNombre(e.target.value)}}/>

                    </div>
                     <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={(e)=>{setEmail(e.target.value)}}/>

                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Celular</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"onInput={(e)=>{setCelular(e.target.value)}}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={generateOrder}>Generar orden</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
            <table className="table">
                    <thead className="text-center">
                        <tr>
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
                        </tr>
                         )}
                         <tr>
                            <td colSpan={3}>Suma Total</td>
                            <td>${AddiTotalProducts()}</td>
                         </tr>
                        </tbody> 
                        </table> 
                        <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-warning p-5 text-center" role="alert">
                        <p className="display-1">🍔</p>
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu ID de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}
export default CheckOut;