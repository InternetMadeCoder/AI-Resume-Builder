import { useState } from "react";
import "../../styles/Auth.css";

const AuthForm = ({ isSignUp, onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-form-section">
            <h2 className="auth-title animate-text">
              {isSignUp ? "Create Account!" : "Welcome Back!"}
            </h2>
            <p className="auth-subtitle">
              {isSignUp
                ? "Join us to create your professional resume"
                : "Continue your journey with Resume Rocket"}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-elem">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-elem">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
          </div>
          <div className="auth-image-section">
            <img
              src={isSignUp ? "/signup.svg" : "/signin.svg"}
              alt={isSignUp ? "Sign Up" : "Sign In"}
              className="auth-illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
