import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#FFD301";
export const trainColor = "#FFD301";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-w");
  path.setAttribute(
    "d",
    "M446 345C446 345 446 443 446 450.5C446 458 444.5 459.5 437 459.5C429.5 459.5 195.5 459.5 185 459.5C174.5 459.5 168.5 459.5 168.5 476C168.5 492.5 168.5 524.5 168.5 530.5C168.5 536.5 172 543 174.5 545.5C177 548 237.5 608.5 244 615C250.5 621.5 252 626 252 633C252 640 252 843.5 252 853C252 862.5 252 863 253.5 863C255 863 258.5 863 258.5 863"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Astoria - Ditmars Blvd", x: 446, y: 345, lengthFromStart: 0 },
  { name: "Astoria Blvd", x: 446, y: 363.5, lengthFromStart: 20 },
  { name: "30th Avenue", x: 446, y: 380.5, lengthFromStart: 40 },
  { name: "Broadway", x: 446, y: 398.5, lengthFromStart: 60 },
  { name: "Queensboro Plaza", x: 446, y: 416.5, lengthFromStart: 80 },
  {
    name: "Lexington Avenue - 59th Street",
    x: 446,
    y: 435.5,
    lengthFromStart: 100,
  },
  {
    name: "5th Avenue - 59th Street",
    x: 439.5,
    y: 459.5,
    lengthFromStart: 120,
  },
  {
    name: "Times Square - 42nd Street",
    x: 294.5,
    y: 459.5,
    lengthFromStart: 160,
  },
  {
    name: "34th Street - Herald Square",
    x: 243.5,
    y: 459.5,
    lengthFromStart: 200,
  },
  {
    name: "14th Street - Union Square",
    x: 168.7,
    y: 471.5,
    lengthFromStart: 240,
  },
  { name: "Canal Street", x: 168.5, y: 502.5, lengthFromStart: 280 },
  { name: "City Hall", x: 168.5, y: 531, lengthFromStart: 320 },
  { name: "Cortlandt Street", x: 190, y: 561, lengthFromStart: 360 },
  { name: "Rector Street", x: 232.5, y: 603.5, lengthFromStart: 400 },
  { name: "Whitehall Street", x: 243.5, y: 614.5, lengthFromStart: 440 },
  { name: "Court Street", x: 252, y: 637, lengthFromStart: 480 },
  { name: "Jay Street - MetroTech", x: 252, y: 664.5, lengthFromStart: 520 },
  { name: "DeKalb Avenue", x: 252, y: 704.5, lengthFromStart: 560 },
  {
    name: "Atlantic Avenue - Barclays Center",
    x: 252,
    y: 729.5,
    lengthFromStart: 600,
  },
  { name: "Union Street", x: 252, y: 767.5, lengthFromStart: 640 },
  { name: "9th Street", x: 252, y: 834.5, lengthFromStart: 680 },
  { name: "Prospect Avenue", x: 252, y: 853.5, lengthFromStart: 720 },
  { name: "25th Street", x: 258.5, y: 863, lengthFromStart: 760 },
];
