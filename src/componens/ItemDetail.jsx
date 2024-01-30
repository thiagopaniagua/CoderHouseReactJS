import { Link } from "react-router-dom";

const ItemDetail = ({item})=>{
    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 offser-md-2">
                    <img src={item.image} alt={item.name} className="img-fluid" style={{ objectFit: 'cover', height: '250px', width: '500px' }} />
                </div>
                <div className="col-md-6 text-center ">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <h4>${item.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;