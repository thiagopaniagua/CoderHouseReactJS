import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const ItemCount = ({stock, onAdd}) => {
   
   
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [showGoToCart, setShowGoToCart] = useState(false);
    
    const increment = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 1){
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if(counter <= itemStock){
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setShowGoToCart(true);
           
            //console.log("Agregaste " + counter+ " productos al carrito")
        };
    }

    useEffect(()=> {
        setItemStock(stock)
    }, [stock]);
  
    return(
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
            <button type="button" className="btn btn-primary">{counter}</button>
            <button type="button" className="btn btn-primary" onClick={increment}>+</button>
            <button type="button" className="btn btn-primary" onClick={addToCart}>Agregar al carrito</button>
            {showGoToCart  && (
               <Link to={"/cart"}> <button type="button" className="btn btn-primary">Ir al carrito</button></Link>
    
            )
            }
</div>
    )
};

export default ItemCount;