import React from "react";
import data from "../../assets/data/data.json";
import "./list.css";

function SList() {
  return (
    <main className="main-list">
      {data.data.map((val) => {
        return (
          <section className="list-box">
            <div className="list-head">
              <h1>{val.name}</h1>
              <p>{val.deadline}</p>
            </div>
            <p className="disc">{val.description}</p>
            <h1 className="rup">{val.amount} ₹</h1>
            <p>Requirements</p>
            <ul className="ability">
              {val.requirements.map((val) => {
                return <li>{val}</li>;
              })}
            </ul>
            <a href={val.provider.website} className="visit">
              lear more
            </a>
          </section>
        );
      })}
    </main>
  );
}

export default SList;
