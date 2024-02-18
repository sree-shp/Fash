import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";

function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    telephone: "",
    confirmPassword: ""
  })
  const  navigate = useNavigate();
  const [loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [message, setMessage ] =useState("")

  const {name, email, password, confirmPassword, telephone} = formData;
  const onChange = e => {setFormData({...formData, [e.target.name]:  e.target.value});}
  async function handleSubmit(event) {
    event.preventDefault();
    try{
      setLoading(true);
      setMessage(" Validating Credentials");
      const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}api/users/register`,{
        name,
        email,
        telephone,
        password
      },{
        withCredentials: true
      })

      if(res.status == 200){
        setMessage("Registering User")
        props.setUserName(res.data.userName);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      else{
       
      }
      
    }catch(err){
      setLoading(false);
      setError(true)
      setMessage(err.response.data.msg)
      console.error(err.message);
      setTimeout(() => {
        setError(false)
      }, 1000);
    }
  }

  return (
    <div className="register">
      <div className="register-wrapper">
      {loading && <Loading msg={message} />}
      {error && <Error msg={message} />}
      <h1 className="register-heading">REGISTER</h1>
      <form onSubmit={handleSubmit}>
      <div>
      <label className="register-name-label">Name</label>

<input
  onChange={e => onChange(e)}
  type="text"
  className="register-name"
  placeholder="Name"
  name= 'name'
  value={name}
/>
      </div>
      
      
      <div>
      <label className="register-telephone-label">Telephone</label>

<input
  onChange={e => onChange(e)}
  type="text"
  className="register-telephone"
  placeholder="Telephone"
  name='telephone'
  value={telephone}
/>
      </div>
        <div>
        <label className="register-email-label">Email</label>

<input
  onChange={e => onChange(e)}
  type="text"
  className="register-email"
  placeholder="E-mail address"
  name='email'
  value={email}
/>
        </div>
        
        <div>
        <label className="register-password-label">Password</label>

<input
  onChange={e => onChange(e)}
  type="password"
  className="register-password"
  placeholder="Password"
  name="password"
  value={password}
/>
        </div>
       <div>
       <label className="register-password-label">Confirm Password</label>

<input
  onChange={e => onChange(e)}
  type="password"
  className="register-password"
  placeholder=" Re-type Password"
  name="confirmPassword"
  value={confirmPassword}
/>
       </div>
       
        <br />
        <button type="submit" className="register-button">
          Continue
        </button>
      </form>

      <p className="register-alternate">
        If you already have an account, 
         <Link className="login-link" to="/Login"> Login</Link>
      </p>
      <ToastContainer />
      </div>
      
    </div>
  );
}

export default Register;
