import React from "react";
import { Link } from "react-router-dom";
import annonce from "../data/annonce.json";

function Card() {
  return (
    <div className="card-container">
      {annonce.map((item) => (
        <div className="overlay" key={item.id}>
          <Link to={`/logement/${item.id}`}>
            <div className="card-content" id={`card-${item.id} `}>
              <img src={item.cover} alt="" />
              <p className="card-title">{item.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
