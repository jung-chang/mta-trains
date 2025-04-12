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
import {
  SvgPath as Path7,
  stations as stations7,
  pathColor as pathColor7,
  trainColor as trainColor7,
  stationColor as stationColor7,
} from "./maps/nyc/paths/7";
import {
  SvgPath as PathL,
  stations as stationsL,
  pathColor as pathColorL,
  trainColor as trainColorL,
  stationColor as stationColorL,
} from "./maps/nyc/paths/l";
import {
  SvgPath as Path1,
  stations as stations1,
  pathColor as pathColor1,
  trainColor as trainColor1,
  stationColor as stationColor1,
} from "./maps/nyc/paths/1";
import {
  SvgPath as PathJ,
  stations as stationsJ,
  pathColor as pathColorJ,
  trainColor as trainColorJ,
  stationColor as stationColorJ,
} from "./maps/nyc/paths/j";

export function MtaTrains() {
  const trainPath4 = new TrainPath("4", Path4(), stations4, {
    stationColor: stationColor4,
    pathColor: pathColor4,
  });
  const trainPathSIR = new TrainPath("", PathSIR(), stationsSIR, {
    stationColor: stationColorSIR,
    pathColor: pathColorSIR,
  });
  const trainPathA = new TrainPath("A", PathA(), stationsA, {
    stationColor: stationColorA,
    pathColor: pathColorA,
  });
  const trainPathC = new TrainPath("C", PathC(), stationsC, {
    stationColor: stationColorC,
    pathColor: pathColorC,
  });
  const trainPath7 = new TrainPath("7", Path7(), stations7, {
    stationColor: stationColor7,
    pathColor: pathColor7,
  });
  const trainPathL = new TrainPath("L", PathL(), stationsL, {
    stationColor: stationColorL,
    pathColor: pathColorL,
  });
  const trainPath1 = new TrainPath("1", Path1(), stations1, {
    stationColor: stationColor1,
    pathColor: pathColor1,
  });
  const trainPathJ = new TrainPath("J", PathJ(), stationsJ, {
    stationColor: stationColorJ,
    pathColor: pathColorJ,
  });

  const trainPaths = [
    trainPath4,
    trainPathSIR,
    trainPathA,
    trainPathC,
    trainPath7,
    trainPathL,
    trainPath1,
    trainPathJ,
  ];

  const trains = [
    new Train("SIR", trainPathSIR, { color: trainColorSIR }),
    new Train("4", trainPath4, { color: trainColor4 }),
    new Train("A", trainPathA, { color: trainColorA }),
    new Train("C", trainPathC, { color: trainColorC }),
    new Train("7", trainPath7, { color: trainColor7 }),
    new Train("L", trainPathL, { color: trainColorL }),
    new Train("1", trainPath1, { color: trainColor1 }),
    new Train("J", trainPathJ, { color: trainColorJ }),
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
