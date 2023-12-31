import { Link ,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
 

export const Navigations = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

 

  const navigate=useNavigate();

  useEffect(()=>{

    if(sessionStorage.getItem("emailId")!=null)

    setIsLoggedIn(true);

  })

  const logout=()=>{console.log("logout");

  sessionStorage.clear();

  navigate("/")
  }
  return (

    <div>

     <h4>RetailManagementSystem</h4>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">

   

     <div className="container-fluid">

   

       <a className="navbar-brand" href="#">Navbar</a>

   

       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

   

         <span className="navbar-toggler-icon"></span>

   

       </button>

   

       <div className="collapse navbar-collapse" id="navbarSupportedContent">

   

         <ul className="navbar-nav me-auto mb-2 mb-lg-0">

   

           <li className="nav-item">

   

             <Link className="nav-link active" aria-current="page" to="/">Home</Link>

   

           </li>

        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/addproduct">AddProduct</Link>
        </li>:""}
        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/addproducttype">AddProductType</Link>
        </li>:""}
        
        {isLoggedIn?<li  className="nav-item">
          <Link className="nav-link"  to="/manageproduct">ManageProduct</Link>
        </li>:""}

        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/manageproducttype">ManageProductType</Link>
        </li>:""}

        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/cart">Cart</Link>

        </li>:""}

        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/managebill">ManageBill</Link>
        </li>:""}

        

        {isLoggedIn?<li className="nav-item">
          <Link className="nav-link"  to="/contactus">Contactus</Link>
        </li>:""}
        {isLoggedIn?<li className="nav-item">

        <button onClick={logout}> Logout</button>

        </li>:""}
        

      </ul>
    </div>
  </div>
</nav>
    </div>

  )

}