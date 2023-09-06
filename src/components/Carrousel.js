import React, { useState, useEffect } from "react";
import axios from "axios";

const Carrousel = () => {
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
    <div>
      {data.map((item) => (
        <div className="card-content" key={item.id} id={`card-${item.id} `}>
          <img src={item.pictures} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
