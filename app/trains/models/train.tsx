import anime from "animejs";
import type TrainPath from "./train-path";
import ReactDOMServer from "react-dom/server";

export const TRAIN_CLASSNAME = "train";
export interface ITrainStyles {
  color?: string;
}

class Train {
  constructor(
    public id: string,
    public path: TrainPath,
    public styles: ITrainStyles
  ) {
    this.id = id;
    this.path = path;
    this.styles = styles;
  }

  animateTrain(currentStation: number, direction: number) {
    let nextStation = currentStation + direction;
    console.log(
      ReactDOMServer.renderToStaticMarkup(
        this.path.getPathSegment(currentStation, nextStation)
      )
    );
    const path = anime.path(
      this.path.getPathSegment(currentStation, nextStation)
    );
    anime({
      targets: `#train-${this.id}.${TRAIN_CLASSNAME}`,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      easing: "easeInOutQuad",
      duration: 1000,
      complete: () => {
        currentStation = nextStation;
        // // Reverse direction if at the beginning or end of the stations
        if (
          currentStation === 0 ||
          currentStation === this.path.stations.length - 1
        ) {
          direction *= -1;
        }
        // Pause at each station
        setTimeout(() => this.animateTrain(currentStation, direction), 500);
      },
    });
  }

  draw() {
    const startingStation = this.path.stations[0];
    return (
      <g
        id={`train-${this.id}`}
        className={TRAIN_CLASSNAME}
        x={startingStation.x}
        y={startingStation.y}
      >
        <circle r="5" fill={this.styles.color} />
        <text textAnchor="middle" dy=".3em" fill="white" fontSize="5">
          {this.id}
        </text>
      </g>
    );
  }
}

export default Train;
