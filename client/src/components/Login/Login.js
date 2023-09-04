
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";

function Login(props) {
  const [formData, setFormData ] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError ] = useState(false)
   
  const {email, password} = formData

  const onChange = e => {
    setFormData(
      {...formData, [e.target.name]:  e.target.value}
      );
      console.log(e.target.value)
    }

  let msg=""

  async function handleSubmit(event){
    event.preventDefault();
    try{
      setLoading(true);
      setMessage("Checking Credentials");
      const res = await axios.post("https://fash-rstf.onrender.com/api/users/login",{
        email,
        password
      },{
        withCredentials: true
      })
      if(res.status == 200){
        setMessage("Loggin In");
        props.setUserName(res.data.userName)
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      else{
        
      }
      
    }catch(err){
      setLoading(false)
      console.log(err)
        setMessage(err.response .data.msg);
      setError(true);
      setTimeout(() => {
        setError(false);
        console.log("jello")
      }, 1000)
      console.error(err.message)      
    }
  }

  return (
    <div className="login">
      {loading && <Loading msg={message}/>}
      {/* <Error /> */}
      {error &&  <Error msg={message} />} 
      <h1 className="login-heading">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label className="email-label">Email</label>
       
        <input
          onChange={e => onChange(e)}
          type="text"
          className="email"
          placeholder="E-mail address"
          name="email"
          value={email}
        />
        <br />
        <label className="password-label">Password</label>

        <input
          onChange={e => onChange(e)}
          type="password"
          className="password"
          placeholder="Password"
          name="password"
          value={password}
        />
        <br />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p className="login-alternate">
        If you don't have an account, <Link to="/register">Sign up</Link>
      </p>
  
    </div>
  );
}

export default Login;
