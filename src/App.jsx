import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/employeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
    } else if (email == "employee1@example.com" && password == "123") {
      setUser("employee");
    } else {
      alert("Invalid credentials");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);
  



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}{" "}
      {/* if user is not logged in then show login page else show dashboard */}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
