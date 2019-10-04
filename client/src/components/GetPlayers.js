import React from "react";
import useAxios from "./useAxios";
import PlayerCard from "./PlayerCard";

const GetPlayers = () => {
  const { data = [] } = useAxios("http://localhost:5000/api/players");
  return (
    <>
      <h3>Players from around the World!</h3>
      <div className="cardcontainer">
        {data.map(players => (
          <PlayerCard
            id={players.id}
            name={players.name}
            country={players.country}
          />
        ))}
      </div>
    </>
  );
};

export default GetPlayers;
