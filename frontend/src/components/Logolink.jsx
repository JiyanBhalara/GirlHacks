import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth'; // ensure path is correct
import Logo from "../assets/images/skillissue1.png";


function LogoLink() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (isAuthenticated()) {
      navigate("/FileUploadPage");
    } else {
      navigate("/signin");
    }
  };

  return (
    <a href="/" onClick={handleLogoClick} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img src={Logo} alt="logo" style={{ width: "9vw", height: "auto" }} />
    </a>
  );
}

export default LogoLink;
