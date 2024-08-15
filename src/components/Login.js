import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      if (response.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(response.data[0]));
        navigate("/shopping-list");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <div class="form-title">
          <span>Enter your credentials</span>
        </div>
        <div class="title-2">
          <span>LOGIN</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              className="input-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <section class="bg-stars">
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
          </section>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="input-pwd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account?{" "}
          <Link to="/register" className="up">
            Register here
          </Link>
        </p>

        <div class="container"></div>
      </div>
    </div>
  );
};

export default Login;
