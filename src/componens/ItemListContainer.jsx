import { useEffect, useState } from "react";
//import arrayProducts from "./json/products.json"
import { Link, useParams } from "react-router-dom";
import { getFirestore , collection, query, getDocs, where} from "firebase/firestore"
import Loading from "./Loading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

/*  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() =>{
         resolve(id ? arrayProducts.filter(product => product.category === id) : arrayProducts); 
      }, 2000);
     
    })
    promesa.then(data => {
      setProducts(data)
    })
  }, [id]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    arrayProducts.forEach(product => {
      addDoc(itemsCollection, product);

    });
    console.log("se subieron los productos");
  }, []);*/
  useEffect(() =>{
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const consult = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
    getDocs(consult).then(resultado => {
      setLoading(false);
      setProducts(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
    });
  }, [id]);
    return (
        <div className="container">
          {loading ? <Loading /> :
          <div className="row d-flex justify-content-center">
          {products.map(item => (
            <div key={item.id} className="col-md-3">
              <div className="card text-center">
                <Link to={"/item/" + item.id}>
                  <img src={item.image} className="card-img-top" alt={item.name}  style={{ objectFit: 'cover', height: '200px' }}/>
                 </Link> 
                 <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
            </div>
          ))}
          </div>
       };
        </div>
    )
}
export default ItemListContainer;