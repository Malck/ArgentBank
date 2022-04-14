import "../Login/login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios"
import { Recup } from "../../Store/TodoSlice";

export default function Login() {

  const [data, setData] = useState({
    email: "", 
    password: ""
  })

  const [error,setError]= useState("")

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = ({currentTarget:input }) =>{
    setData({...data,[input.name]:input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const url = "http://localhost:3001/api/v1/user/login"
      const {data: res} = await axios.post(url, data);
     
      //console.log(res);//reponse de la connection status 200
      dispatch(Recup({...data, token:res.body.token }));
      navigate("/profile")
      
    } catch (error){
      
      if(error.response && 
        error.response.status >= 400 && 
        error.response.status <= 500
        ){
          setError(error.response.data.message)
        }
    }
    
  }
 

  return (
    
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
            
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} value={data.email} type="email" name="email" id="username" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} value={data.password} type="password" name="password" id="password" />
          </div>

          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me" />
          </div>
           
           {error && <div className="error">{error}</div>}
          
          <button className="sign-in-button" type="submit"> Sign In </button>
          

        </form>

      </section>
    </main>
  );
}
