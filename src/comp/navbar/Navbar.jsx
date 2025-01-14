import React from "react";
import {Link} from "react-router-dom"

import "./navbar.css"

function Navbar() {
  return (
    <nav className="main-nav">
      <h1 className="text-gradiunt"><Link to="/">Pathwayscholar</Link></h1>
      <ul>
        <li><Link to="/list">List of Scholorship</Link></li>
        <li><Link to="/login">Registration</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div><Link to="/login"><Account/></Link></div>
    </nav>
  );
}

function Account() {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 3.75003C12.15 3.75003 3.75 12.15 3.75 22.5C3.75 32.85 12.15 41.25 22.5 41.25C32.85 41.25 41.25 32.85 41.25 22.5C41.25 12.15 32.85 3.75003 22.5 3.75003ZM22.5 9.37503C25.6125 9.37503 28.125 11.8875 28.125 15C28.125 18.1125 25.6125 20.625 22.5 20.625C19.3875 20.625 16.875 18.1125 16.875 15C16.875 11.8875 19.3875 9.37503 22.5 9.37503ZM22.5 36C17.8125 36 13.6687 33.6 11.25 29.9625C11.3062 26.2313 18.75 24.1875 22.5 24.1875C26.2312 24.1875 33.6937 26.2313 33.75 29.9625C31.3312 33.6 27.1875 36 22.5 36Z"
        fill="url(#paint0_linear_1_62)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_62"
          x1="3.76875"
          y1="1.29378"
          x2="34.9594"
          y2="39.7969"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DD95E6" />
          <stop offset="1" stop-color="#7176F6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Navbar;
