import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/login", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' name="username" onChange={handleChange} />
        <input required type="password" placeholder='password' name="password" onChange={handleChange} />
        <button onClick={handleSubmit}> Login </button>
        {err && (
          <div>
            <p>Error Code: {err.code}</p>
            <p>Fatal: {err.fatal}</p>
          </div>
        )}
        <span> Don't have an account? <Link to="/register"> Register </Link> </span>
      </form>
    </div>
  )
}

export default Login