import { useEffect, useState } from "react";
import arrayProducts from "./json/products.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let product = arrayProducts.find(item => item.id === parseInt(id));

                resolve(product);
            }, 2000);
        })
        promesa.then(data => {
            setItem(data);
            
        })
    }, [id]);
    return(
        <ItemDetail item= {item}/>
    )
}

export default ItemDetailContainer;