import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Auth = ({ onLogin }) => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // EMAIL LOGIN
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    const userData = {
      id: Date.now(),
      name: formData.name || "User",
      email: formData.email,
    };

    onLogin(userData);
    navigate("/");
  };

  // GOOGLE LOGIN
  const handleGoogleSuccess = (res) => {
    try {
      const decoded = jwtDecode(res.credential);

      const userData = {
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      };

      onLogin(userData);
      navigate("/");
    } catch {
      setError("Google Login Failed");
    }
  };

  return (
    <div style={{ padding: 400, textAlign: "", }}>
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        )}
<h3>Email</h3>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
<br />
<h2>Password</h2>
      <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        /> <br />

        {!isLogin && (
          <input style={{padding: 
10, marginTop: 10, backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: 5,
    
    }}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ marginTop: 20 }}>
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <h3>Or continue with Google</h3>

      <GoogleLogin style={{ padding: 50 }}
        onSuccess={handleGoogleSuccess}
        onError={() => setError("Google Login Failed")}
      />

      <p>
        {isLogin ? "No account?" : "Already have account?"}
        <button onClick={() => setIsLogin(!isLogin)} style={{ marginLeft: 10, backgroundColor: "#0070f3", border: "none", color: "white", cursor: "pointer", padding: "8px 12px", borderRadius: "4px" }}>
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Auth;