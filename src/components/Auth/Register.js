import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../Alert";

import classes from "./Auth.module.css";

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
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
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="*************"
          />
        </div>

        <button>Register</button>
      </form>
      <p className={classes.message}>
        Already have an Account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
