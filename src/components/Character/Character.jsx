import React from "react";
import "./Character.css";

const Character = ({ character = [] }) => {
  return (
    <div className="character-container">
      {character.map((item, index) => (
        <div key={index} className="character-card">
          <div className="card">
            <div className="card-image">
              <img className="img" src={item.image} alt="" />
            </div>
            <div className="card-body">
              <div className="card-main-info">
                <h2 className="card-title">{item.name}</h2>
                <p className="card-status">
                  {item.status} - {item.species}
                </p>
              </div>
              <h5 className="card-location-head">Last know location:</h5>
              <p>{item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
