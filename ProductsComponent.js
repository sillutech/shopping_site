import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ProductsComponent(){
    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
       fetch(`http://fakestoreapi.com/products/category/${params.category}`)
       .then(response=> response.json())
       .then(data=>{
         setProducts(data);
       })
    },[params.category])
    return(
        <div>
            <h2>{params.category} List</h2>
            <div className="d-flex flex-wrap">
                {
                    products.map(product=>
                        <div key={product.id} className="card m-2 p-2" style={{width:'120px'}}>
                           <Link to={'/details/' + product.id }>
                           <img src={product.image} height="100px" className="card-img-top" alt="pic" />
                           </Link>
                        </div>
                        )
                }
            </div>
            <Link to="/categories">Back to Categories</Link>
        </div>
    )
}