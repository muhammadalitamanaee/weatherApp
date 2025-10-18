import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const isLoggedIn = localStorage.getItem("userName"); // simple local check

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
