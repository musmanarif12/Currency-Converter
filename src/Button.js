import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/blog");
  }

  return (
    <div>
      <button className="blog-button" onClick={handleClick}>
        Read more
      </button>
    </div>
  );
}

export default Button;
