import React from "react";

const PlayerCard = props => {
  return (
    <a href={`https://en.wikipedia.org/wiki/${props.name.replace(/ /g, "_")}`}>
      <div className={`playercard ${props.country}`} id={props.id}>
        <h3>{props.name}</h3>
        <h4>{props.country}</h4>
      </div>
    </a>
  );
};

export default PlayerCard;
