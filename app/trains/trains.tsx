import { useEffect } from "react";
import anime from "animejs";

const TRAIN_PATH = "train-path";
const TRAIN_STATION = "train-station";
const TRAIN_STATION_LABEL = "train-station-label";
const TRAIN = "train";

class Station {
  constructor(
    public id: string,
    public name: string[],
    public x: number,
    public y: number,
    public curve?: boolean,
    public curveDirection?: "up" | "down"
  ) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.curve = curve ?? false;
    this.curveDirection = curveDirection;
  }
  private drawLabel() {
    return (
      <text
        className={TRAIN_STATION_LABEL}
        textAnchor="middle"
        fontSize="10"
        fill="#333"
      >
        {this.name.map((line, idx) => (
          <tspan key={idx} x={this.x + idx * 5} y={this.y + 20 + idx * 12}>
            {line}
          </tspan>
        ))}
      </text>
    );
  }

  drawStationWithLabel() {
    return (
      <g style={{ cursor: "pointer" }}>
        <circle
          cx={this.x}
          cy={this.y}
          r="6"
          fill="#fff"
          stroke="#000"
          strokeWidth="2"
          className={TRAIN_STATION}
        />
        <text
          className={TRAIN_STATION_LABEL}
          textAnchor="middle"
          fontSize="10"
          fill="#333"
        >
          {this.drawLabel()}
        </text>
      </g>
    );
  }
}

class TrainPath {
  public segments: string[];

  constructor(public stations: Station[]) {
    this.segments = [];
    this.stations = stations;
    this.generatePathSegments(stations);
  }

  // Automatically calculate the control point for Bézier curves with curve direction
  private calculateControlPoint(
    curr: Station,
    next: Station,
    direction: "up" | "down" = "up"
  ) {
    // Midpoint between two stations
    const midpointX = (curr.x + next.x) / 2;
    const midpointY = (curr.y + next.y) / 2;

    // Calculate the distance between current and next station to scale the offset
    const distance = Math.sqrt(
      Math.pow(next.x - curr.x, 2) + Math.pow(next.y - curr.y, 2)
    );

    // Use a small offset based on the distance between the stations
    const offset = distance * 0.1; // Adjust this value to control the curve sharpness

    // Control curve direction
    let controlPoint = { x: midpointX, y: midpointY };

    if (direction === "up") {
      controlPoint.y -= offset; // Curve upward
    } else if (direction === "down") {
      controlPoint.y += offset; // Curve downward
    }

    return controlPoint;
  }

  // Function to generate path with curves
  generatePathSegments(stations: Station[]) {
    const segments = [];

    for (let i = 0; i < stations.length - 1; i++) {
      const curr = stations[i];
      const next = stations[i + 1];

      if (next.curve) {
        // Automatically calculate the control point for quadratic Bézier curve with curve direction
        const controlPoint = this.calculateControlPoint(
          curr,
          next,
          next.curveDirection || "up"
        );

        // Quadratic Bézier curve (1 control point)
        segments.push(
          `Q ${controlPoint.x} ${controlPoint.y}, ${next.x} ${next.y}`
        );
      } else {
        // Linear path
        segments.push(`L ${next.x} ${next.y}`);
      }
    }

    // Start with M (move to) the first station
    return `M ${stations[0].x} ${stations[0].y} ` + segments.join(" ");
  }

  drawPath() {
    return (
      <path
        d={this.generatePathSegments(this.stations)}
        stroke="#000"
        strokeWidth="4"
        fill="none"
        className={TRAIN_PATH}
      />
    );
  }
}

class Train {
  constructor(public id: string) {
    this.id = id;
  }

  animateTrain(currentStation: number, direction: number, stations: Station[]) {
    const nextStation = currentStation + direction;
    const fromX = stations[currentStation].x;
    const toX = stations[nextStation].x;
    const fromY = stations[currentStation].y;
    const toY = stations[nextStation].y;

    anime({
      targets: `.${TRAIN}`,
      translateX: [fromX, toX],
      translateY: [fromY, toY],
      easing: "easeInOutQuad",
      duration: 1000,
      complete: () => {
        currentStation = nextStation;
        // // Reverse direction if at the beginning or end of the stations
        if (currentStation === 0 || currentStation === stations.length - 1) {
          direction *= -1;
        }
        // Pause at each station
        setTimeout(
          () => this.animateTrain(currentStation, direction, stations),
          500
        );
      },
    });
  }

  draw() {
    return <circle r="10" fill="red" className={TRAIN} />;
  }
}

export function MtaTrains() {
  const stationsConfig = [
    { name: ["1st Ave"], x: 50, y: 50 },
    { name: ["2nd Ave"], x: 105, y: 100 },
    { name: ["3rd St"], x: 160, y: 150 },
    {
      name: ["Union", "Square"],
      x: 215,
      y: 180,
      curve: true,
      curveDirection: "down",
    },
    { name: ["5th Ave"], x: 270, y: 200 },
    { name: ["6th Ave"], x: 325, y: 200 },
    { name: ["7th Ave"], x: 380, y: 200 },
    { name: ["8th Ave"], x: 435, y: 200 },
    { name: ["9th Ave"], x: 490, y: 200 },
    { name: ["10th Ave"], x: 545, y: 250 },
  ];

  const stations = stationsConfig.map(
    (station) =>
      new Station(
        station.name.join(" "),
        station.name,
        station.x,
        station.y,
        station.curve,
        station.curveDirection ?? undefined
      )
  );
  const trainPath = new TrainPath(stations);
  const train = new Train("A");

  useEffect(() => {
    train.animateTrain(0, 1, stations);
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <svg
        viewBox="0 0 600 120"
        xmlns="http://www.w3.org/2000/svg"
        width="100vw"
        height="100vh"
      >
        {trainPath.drawPath()}
        {train.draw()}
        {stations.map((station: Station) => station.drawStationWithLabel())}
      </svg>
    </div>
  );
}
