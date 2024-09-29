// Login.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signin");
  }, [navigate]);

  return null; // Since this component only redirects, no JSX is needed.
}

export default Login;
