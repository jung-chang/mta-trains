import React from "react";
import Station, { type IStation } from "./station";

export const TRAIN_PATH_CLASSNAME = "train-path";

export interface ITrainPathStyles {
  stationColor?: string;
  pathColor?: string;
}

class TrainPath {
  public stations: Station[];
  private stationsData: IStation[] = [];

  constructor(
    public svgPath: SVGElement,
    stations: IStation[],
    styles?: ITrainPathStyles
  ) {
    this.svgPath = svgPath;
    this.stationsData = stations;
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

  segmentPath(currentStation: number, nextStation: number, step = 1) {
    const from = this.stationsData[currentStation]?.lengthFromStart ?? 0;
    const to = this.stationsData[nextStation]?.lengthFromStart ?? 0;
    const pathSVGElement = this.svgPath as SVGPathElement;

    const totalLength = pathSVGElement.getTotalLength();
    const fromLength = Math.max(0, Math.min(from, totalLength));
    const toLength = Math.max(0, Math.min(to, totalLength));

    let d = "";
    let started = false;

    if (fromLength <= toLength) {
      for (let i = fromLength; i <= toLength; i += step) {
        const { x, y } = pathSVGElement.getPointAtLength(i);
        d += started ? `L${x},${y}` : `M${x},${y}`;
        started = true;
      }
      // Ensure final point is included
      if (toLength > fromLength) {
        const { x, y } = pathSVGElement.getPointAtLength(toLength);
        d += `L${x},${y}`;
      }
    } else {
      for (let i = fromLength; i >= toLength; i -= step) {
        const { x, y } = pathSVGElement.getPointAtLength(i);
        d += started ? `L${x},${y}` : `M${x},${y}`;
        started = true;
      }
      // Ensure final point is included
      if (toLength < fromLength) {
        const { x, y } = pathSVGElement.getPointAtLength(toLength);
        d += `L${x},${y}`;
      }
    }

    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("d", d);
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.appendChild(pathElement);
    return pathElement;
  }

  draw() {
    return (
      <g>
        <svg
          dangerouslySetInnerHTML={{
            __html: new XMLSerializer().serializeToString(this.svgPath),
          }}
        />
        {this.stations.map((station, i) => (
          <React.Fragment key={i}>{station.draw()}</React.Fragment>
        ))}
      </g>
    );
  }
}

export default TrainPath;
