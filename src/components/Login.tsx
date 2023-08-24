import React from 'react'
import {useForm} from 'react-hook-form';
import{ useNavigate} from 'react-router-dom';
import '../stylecss/Style.css'



export const Login = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();
    const navigate=useNavigate();
    const handleLogin=(data:any)=>{
        if(data.email==="admin@gmail.com" && data.password==="admin123"){
            sessionStorage.setItem("emailId",data.email);
                navigate("/manageproduct");
        }
        else
            alert("Invalid Credentials");
        
            
    }  
    return (
    <div className="login-container">
        
        <form className='login-form' onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
 

            <label>Email</label>

              <div className="form-group">

            
            <input type = "email" id="email"{...register('email',{required:true})}/>

            {errors.email && errors.email.type==="required"&& <span> Id is required</span>}
            </div>
            <br/>

 

            <label>Password</label>
            <div className="form-group">

            <input type = "password" id="password"{...register('password',{required:true})}/>

            {errors.password && errors.password.type==="required"&& <span> Name is required</span>}

             {errors.name && errors.name.type==="minLength"&& <span> Minimum 3 chars is required</span>} 
              </div>
            <br/>

 

            

           <input type="submit"value="Login" className='submit-button'></input>

 

            </form>

    </div>
  )
}

