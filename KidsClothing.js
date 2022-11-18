import { useEffect, useState } from "react"

export function KidsClothing(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(response=>response.json())
        .then(data=>{
            setProducts(data);
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>Kid's Clothing</h2>
           <div className="d-flex flex-wrap">
             {
                products.map(product=> 
                    <div className="card m-2" style={{width:'150px'}}>
                    <img src={product.image} height="120" className="card-img-to" />
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