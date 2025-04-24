import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#F6871F";
export const trainColor = "#F6871F";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-m");
  path.setAttribute(
    "d",
    "M742.5 411.5C742.5 411.5 492.5 411.5 485 411.5C477.5 411.5 475.5 414 475.5 421C475.5 428 475.5 441 475.5 446.5C475.5 452 475.5 454 469.5 460C463.5 466 448.5 481 444.5 485C440.5 489 438.5 489 429 489C419.5 489 241.5 489 232 489C222.5 489 222.5 489 222.5 498.5C222.5 508 222.5 658 222.5 667C222.5 676 222.5 677 232.5 677C242.5 677 306.5 677 316 677C325.5 677 328 680.5 336 688.5C344 696.5 339 691.5 346 698.5C353 705.5 354.5 707 370 707C385.5 707 557.5 707 557.5 707C568.5 707 572.5 706 577.5 701C582.5 696 595 683.5 603 675.5C611 667.5 611 663 611 657C611 651 611 539.5 611 539.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  {
    name: "Forest Hills - 71st Avenue",
    x: 742.5,
    y: 411.5,
    lengthFromStart: 0,
  },
  { name: "67th Avenue", x: 719.5, y: 411.5, lengthFromStart: 20 },
  { name: "63rd Drive - Rego Park", x: 696.5, y: 411.5, lengthFromStart: 40 },
  { name: "Woodhaven Blvd", x: 673.5, y: 411.5, lengthFromStart: 60 },
  { name: "Grand Avenue - Newtown", x: 649.5, y: 411.5, lengthFromStart: 80 },
  { name: "Elmhurst Avenue", x: 626.5, y: 411.5, lengthFromStart: 100 },
  {
    name: "Jackson Heights - Roosevelt Avenue",
    x: 600.5,
    y: 411.5,
    lengthFromStart: 120,
  },
  { name: "65th Street", x: 553.5, y: 411.5, lengthFromStart: 140 },
  { name: "Northern Blvd", x: 523.5, y: 411.5, lengthFromStart: 160 },
  { name: "46th Street", x: 494.5, y: 411.5, lengthFromStart: 180 },
  { name: "Steinway Street", x: 476, y: 416.5, lengthFromStart: 200 },
  { name: "36th Street", x: 475.5, y: 430.5, lengthFromStart: 220 },
  { name: "Queens Plaza", x: 472.7, y: 456.5, lengthFromStart: 240 },
  {
    name: "Lexington Avenue - 53rd Street",
    x: 409.5,
    y: 489,
    lengthFromStart: 260,
  },
  { name: "5th Avenue - 53rd Street", x: 293.5, y: 489, lengthFromStart: 280 },
  {
    name: "47th-50th Streets - Rockefeller Center",
    x: 249.5,
    y: 489,
    lengthFromStart: 300,
  },
  {
    name: "42nd Street - Bryant Park",
    x: 222.5,
    y: 502.5,
    lengthFromStart: 320,
  },
  {
    name: "34th Street - Herald Square",
    x: 222.5,
    y: 565.5,
    lengthFromStart: 340,
  },
  { name: "23rd Street", x: 222.5, y: 619.5, lengthFromStart: 360 },
  {
    name: "14th Street - Union Square",
    x: 222.7,
    y: 673.5,
    lengthFromStart: 380,
  },
  { name: "8th Street - NYU", x: 294.5, y: 677, lengthFromStart: 400 },
  { name: "Broadway - Lafayette Street", x: 383, y: 707, lengthFromStart: 420 },
  { name: "Grand Street", x: 441, y: 707, lengthFromStart: 440 },
  { name: "Essex Street", x: 466, y: 707, lengthFromStart: 460 },
  { name: "Delancey Street", x: 514.5, y: 707, lengthFromStart: 480 },
  { name: "Bowery", x: 537.5, y: 707, lengthFromStart: 500 },
  { name: "Canal Street", x: 560.5, y: 707, lengthFromStart: 520 },
  { name: "Chambers Street", x: 586.5, y: 692, lengthFromStart: 540 },
  { name: "Fulton Street", x: 604.5, y: 674, lengthFromStart: 560 },
  { name: "Broad Street", x: 611, y: 636.5, lengthFromStart: 580 },
  { name: "Wall Street", x: 611, y: 612.5, lengthFromStart: 600 },
  { name: "Rector Street", x: 611, y: 588.5, lengthFromStart: 620 },
  { name: "Whitehall Street", x: 611, y: 564.5, lengthFromStart: 640 },
  { name: "South Ferry", x: 611, y: 539.5, lengthFromStart: 660 },
];
