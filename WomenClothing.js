import { useEffect, useState } from "react"

export function WomensClothing(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://fakestoreapi.com/products/category/women's%20clothing")
        .then(response=>response.json())
        .then(data=>{
            setProducts(data);
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>Women's Clothing</h2>
           <div className="d-flex flex-wrap">
             {
                products.map(product=> 
                    <div className="card m-2" style={{width:'150px'}}>
                    <img src={product.image} height="120" className="card-img-to" alt="pic"/>
                     <div className="card-header">
                        <p>{product.title}</p>
                     </div>
                    </div> 
                    )
             }
           </div>
        </div>
    )
}