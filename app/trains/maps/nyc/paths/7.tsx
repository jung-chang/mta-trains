import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#AD3A95";
export const trainColor = "#AD3A95";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-7");
  path.setAttribute(
    "d",
    "M57.5 560.5C57.5 560.5 57.5 544 57.5 539.5C57.5 535 60 531 66 531C72 531 405 531 409.5 531C414 531 416 530 416 524.5C416 519 416 488 416 483.5C416 479 416.5 477.5 422 477.5C427.5 477.5 511.5 477.5 516 477.5C520.5 477.5 523.5 475 525.5 473C527.5 471 680 318.5 680 318.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "34th Street - Hudson Yards", x: 57.5, y: 560.5, lengthFromStart: 0 },
  { name: "Times Square - 42nd Street", x: 138.5, y: 531, lengthFromStart: 81 },
  { name: "5th Avenue", x: 249.5, y: 531, lengthFromStart: 192 },
  {
    name: "Grand Central - 42nd Street",
    x: 374.5,
    y: 531,
    lengthFromStart: 317,
  },
  {
    name: "Vernon Boulevard - Jackson Avenue",
    x: 400.5,
    y: 531,
    lengthFromStart: 343,
  },
  { name: "Hunters Point Avenue", x: 416, y: 507.5, lengthFromStart: 368 },
  { name: "Court Square", x: 439.5, y: 477.5, lengthFromStart: 401 },
  { name: "Queensboro Plaza", x: 481.5, y: 477.5, lengthFromStart: 443 },
  {
    name: "33rd Street - Rawson Street",
    x: 506.5,
    y: 477.5,
    lengthFromStart: 468,
  },
  {
    name: "40th Street - Lowery Street",
    x: 526,
    y: 472.5,
    lengthFromStart: 488,
  },
  {
    name: "46th Street - Bliss Street",
    x: 537,
    y: 461.5,
    lengthFromStart: 499,
  },
  { name: "52nd Street", x: 549, y: 449.5, lengthFromStart: 511 },
  { name: "61st Street - Woodside", x: 562, y: 436.5, lengthFromStart: 524 },
  { name: "69th Street", x: 602, y: 396.5, lengthFromStart: 564 },
  { name: "74th Street - Broadway", x: 619, y: 379.5, lengthFromStart: 581 },
  {
    name: "82nd Street - Jackson Heights",
    x: 629,
    y: 369.5,
    lengthFromStart: 591,
  },
  {
    name: "90th Street - Elmhurst Avenue",
    x: 640,
    y: 358.5,
    lengthFromStart: 602,
  },
  { name: "Junction Boulevard", x: 649, y: 349.5, lengthFromStart: 611 },
  {
    name: "103rd Street - Corona Plaza",
    x: 660,
    y: 338.5,
    lengthFromStart: 622,
  },
  { name: "111th Street", x: 670, y: 328.5, lengthFromStart: 632 },
  { name: "Mets - Willets Point", x: 680, y: 318.5, lengthFromStart: 642 },
];
