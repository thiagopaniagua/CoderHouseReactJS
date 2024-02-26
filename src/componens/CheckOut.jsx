import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckOut = () => {
    const [orderId, setOrderId] = useState();
    const {cart, addItem, removeItem, clear, CantTotalProducts, AddiTotalProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }
        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idx, title:item.name, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = AddiTotalProducts();
        const order = {buyer:buyer, items:items, date:date, total:total};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }
    return(
        <div className="container my-5 d-flex  justify-content-center">
             <div className="row">
                <div className="col-md-6 ">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control-lg" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control-lg" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control-lg" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-12">
                    
                    <p className="text-start align-middle">Tu total a pagar es: ${AddiTotalProducts()}</p> 
                </div>
                </div>
               <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div class="alert alert-warning p-5 text-center" role="alert">
                        <p className="display-1">Compra completada!</p>
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu ID de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div> 
    )
};
export default CheckOut;