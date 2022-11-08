import React, { useEffect, useState } from "react";
import TeamCarousel from "./TeamCarousel";

const Team = () => {
  //load team data
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("Team.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeams(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center mb-12">
        <p className="text-2xl font-bold  text-orange-600 mb-5"> Team</p>
        <h2 className="text-5xl font-semibold mb-5">Meet Our Team</h2>
        <p className="mb-12">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className=" carousel w-full py-10 ">
        {teams.map((team) => (
          <TeamCarousel key={team._id} team={team}></TeamCarousel>
        ))}
      </div>
    </div>
  );
};

export default Team;
