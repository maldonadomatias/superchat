import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../Alert";

import classes from "./Auth.module.css";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.container}>
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="youremail@company.tld"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="*************"
          />
        </div>

        <div className={classes.message}>
          <button type="submit">Sign In</button>
        </div>
      </form>
      <button onClick={handleGoogleSignin}>Google login</button>
      <p className={classes.message}>
        Don't have an account?
        <Link to="/register">Register</Link>
      </p>
      <a className={classes.message} href="#!" onClick={handleResetPassword}>
        Forgot Password?
      </a>
    </div>
  );
}
