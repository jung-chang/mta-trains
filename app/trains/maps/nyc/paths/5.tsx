import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#009963";
export const trainColor = "#009963";
export const stationColor = "black";
export const stations: IStation[] = [
  { name: "Eastchester-Dyre Ave", x: 436, y: 61.5, lengthFromStart: 0 },
  { name: "Baychester Ave", x: 436, y: 88.5, lengthFromStart: 27 },
  { name: "Gun Hill Rd", x: 436, y: 114.5, lengthFromStart: 53 },
  { name: "Pelham Pkwy", x: 422.5, y: 148, lengthFromStart: 86 },
  { name: "Morris Park", x: 402.5, y: 168, lengthFromStart: 106 },
  { name: "Bronx Park East", x: 392.5, y: 180.5, lengthFromStart: 118 },
  { name: "E 180th St", x: 392, y: 193.5, lengthFromStart: 131 },
  {
    name: "West Farms Sq-E Tremont Ave",
    x: 392,
    y: 206.5,
    lengthFromStart: 144,
  },
  { name: "174th St", x: 392, y: 219.5, lengthFromStart: 157 },
  { name: "Freeman St", x: 392, y: 232.5, lengthFromStart: 170 },
  { name: "Simpson St", x: 392, y: 245.5, lengthFromStart: 183 },
  { name: "Intervale Ave", x: 392, y: 258.5, lengthFromStart: 196 },
  { name: "Prospect Ave", x: 374.5, y: 279.5, lengthFromStart: 217 },
  { name: "Jackson Ave", x: 329.5, y: 279.5, lengthFromStart: 262 },
  { name: "3rd Ave-149th St", x: 281.7, y: 284.5, lengthFromStart: 310 },
  {
    name: "149th St-Grand Concourse",
    x: 281.5,
    y: 303.5,
    lengthFromStart: 329,
  },
  { name: "125th St", x: 281.5, y: 332.5, lengthFromStart: 358 },
  { name: "86th St", x: 281.5, y: 393.5, lengthFromStart: 419 },
  { name: "59th St", x: 281.5, y: 471.5, lengthFromStart: 497 },
  { name: "42nd St-Grand Central", x: 281.5, y: 529.5, lengthFromStart: 555 },
  { name: "14th St-Union Square", x: 281.5, y: 637, lengthFromStart: 663 },
  {
    name: "Brooklyn Bridge-City Hall",
    x: 281.5,
    y: 753.5,
    lengthFromStart: 779,
  },
  { name: "Fulton St", x: 281.5, y: 814.5, lengthFromStart: 840 },
  { name: "Wall St", x: 281.5, y: 834.5, lengthFromStart: 860 },
  { name: "Bowling Green", x: 281.5, y: 858.5, lengthFromStart: 884 },
  { name: "Borough Hall", x: 394.5, y: 889, lengthFromStart: 1015 },
  { name: "Nevins St", x: 454.5, y: 889, lengthFromStart: 1075 },
  {
    name: "Atlantic Ave-Barclays Center",
    x: 514,
    y: 901.5,
    lengthFromStart: 1137,
  },
  { name: "Franklin Ave", x: 596.5, y: 922, lengthFromStart: 1238 },
  { name: "President St", x: 653.5, y: 938.5, lengthFromStart: 1299 },
  { name: "Sterling St", x: 666.5, y: 951.5, lengthFromStart: 1312 },
  { name: "Winthrop St", x: 679.5, y: 964.5, lengthFromStart: 1325 },
  { name: "Church Ave", x: 692.5, y: 977.5, lengthFromStart: 1338 },
  { name: "Beverly Rd", x: 705.5, y: 990.5, lengthFromStart: 1351 },
  { name: "Newkirk Ave", x: 718.5, y: 1003.5, lengthFromStart: 1364 },
  {
    name: "Flatbush Ave-Brooklyn College",
    x: 732.5,
    y: 1017.5,
    lengthFromStart: 1378,
  },
];

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-5");
  path.setAttribute(
    "d",
    "M436 62C436 62 436 114.5 436 124.5C436 134.5 436 134.5 427 143.5C418 152.5 413 157.5 402.5 168C392 178.5 392 178.5 392 187.5C392 196.5 392 241 392 258.5C392 276 392 279.5 371 279.5C350 279.5 302.5 279.5 292 279.5C281.5 279.5 281.5 279.5 281.5 290C281.5 300.5 281.5 864 281.5 876.5C281.5 889 281.5 889 294 889C306.5 889 471.5 889 486.5 889C501.5 889 501.5 889 509.5 897C517.5 905 527.5 915 531 918.5C534.5 922 534 922 564.5 922C595 922 611 922 624 922C637 922 637 922 649.5 934.5C662 947 732 1017 732 1017"
  );
  path.setAttribute("stroke", "#00A56C");
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}
