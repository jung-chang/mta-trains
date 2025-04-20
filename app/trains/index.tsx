import React, { useEffect } from "react";
import TrainPath from "./models/train-path";
import Train from "./models/train";
import Manhattan from "./maps/nyc/areas/manhattan";
import StatenIsland from "./maps/nyc/areas/staten-island";
import Bronx from "./maps/nyc/areas/bronx";
import QueensBrooklyn from "./maps/nyc/areas/queens-brooklyn";
import { trainPaths } from "./maps/nyc/paths/train_paths";

export function MtaTrains() {
  const trains = Object.keys(trainPaths).map((key) => {
    const path = trainPaths.get(key)!;
    return new Train(key, path);
  });

  useEffect(() => {
    trains.forEach((train) => {
      train.animateTrain(0, 1);
    });
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center p-6"
      style={{
        height: "1223px",
        width: "1050px",
      }}
    >
      <svg
        width="1050"
        height="1223"
        viewBox="0 0 1050 1223"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1050" height="1223" fill="#C0D5ED" />
        <Bronx />
        <StatenIsland />
        <Manhattan />
        <QueensBrooklyn />
        {[...trainPaths.values()].map((path, index) => (
          <React.Fragment key={index}>{path.draw()}</React.Fragment>
        ))}
        {trains.map((train, index) => (
          <React.Fragment key={index}>{train.draw()}</React.Fragment>
        ))}
      </svg>
    </div>
  );
}
