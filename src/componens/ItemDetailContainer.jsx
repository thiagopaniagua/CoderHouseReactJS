import { useEffect, useState } from "react";
//import arrayProducts from "./json/products.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    /*useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let product = arrayProducts.find(item => item.id === parseInt(id));

                resolve(product);
            }, 2000);
        })
        promesa.then(data => {
            setItem(data);
            
        })
    }, [id]);*/

    useEffect(() =>{
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
          setItem({id:resultado.id, ...resultado.data()});
        });
      }, [id]);
    return(
       <> 
       {loading ? <Loading /> : <ItemDetail item= {item}/>}
        </>
    )
}

export default ItemDetailContainer;