import { Link } from "react-router-dom";

export function ShoppingHome(){
    return(
        <div className="row">
            <div className="col">
               <div className="card">
                 <img src="images/shoe.jpg" className="card-img-top" style={{height:'300px'}} alt="pic"/>
                 <div className="card-footer text-center">
                  <button className="btn">Men's</button>
                    <Link to="/men" className="btn btn-info w-100">Men's</Link>
                 </div>
               </div>
            </div>
            <div className="col">
               <div className="card">
                 <img src="images/jacket.jpeg" className="card-img-top" style={{height:'300px'}} alt="pic"/>
                 <div className="card-footer">
                  <button className="btn">Women's</button>
                 <Link to="/women" className="btn btn-success w-100">Women's</Link>
                 </div>
               </div>
            </div>
            <div className="col">
               <div className="card">
                 <img src="images/children.jpg" className="card-img-top" style={{height:'300px'}} alt="pic"/>
                 <div className="card-footer">
                    <button className="btn">Kid's</button>
                    <Link to="/kids" className="btn btn-warning w-100">Kid's</Link>
                 </div>
               </div>
            </div>
        </div>
    )
}