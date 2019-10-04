import React from "react";

const PlayerCard = props => {
  return (
    <div className={`playercard ${props.country}`} id={props.id}>
      <h3>{props.name}</h3>
      <h4>{props.country}</h4>
    </div>
  );
};

export default PlayerCard;
