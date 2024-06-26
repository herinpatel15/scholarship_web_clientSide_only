import React from "react";
import "./login.css"
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="main-login">
      <div className="Heading">
        <h1>Fill all Information</h1>
      </div>
      <div className="main-content">
        <div className="Input2">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Study" />
          <input type="text" placeholder="Cast" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Last year Grade" />
          <input type="text" placeholder="gender" />
        </div>
        <div className="Upload">
          <div>
            <p>Aadhar Card </p>
            <input type="file" />
            <p>Income Certificate </p>
            <input type="file" />
            <p>Cast Certificate </p>
            <input type="file" />
            <p>Last Marksheet </p>
            <input type="file" />
          </div>
        </div>
      </div>
      <div className="button">
        <button className="save"><Link to="/">Save</Link></button>
        {/* <button className="edit">Edit</button> */}
      </div>
    </main>
  );
}

export default Login;
