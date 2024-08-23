import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:3001/users", {
      email,
      password,
    });
    if (response.data) {
      alert("Registration successful. Please login.");
      navigate("/login");
    }
  } catch (error) {
    console.error("Registration error:", error);
    alert("An error occurred during registration");
  }
};

  return (
    <div className="form">
      
      <div class="form-title">
        <span>register your account</span>
      </div>
      <div class="title-2">
        <span>REGISTER</span>
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
          Register
        </button>
      </form>
      <p className="signup-link">
        Already have an account?{" "}
        <Link to="/login" className="up">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
