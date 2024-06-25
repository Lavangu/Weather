import React, { useState } from "react";
import validator from "validator";
import "./App.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!validator.isEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    } else {
      setEmailError("");
    }

    // Validate password (add more complex rules as needed)
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else {
      setPasswordError("");
    }

    // If validation passes, you can proceed with login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="signinbackground">
      <h2 style={{ marginTop: 100, marginLeft: 100 }}>Signin</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            style={{ marginLeft: 100 }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            style={{ marginLeft: 70 }}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && (
            <span style={{ color: "red" }}>{passwordError}</span>
          )}
        </div>
        <div>
          <button
            style={{ marginLeft: 100, marginBottom: 100, marginTop: 100 }}
            type="submit"
          >
            Signin
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
