import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

export function ShoppingCategories(){
    const [categories, setCategories] = useState([]);
    const [userName, setUserName] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigage = useNavigate();
    useEffect(()=>{
       if(cookies["username"]==undefined){
          navigage("/login");
       } else {
        fetch("http://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>{
            setCategories(data);
        });
        setUserName(cookies["username"]);
       }
    },[]);

    function LogoutClick(){
        removeCookie("username");
        navigage("/login");
    }
    return(
        <div className="d-flex justify-content-between">
         <div className="w-100">
         <ul className="list-unstyled">
            {
                categories.map(category=>
                    <li className="btn btn-dark mb-2 w-25 d-block" key={category}> <Link to={"/products/" + category}>{category}</Link> </li>
                    )
            }
          </ul>
         </div>
         <div className="input-group">
            <h3>{userName} | <button onClick={LogoutClick} className="btn btn-link">Signout</button> </h3>
         </div>
        </div>
    )
}