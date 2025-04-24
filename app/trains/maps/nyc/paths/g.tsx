import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#71B340";
export const trainColor = "#71B340";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-g");
  path.setAttribute(
    "d",
    "M576.5 1022.5C576.5 1022.5 541 987 535.5 981.5C530 976 526 976 505.5 976C485 976 448 976 439 976C430 976 428 974.5 428 965C428 955.5 428 964 428 954C428 944 428 944 438 944C448 944 440.5 944 451 944C461.5 944 461.5 944 469 936.5C476.5 929 501 904.5 511 894.5C521 884.5 521 884.5 521 860.5C521 836.5 521 753 521 741.5C521 730 521 730 505 714C489 698 416 625 404 613C392 601 392 601 392 592C392 583 392 525 392 516C392 507 393.5 507 401 507C408.5 507 409.5 507 409.5 507"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Church Avenue", x: 576.5, y: 1022.5, lengthFromStart: 0 },
  { name: "Beverly Road", x: 559.5, y: 1005.5, lengthFromStart: 17 },
  { name: "Cortelyou Road", x: 543.5, y: 989.5, lengthFromStart: 33 },
  { name: "Ditmas Avenue", x: 507.5, y: 976, lengthFromStart: 50 },
  { name: "Fort Hamilton Parkway", x: 475.5, y: 976, lengthFromStart: 67 },
  {
    name: "15th Street - Prospect Park",
    x: 440.5,
    y: 976,
    lengthFromStart: 84,
  },
  { name: "7th Avenue", x: 428, y: 969.5, lengthFromStart: 101 },
  { name: "Smith - 9th Streets", x: 428, y: 955.5, lengthFromStart: 118 },
  { name: "Carroll Street", x: 437.5, y: 944, lengthFromStart: 135 },
  { name: "Bergen Street", x: 521, y: 839.5, lengthFromStart: 152 },
  {
    name: "Hoyt - Schermerhorn Streets",
    x: 521,
    y: 817.5,
    lengthFromStart: 169,
  },
  { name: "Fulton Street", x: 521, y: 797.5, lengthFromStart: 186 },
  { name: "Broadway", x: 521, y: 777.5, lengthFromStart: 203 },
  { name: "Flushing Avenue", x: 521, y: 758.5, lengthFromStart: 220 },
  {
    name: "Myrtle - Willoughby Avenues",
    x: 521,
    y: 739.5,
    lengthFromStart: 237,
  },
  {
    name: "Bedford - Nostrand Avenues",
    x: 477.5,
    y: 686.5,
    lengthFromStart: 254,
  },
  { name: "Classon Avenue", x: 432.5, y: 641.5, lengthFromStart: 271 },
  {
    name: "Clinton - Washington Avenues",
    x: 396.5,
    y: 605.5,
    lengthFromStart: 288,
  },
  { name: "Fulton Street", x: 392, y: 581.5, lengthFromStart: 305 },
  { name: "Lafayette Avenue", x: 392, y: 513.5, lengthFromStart: 322 },
  { name: "Metropolitan Avenue", x: 409.5, y: 507, lengthFromStart: 339 },
];
