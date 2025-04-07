import type { JSX } from "react";
import React from "react";
import Station, { type IStation } from "./station";

export const TRAIN_PATH_CLASSNAME = "train-path";

export interface ITrainPathStyles {
  stationColor?: string;
  pathColor?: string;
}

class TrainPath {
  public stations: Station[];

  constructor(
    public svgPath: JSX.Element,
    stations: IStation[],
    styles?: ITrainPathStyles
  ) {
    this.svgPath = svgPath;
    this.stations = stations.map(
      (station) =>
        new Station(
          station.name,
          station.name,
          station.x,
          station.y,
          station.handicap ?? false,
          styles?.stationColor
        )
    );
  }

  public getPathSegment(startIndex: number, endIndex: number): JSX.Element {
    const pathSegment = this.stations.slice(startIndex, endIndex + 1);
    const pathData = pathSegment
      .map((station, index) => {
        const command = index === 0 ? "M" : "L";
        return `${command} ${station.x} ${station.y}`;
      })
      .join(" ");

    return (
      <svg>
        <path d={pathData} />
      </svg>
    );
  }

  draw() {
    return (
      <g>
        {this.svgPath}
        {this.stations.map((station, i) => (
          <React.Fragment key={i}>{station.draw()}</React.Fragment>
        ))}
      </g>
    );
  }
}

export default TrainPath;
