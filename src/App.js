import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
