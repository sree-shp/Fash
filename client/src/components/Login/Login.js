import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";

function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      setMessage("Checking Credentials");
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}/api/v2/user/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setMessage("Loggin In");
        props.setUserName(res.data.data.user.name);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
      }
    } catch (err) {
      setLoading(false);

      setMessage(err.response.data.msg);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      console.error(err.message);
    }
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        {loading && <Loading msg={message} />}
        {/* <Error /> */}
        {error && <Error msg={message} />}
        <h1 className="login-heading">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="email-label">Email</label>

            <input
              onChange={(e) => onChange(e)}
              type="text"
              className="email"
              placeholder="E-mail address"
              name="email"
              value={email}
            />
          </div>

          <div>
            <label className="password-label">Password</label>

            <input
              onChange={(e) => onChange(e)}
              type="password"
              className="password"
              placeholder="Password"
              name="password"
              value={password}
            />
          </div>

          <br />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="login-alternate">
          If you don't have an account,{" "}
          <Link className="signup-link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
