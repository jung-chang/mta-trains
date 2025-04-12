import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#EB0E44";
export const trainColor = "#EB0E44";
export const stationColor = "black";
export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-1");
  path.setAttribute(
    "d",
    "M78.5 73C78.5 73 78.5 433 78.5 438C78.5 443 78.5 448.5 83.5 453.5C88.5 458.5 136 506 139.5 509.5C143 513 144.5 515.5 144.5 518.5C144.5 521.5 144.5 793 144.5 800C144.5 807 145 809.5 149 813.5C153 817.5 222.5 887 225.5 890C228.5 893 231.5 895 235.5 895C239.5 895 258 895 258 895"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  {
    name: "Van Cortlandt Park - 242nd Street",
    x: 78.5,
    y: 72.5,
    lengthFromStart: 0,
  },
  { name: "238th Street", x: 78.5, y: 85.5, lengthFromStart: 13 },
  { name: "231st Street", x: 78.5, y: 99.5, lengthFromStart: 27 },
  {
    name: "Marble Hill - 225th Street",
    x: 78.5,
    y: 112.5,
    lengthFromStart: 40,
  },
  { name: "215th Street", x: 78.5, y: 143.5, lengthFromStart: 71 },
  { name: "207th Street", x: 78.5, y: 161.5, lengthFromStart: 89 },
  { name: "Dyckman Street", x: 78.5, y: 180.5, lengthFromStart: 108 },
  { name: "191st Street", x: 78.5, y: 198.5, lengthFromStart: 126 },
  { name: "181st Street", x: 78.5, y: 216.5, lengthFromStart: 144 },
  { name: "168th Street", x: 78.5, y: 236.5, lengthFromStart: 164 },
  { name: "157th Street", x: 78.5, y: 275.5, lengthFromStart: 203 },
  { name: "145th Street", x: 78.5, y: 297.5, lengthFromStart: 225 },
  {
    name: "137th Street - City College",
    x: 78.5,
    y: 313.5,
    lengthFromStart: 241,
  },
  { name: "125th Street", x: 78.5, y: 333.5, lengthFromStart: 261 },
  {
    name: "116th Street - Columbia University",
    x: 78.5,
    y: 345.5,
    lengthFromStart: 273,
  },
  {
    name: "Cathedral Parkway - 110th Street",
    x: 78.5,
    y: 356.5,
    lengthFromStart: 284,
  },
  { name: "103rd Street", x: 78.5, y: 369.5, lengthFromStart: 297 },
  { name: "96th Street", x: 78.5, y: 393.5, lengthFromStart: 321 },
  { name: "86th Street", x: 78.5, y: 408.5, lengthFromStart: 336 },
  { name: "79th Street", x: 78.5, y: 423.5, lengthFromStart: 351 },
  { name: "72nd Street", x: 78.5, y: 438.5, lengthFromStart: 366 },
  {
    name: "66th Street - Lincoln Center",
    x: 83.5,
    y: 453.5,
    lengthFromStart: 381,
  },
  {
    name: "59th Street - Columbus Circle",
    x: 96.5,
    y: 466.5,
    lengthFromStart: 394,
  },
  { name: "50th Street", x: 132.5, y: 502.5, lengthFromStart: 430 },
  {
    name: "Times Square - 42nd Street",
    x: 144.5,
    y: 530.5,
    lengthFromStart: 458,
  },
  {
    name: "34th Street - Penn Station",
    x: 144.5,
    y: 575.5,
    lengthFromStart: 503,
  },
  { name: "28th Street", x: 144.5, y: 603.5, lengthFromStart: 531 },
  { name: "23rd Street", x: 144.5, y: 615.5, lengthFromStart: 543 },
  { name: "18th Street", x: 144.5, y: 626.5, lengthFromStart: 554 },
  { name: "14th Street", x: 144.5, y: 695.5, lengthFromStart: 623 },
  {
    name: "Christopher Street - Sheridan Square",
    x: 144.5,
    y: 712.5,
    lengthFromStart: 640,
  },
  { name: "Houston Street", x: 144.5, y: 729.5, lengthFromStart: 657 },
  { name: "Canal Street", x: 144.5, y: 748.5, lengthFromStart: 676 },
  { name: "Franklin Street", x: 144.5, y: 768.5, lengthFromStart: 696 },
  { name: "Chambers Street", x: 170.5, y: 835, lengthFromStart: 762 },
  { name: "Cortlandt Street", x: 189.5, y: 854, lengthFromStart: 781 },
  { name: "Rector Street", x: 258.5, y: 895, lengthFromStart: 822 },
];
