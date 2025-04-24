import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#015EAC";
export const trainColor = "#015EAC";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-e");
  path.setAttribute(
    "d",
    "M898.5 447C898.5 447 875.5 470 869.5 476C863.5 482 863.5 482 857.5 476C851.5 470 822 440.5 813.5 432C805 423.5 805 423.5 790.5 423.5C776 423.5 535.5 423.5 525 423.5C514.5 423.5 514.5 423.5 506 432C497.5 440.5 456 482 450 488C444 494 441 495 432 495C423 495 142.5 495 128.5 495C114.5 495 114.5 495 114.5 509C114.5 523 114.5 578 114.5 578C114.5 578 114.5 625 114.5 640C114.5 655 114.5 655 129.5 655C144.5 655 172 655 177 655C182 655 198 655 198 676C198 697 198 797.5 198 806C198 814.5 204 814.5 204 814.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  {
    name: "Jamaica Center - Parsons/Archer",
    x: 899,
    y: 446.5,
    lengthFromStart: 0,
  },
  {
    name: "Sutphin Blvd - Archer Av - JFK Airport",
    x: 879,
    y: 466.5,
    lengthFromStart: 10,
  },
  { name: "Jamaica - Van Wyck", x: 829, y: 447.5, lengthFromStart: 20 },
  { name: "Kew Gardens - Union Tpke", x: 781.5, y: 423.5, lengthFromStart: 30 },
  { name: "Forest Hills - 71 Av", x: 742.5, y: 423.5, lengthFromStart: 40 },
  {
    name: "Jackson Heights - Roosevelt Av",
    x: 600.5,
    y: 423.5,
    lengthFromStart: 50,
  },
  { name: "Queens Plaza", x: 477.5, y: 460.5, lengthFromStart: 60 },
  { name: "Court Sq - 23 St", x: 410.5, y: 495, lengthFromStart: 70 },
  { name: "Lexington Av/53 St", x: 293.5, y: 495, lengthFromStart: 80 },
  { name: "5 Av/53 St", x: 249.5, y: 495, lengthFromStart: 90 },
  { name: "7 Av", x: 147.5, y: 495, lengthFromStart: 100 },
  { name: "50 St", x: 114.5, y: 502.5, lengthFromStart: 110 },
  {
    name: "42 St - Port Authority Bus Terminal",
    x: 114.5,
    y: 530.5,
    lengthFromStart: 120,
  },
  { name: "34 St - Penn Station", x: 114.5, y: 575.5, lengthFromStart: 130 },
  { name: "23 St", x: 114.5, y: 615, lengthFromStart: 140 },
  { name: "14 St", x: 114.5, y: 636.5, lengthFromStart: 150 },
  { name: "Spring St", x: 198, y: 673.5, lengthFromStart: 160 },
  { name: "Canal St", x: 198, y: 704.5, lengthFromStart: 170 },
  { name: "World Trade Center", x: 198, y: 730.5, lengthFromStart: 180 },
];
