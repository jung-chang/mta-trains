import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#F6871F";
export const trainColor = "#F6871F";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-b");
  path.setAttribute(
    "d",
    "M269.5 114.5C269.5 114.5 269.5 228 269.5 235C269.5 242 267.5 243 261.5 243C255.5 243 160.5 243 138.5 243C116.5 243 114 260.5 114 267.5C114 274.5 114 444 114 466.5C114 489 117.5 489 136.5 489C155.5 489 176.5 489 190 489C203.5 489 203.5 489 203.5 502.5C203.5 516 203.5 660 203.5 673.5C203.5 687 216.5 695 225 695C233.5 695 306 695 314.5 695C323 695 325.5 695.5 335 705C344.5 714.5 732 1102 732 1102"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "145th Street", x: 269.5, y: 114.5, lengthFromStart: 0 },
  { name: "135th Street", x: 269.5, y: 127.5, lengthFromStart: 20 },
  { name: "125th Street", x: 269.5, y: 140.5, lengthFromStart: 40 },
  { name: "116th Street", x: 269.5, y: 153.5, lengthFromStart: 60 },
  {
    name: "Cathedral Parkway - 110th Street",
    x: 269.5,
    y: 166.5,
    lengthFromStart: 80,
  },
  { name: "103rd Street", x: 269.5, y: 179.5, lengthFromStart: 100 },
  { name: "96th Street", x: 269.5, y: 206.5, lengthFromStart: 120 },
  { name: "86th Street", x: 269.5, y: 219.5, lengthFromStart: 140 },
  {
    name: "81st Street - Museum of Natural History",
    x: 240.5,
    y: 243,
    lengthFromStart: 160,
  },
  { name: "72nd Street", x: 139.5, y: 243, lengthFromStart: 180 },
  {
    name: "59th Street - Columbus Circle",
    x: 114,
    y: 297.5,
    lengthFromStart: 200,
  },
  { name: "50th Street", x: 114, y: 314.5, lengthFromStart: 220 },
  { name: "42nd Street - Bryant Park", x: 114, y: 332.5, lengthFromStart: 240 },
  {
    name: "34th Street - Herald Square",
    x: 114,
    y: 344.5,
    lengthFromStart: 260,
  },
  { name: "23rd Street", x: 114, y: 356.5, lengthFromStart: 280 },
  { name: "14th Street", x: 114, y: 368.5, lengthFromStart: 300 },
  {
    name: "West 4th Street - Washington Square",
    x: 114,
    y: 393.5,
    lengthFromStart: 320,
  },
  {
    name: "Broadway - Lafayette Street",
    x: 114,
    y: 408.5,
    lengthFromStart: 340,
  },
  { name: "Grand Street", x: 114, y: 423.5, lengthFromStart: 360 },
  { name: "DeKalb Avenue", x: 114, y: 438.5, lengthFromStart: 380 },
  {
    name: "Atlantic Avenue - Barclays Center",
    x: 114,
    y: 466.5,
    lengthFromStart: 400,
  },
  { name: "7th Avenue", x: 146.5, y: 489.5, lengthFromStart: 420 },
  { name: "Prospect Park", x: 203.5, y: 502.5, lengthFromStart: 440 },
  { name: "Church Avenue", x: 203.5, y: 565.5, lengthFromStart: 460 },
  { name: "Kings Highway", x: 203.5, y: 673.5, lengthFromStart: 480 },
  { name: "Sheepshead Bay", x: 294.5, y: 695, lengthFromStart: 500 },
  { name: "Brighton Beach", x: 359.5, y: 729.5, lengthFromStart: 520 },
  { name: "Ocean Parkway", x: 486.5, y: 856.5, lengthFromStart: 540 },
  {
    name: "West 8th Street - NY Aquarium",
    x: 522.5,
    y: 892.5,
    lengthFromStart: 560,
  },
  {
    name: "Coney Island - Stillwell Avenue",
    x: 542.5,
    y: 912.5,
    lengthFromStart: 580,
  },
  { name: "Gravesend - 86th Street", x: 600.5, y: 970.5, lengthFromStart: 600 },
  { name: "Bay Parkway", x: 620.5, y: 990.5, lengthFromStart: 620 },
  { name: "Avenue U", x: 648.5, y: 1018.5, lengthFromStart: 640 },
  { name: "Avenue X", x: 685.5, y: 1055.5, lengthFromStart: 660 },
  { name: "Neptune Avenue", x: 719.5, y: 1089.5, lengthFromStart: 680 },
  {
    name: "West 8th Street - NY Aquarium",
    x: 732.5,
    y: 1102.5,
    lengthFromStart: 700,
  },
];
