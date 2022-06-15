import React from "react";

const Character = ({ character = [] }) => {
  return (
    <div className="character-container">
      {character.map((item, index) => (
        <div key={index} className="character">
          <div className="card">
            <img src={item.image} alt="" />
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>
                {item.status} - {item.species}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
