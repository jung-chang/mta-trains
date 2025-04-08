import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#009963";
export const trainColor = "#009963";
export const stationColor = "black";
export const stations: IStation[] = [
  { name: "Woodlawn", x: 246.5, y: 72.5, lengthFromStart: 0 },
  { name: "Mosholu Parkway", x: 246.5, y: 101.5, lengthFromStart: 29 },
  { name: "Bedford Park Blvd", x: 246.5, y: 114.5, lengthFromStart: 42 },
  { name: "Kingsbridge Rd", x: 246.5, y: 127.5, lengthFromStart: 55 },
  { name: "Fordham Rd", x: 246.5, y: 140.5, lengthFromStart: 68 },
  { name: "183rd St", x: 246.5, y: 153.5, lengthFromStart: 81 },
  { name: "Burnside Ave", x: 246.5, y: 166.5, lengthFromStart: 94 },
  { name: "176th St", x: 246.5, y: 179.5, lengthFromStart: 107 },
  { name: "Mt Eden Ave", x: 246.5, y: 192.5, lengthFromStart: 120 },
  { name: "170th St", x: 246.5, y: 205.5, lengthFromStart: 133 },
  { name: "167th St", x: 246.5, y: 218.5, lengthFromStart: 146 },
  { name: "161st St-Yankee Stadium", x: 246.5, y: 243.5, lengthFromStart: 171 },
  {
    name: "149th St-Grand Concourse",
    x: 275.5,
    y: 284.5,
    lengthFromStart: 212,
  },
  {
    name: "138th St-Grand Concourse",
    x: 275.5,
    y: 303.5,
    lengthFromStart: 231,
  },
  { name: "125th St", x: 275.5, y: 332.5, lengthFromStart: 260 },
  { name: "86th St", x: 275.5, y: 393.5, lengthFromStart: 321 },
  { name: "59th St", x: 275.5, y: 471.5, lengthFromStart: 399 },
  { name: "42nd St-Grand Central", x: 275.5, y: 529.5, lengthFromStart: 457 },
  { name: "14th St-Union Square", x: 275.5, y: 637.5, lengthFromStart: 565 },
  {
    name: "Brooklyn Bridge-City Hall",
    x: 275.5,
    y: 753.5,
    lengthFromStart: 681,
  },
  { name: "Fulton St", x: 275.5, y: 814.5, lengthFromStart: 742 },
  { name: "Wall St", x: 275.5, y: 834.5, lengthFromStart: 762 },
  { name: "Bowling Green", x: 275.5, y: 858.5, lengthFromStart: 786 },
  { name: "Borough Hall", x: 394.5, y: 895, lengthFromStart: 823 },
  { name: "Nevins St", x: 453.5, y: 895, lengthFromStart: 882 },
  {
    name: "Atlantic Ave-Barclays Center",
    x: 508.5,
    y: 904.5,
    lengthFromStart: 937,
  },
  { name: "Franklin Ave", x: 596.5, y: 928, lengthFromStart: 1025 },
  { name: "New Lots Ave", x: 703.5, y: 862.5, lengthFromStart: 1132 },
];

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-4");
  path.setAttribute(
    "d",
    "M246.5 72.5C246.5 72.5 246.5 274.5 246.5 276.5C246.5 278.5 248 279.5 249.5 279.5C251 279.5 269.5 279.5 272.5 279.5C275.5 279.5 275.5 281 275.5 282.5C275.5 284 275.5 882 275.5 886.5C275.5 891 279.5 895 283.5 895C287.5 895 489 895 493.5 895C498 895 501.5 897.5 504 900C506.5 902.5 527 923 529.5 925.5C532 928 534.5 928 539 928C543.5 928 634 928 636 928C638 928 640 926 642.5 923.5C645 921 703.5 862.5 703.5 862.5"
  );
  path.setAttribute("stroke", "#00A56C");
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}
