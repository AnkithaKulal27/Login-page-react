import React, { useState } from "react";
import { assets } from "../assets/assets"; // make sure assets/index.js exists

function Login() {
  // State for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // State for errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login successful");
    }
  };

  return (
    <div className="container-fluid login-container d-flex justify-content-center align-items-center min-vh-100 w-75 h-75 my-5 px-0">
        <div className="row bg-white m-2 rounded shadow overflow-hidden py-2">
        {/* Left side */}
        <div className="col-md-6 d-none d-md-flex position-relative ps-2">
          <img src={assets.left_bg} alt="" className="img-fluid border rounded-3" style={{ objectFit: "cover" }}/>
          <div className="position-absolute top-0 start-0 p-3">
            <div className="d-flex flex-row gap-1">
              <p className="text-white mt-1">A WISE QUOTE</p>
              <hr className="quote-line"/>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-0 p-3 d-flex flex-column text-white">
            <h1 className="display-5">Get<br/>Everything<br/>You Want</h1>
            <p className="mt-3">You can get everything you want if you work hard,<br/>trust the process.and stick to the plan.</p>
          </div>
          
        </div>

      {/* Right side */}
      <div className="col-md-6 d-flex flex-column bg-white rounded-3 align-items-center justify-content-between">
        <div className="d-flex flex-row">
          <img src={assets.cogle_icon}  className="w-50 h-50"/>
          <h5  className="mt-4">Cogle</h5>
        </div>
        
        <div className="w-75 mb-5">
          <h2 className="mb-4 fw-semibold text-center">Welcome Back</h2>
          <p className="text-center">Enter your email and password to access your account</p>

          <form onSubmit={handleSubmit}>
            {/* Email field */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Password field */}
            <div className="mb-3 position-relative">
              <label className="form-label">Password</label>
              <input
                type={showPassword?"text":"password"}
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password.length>0 && (
              <span
                className="show-password position-absolute end-0 top-50 translate-middle-y pe-3 mt-3"
                onClick={()=>setShowPassword(!showPassword)}>
                  <i className={`bi ${showPassword?"bi-eye-slash" : "bi-eye"}`}></i>
              </span>
              )}
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="d-flex flex-row flex-md-column flex-lg-row justify-content-between mb-3">
              <div className="form-check ps-0">
                <input
                  type="checkbox"
                  className="me-1"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e)=>setRememberMe(e.target.checked)}
                />
                <label className="form-label-remember" htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="" className="text-dark text-decoration-none">Forgot Password</a>
            </div>

            <button type="submit" className="btn btn-dark w-100 mb-3">
              Sign in
            </button>
            <div className="d-flex flex-row google-button align-items-center justify-content-center w-100">
              <img src={assets.google_icon} className="google-icon"/>
              <button type="submit" className="btn btn-white">
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex flex-row gap-2">
          <p>Don't have an account</p>
          <a href="" className="text-dark text-decoration-none fw-bold">Sign Up</a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
