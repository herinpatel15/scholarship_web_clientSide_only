import React from "react";
import heroImg from "../../assets/imgs/hero.png";
import "./hero.css";

import { Link } from "react-router-dom";

import s1 from "../../assets/imgs/1.svg"
import s2 from "../../assets/imgs/2.svg"
import s3 from "../../assets/imgs/3.svg"
import jugad from "../../assets/imgs/jugad.svg"

function Hero() {
  return (
    <main>
      <main className="main-hero">
        <div>
          <h1 className="hero-text">
            <span>GET</span>
            <br />
            SCHOLARSHIPS <br /> WITH US
          </h1>
          <div className="btn-box">
            <Link to="/login"><button className="bt1">Register</button></Link>
            <Link to="/list"><button className="bt2">Learn More</button></Link>
          </div>
        </div>
        <img src={heroImg} alt="hello" />
      </main>
      <section className="func-sec">
        <h1>The <span>benefits</span> that will get</h1>
        <div>
          <img src={s1} alt="hello" />
          <img src={s2} alt="hello" />
          <img src={s3} alt="hello" />
        </div>
      </section>
      <section className="jugad">
        <img src={jugad} alt="hello" />
      </section>
      <div className="foot">
        <p>Thank you for visit copyright PathwayScholarship</p>
      </div>
    </main>
  );
}

export default Hero;
