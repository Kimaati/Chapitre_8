import React, { useState, useEffect } from "react";
import axios from "axios";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("./annonce.json")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <div className="card-container">
      {data.map((item) => (
        <div className="overlay">
          <div className="card-content" key={item.id} id={`card-${item.id} `}>
            <img src={item.cover} alt="" />
            <p className="card-title">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
