// import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return <div>welcome to dashboard</div>;
}
