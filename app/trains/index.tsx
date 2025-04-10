import React, { useEffect } from "react";
import TrainPath from "./models/train-path";
import Train from "./models/train";
import Manhattan from "./maps/nyc/areas/manhattan";
import StatenIsland from "./maps/nyc/areas/staten-island";
import Bronx from "./maps/nyc/areas/bronx";
import QueensBrooklyn from "./maps/nyc/areas/queens-brooklyn";
import {
  SvgPath as Path4,
  stations as stations4,
  pathColor as pathColor4,
  trainColor as trainColor4,
  stationColor as stationColor4,
} from "./maps/nyc/paths/4";
import {
  SvgPath as PathSIR,
  stations as stationsSIR,
  pathColor as pathColorSIR,
  trainColor as trainColorSIR,
  stationColor as stationColorSIR,
} from "./maps/nyc/paths/sir";
import {
  SvgPath as PathA,
  stations as stationsA,
  pathColor as pathColorA,
  trainColor as trainColorA,
  stationColor as stationColorA,
} from "./maps/nyc/paths/a";
import {
  SvgPath as PathC,
  stations as stationsC,
  pathColor as pathColorC,
  trainColor as trainColorC,
  stationColor as stationColorC,
} from "./maps/nyc/paths/c";

export function MtaTrains() {
  const trainPath4 = new TrainPath(Path4(), stations4, {
    stationColor: stationColor4,
    pathColor: pathColor4,
  });
  const trainPathSIR = new TrainPath(PathSIR(), stationsSIR, {
    stationColor: stationColorSIR,
    pathColor: pathColorSIR,
  });
  const trainPathA = new TrainPath(PathA(), stationsA, {
    stationColor: stationColorA,
    pathColor: pathColorA,
  });
  const trainPathC = new TrainPath(PathC(), stationsC, {
    stationColor: stationColorC,
    pathColor: pathColorC,
  });
  const trainPaths = [trainPath4, trainPathSIR, trainPathA, trainPathC];

  const trains = [
    new Train("SIR", trainPathSIR, { color: trainColorSIR }),
    new Train("4", trainPath4, { color: trainColor4 }),
    new Train("A", trainPathA, { color: trainColorA }),
    new Train("C", trainPathC, { color: trainColorC }),
  ];

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
        {trainPaths.map((path, index) => (
          <React.Fragment key={index}>{path.draw()}</React.Fragment>
        ))}
        {trains.map((train, index) => (
          <React.Fragment key={index}>{train.draw()}</React.Fragment>
        ))}
      </svg>
    </div>
  );
}
