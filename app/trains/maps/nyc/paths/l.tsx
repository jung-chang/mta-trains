import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#949598";
export const trainColor = "#949598";
export const stationColor = "black";
export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-7");
  path.setAttribute(
    "d",
    "M122.5 637C122.5 637 417.5 637 421 637C424.5 637 424.5 636.5 429 632C433.5 627.5 446 615 448.5 612.5C451 610 453.5 609.5 457.5 612.5C461.5 615.5 477 632 479 634C481 636 482 637 489 637C496 637 630.5 637 638 637C645.5 637 648 638.5 652 642.5C656 646.5 818.5 809 822.5 813C826.5 817 826.5 819.5 826.5 824.5C826.5 829.5 826.5 866.5 826.5 866.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "8th Avenue", x: 122.5, y: 636.5, lengthFromStart: 0 },
  { name: "6th Avenue", x: 197.5, y: 636.5, lengthFromStart: 75 },
  { name: "Union Square", x: 300.5, y: 636.5, lengthFromStart: 178 },
  { name: "3rd Avenue", x: 320.5, y: 636.5, lengthFromStart: 198 },
  { name: "1st Avenue", x: 341.5, y: 636.5, lengthFromStart: 219 },
  { name: "Bedford Avenue", x: 391.5, y: 636.5, lengthFromStart: 269 },
  { name: "Lorimer Street", x: 432.5, y: 628.5, lengthFromStart: 310 },
  { name: "Graham Avenue", x: 452.5, y: 610.5, lengthFromStart: 331 },
  { name: "Grand Street", x: 469.5, y: 624.5, lengthFromStart: 347 },
  { name: "Montrose Avenue", x: 489.5, y: 637, lengthFromStart: 367 },
  { name: "Morgan Avenue", x: 521.5, y: 637, lengthFromStart: 399 },
  { name: "Jefferson Street", x: 547.5, y: 637, lengthFromStart: 425 },
  { name: "DeKalb Avenue", x: 577.5, y: 637, lengthFromStart: 455 },
  { name: "Myrtle - Wyckoff Avenues", x: 604.5, y: 637, lengthFromStart: 482 },
  { name: "Halsey Street", x: 638.5, y: 637, lengthFromStart: 516 },
  { name: "Wilson Avenue", x: 664, y: 654.5, lengthFromStart: 541 },
  {
    name: "Bushwick Avenue - Aberdeen Street",
    x: 686,
    y: 676.5,
    lengthFromStart: 563,
  },
  { name: "Broadway Junction", x: 716, y: 706.5, lengthFromStart: 593 },
  { name: "Atlantic Avenue", x: 752, y: 742.5, lengthFromStart: 629 },
  { name: "Sutter Avenue", x: 779, y: 769.5, lengthFromStart: 656 },
  { name: "Livonia Avenue", x: 804, y: 794.5, lengthFromStart: 681 },
  { name: "New Lots Avenue", x: 823.5, y: 814.5, lengthFromStart: 700 },
  { name: "East 105th Street", x: 826.5, y: 841.5, lengthFromStart: 727 },
  {
    name: "Canarsie - Rockaway Parkway",
    x: 826.5,
    y: 866.5,
    lengthFromStart: 752,
  },
];
