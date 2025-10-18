import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, TextField, Box } from "@mui/material";

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // if (!name.trim()) return;
    localStorage.setItem("userName", "muhammadAli");
    navigate("/dashboard");
  };

  return (
    <>
      <div>welcome to login</div>
      <button onClick={handleSubmit}>navigate do dashboard</button>
    </>
  );
}
