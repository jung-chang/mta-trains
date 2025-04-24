import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#F6871F";
export const trainColor = "#F6871F";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-d");
  path.setAttribute(
    "d",
    "M293.5 101.5C293.5 101.5 285.5 101.5 280.5 101.5C275.5 101.5 275.5 101.5 275.5 106.5C275.5 111.5 274.995 218.485 275.5 232.5C276.005 246.515 272.055 249.922 258.5 249.5C258.5 249.5 149.5 249.5 139 249.5C128.5 249.5 120.5 254.5 120.5 268C120.5 281.5 120.5 449 120.5 466C120.5 483 120.5 483 137.5 483C154.5 483 186.5 483 196.5 483C206.5 483 210 486 210 496.5C210 507 210 662 210 673.5C210 685 222 689.5 226 689.5C230 689.5 309 689.5 319 689.5C329 689.5 329.5 691 339.5 701C349.5 711 481.5 843 487.5 849C493.5 855 493.5 855 493.5 869C493.5 883 493.5 1002.5 493.5 1013C493.5 1023.5 493.5 1023.5 505 1035C516.5 1046.5 643.5 1173.5 643.5 1173.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Norwood - 205th Street", x: 293.5, y: 101.5, lengthFromStart: 0 },
  { name: "Bedford Park Blvd", x: 275.5, y: 114.5, lengthFromStart: 20 },
  { name: "Kingsbridge Road", x: 275.5, y: 127.5, lengthFromStart: 40 },
  { name: "Fordham Road", x: 275.5, y: 140.5, lengthFromStart: 60 },
  { name: "182nd-183rd Streets", x: 275.5, y: 153.5, lengthFromStart: 80 },
  { name: "Tremont Avenue", x: 275.5, y: 166.5, lengthFromStart: 100 },
  { name: "174th-175th Streets", x: 275.5, y: 179.5, lengthFromStart: 120 },
  { name: "170th Street", x: 275.5, y: 206.5, lengthFromStart: 140 },
  { name: "167th Street", x: 275.5, y: 219.5, lengthFromStart: 160 },
  {
    name: "161st Street - Yankee Stadium",
    x: 240.5,
    y: 249.5,
    lengthFromStart: 180,
  },
  { name: "155th Street", x: 139.5, y: 249.5, lengthFromStart: 200 },
  { name: "145th Street", x: 120.5, y: 297.5, lengthFromStart: 220 },
  { name: "125th Street", x: 120.5, y: 332.5, lengthFromStart: 240 },
  {
    name: "59th Street - Columbus Circle",
    x: 120.5,
    y: 466.5,
    lengthFromStart: 260,
  },
  { name: "7th Avenue", x: 146.5, y: 482.5, lengthFromStart: 280 },
  {
    name: "47th-50th Streets - Rockefeller Center",
    x: 210,
    y: 502.5,
    lengthFromStart: 300,
  },
  { name: "42nd Street - Bryant Park", x: 210, y: 530.5, lengthFromStart: 320 },
  {
    name: "34th Street - Herald Square",
    x: 210,
    y: 565.5,
    lengthFromStart: 340,
  },
  {
    name: "West 4th Street - Washington Square",
    x: 210,
    y: 673.5,
    lengthFromStart: 360,
  },
  {
    name: "Broadway-Lafayette Street",
    x: 294.5,
    y: 689.5,
    lengthFromStart: 380,
  },
  { name: "Grand Street", x: 364, y: 725.5, lengthFromStart: 400 },
  {
    name: "Atlantic Avenue - Barclays Center",
    x: 493.7,
    y: 1020.5,
    lengthFromStart: 420,
  },
  { name: "36th Street", x: 504.5, y: 1034.5, lengthFromStart: 440 },
  { name: "9th Avenue", x: 516.5, y: 1046.5, lengthFromStart: 460 },
  { name: "Fort Hamilton Parkway", x: 527.5, y: 1057.5, lengthFromStart: 480 },
  { name: "50th Street", x: 539.5, y: 1069.5, lengthFromStart: 500 },
  { name: "55th Street", x: 551.5, y: 1081.5, lengthFromStart: 520 },
  { name: "62nd Street", x: 562.5, y: 1092.5, lengthFromStart: 540 },
  { name: "71st Street", x: 574.5, y: 1104.5, lengthFromStart: 560 },
  { name: "79th Street", x: 586.5, y: 1116.5, lengthFromStart: 580 },
  { name: "86th Street", x: 597.5, y: 1127.5, lengthFromStart: 600 },
  { name: "Bay Parkway", x: 609.5, y: 1139.5, lengthFromStart: 620 },
  { name: "20th Avenue", x: 620.5, y: 1150.5, lengthFromStart: 640 },
  { name: "18th Avenue", x: 632.5, y: 1162.5, lengthFromStart: 660 },
  { name: "New Utrecht Avenue", x: 643.5, y: 1173.5, lengthFromStart: 680 },
];
