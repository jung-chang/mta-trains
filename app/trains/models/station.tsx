export const TRAIN_STATION_CLASSNAME = "train-station";
export const TRAIN_STATION_LABEL_CLASSNAME = "train-station-label";

export interface IStation {
  name: string;
  x: number;
  y: number;
  handicap?: boolean;
  lengthFromStart?: number;
}

class Station {
  constructor(
    public id: string,
    public name: string,
    public trainPathName: string,
    public x: number,
    public y: number,
    public handicap: boolean = false,
    public color: string = "black"
  ) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.handicap = handicap;
    this.color = color;
  }

  draw(showLabel = true) {
    return (
      <g style={{ cursor: "pointer" }}>
        <circle
          cx={this.x}
          cy={this.y}
          r="2"
          fill={this.color}
          className={TRAIN_STATION_CLASSNAME}
        />
        <text
          x={this.x}
          y={this.y + 1}
          textAnchor="middle"
          fontSize="3"
          fill="white"
        >
          {this.trainPathName}
        </text>
        {showLabel && (
          <g>
            <text
              className={TRAIN_STATION_LABEL_CLASSNAME}
              textAnchor="end"
              fontSize="6"
              fill="black"
            >
              <tspan x={this.x - 12} y={this.y}>
                {this.name}
              </tspan>
            </text>
            {this.handicap && (
              <image
                x={this.x - 10}
                y={this.y - 5}
                width="6"
                height="6"
                xlinkHref="/icons/handicap.png"
              />
            )}
          </g>
        )}
      </g>
    );
  }
}

export default Station;
