import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#A67532";
export const trainColor = "#A67532";
export const stationColor = "black";
export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-1");
  path.setAttribute(
    "d",
    "M305.5 849C305.5 849 305.5 746 305.5 729.5C305.5 713 309.5 713 325 713C340.5 713 689.5 713 700 713C710.5 713 712 709.5 719 702.5C726 695.5 765 656.5 774 647.5C783 638.5 786 636.5 786 626.5C786 616.5 786 590 786 581C786 572 786 568.5 790 564.5C794 560.5 903 451.5 903 451.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  {
    name: "Broad St",
    x: 305.5,
    y: 849.5,
    lengthFromStart: 0,
  },
  {
    name: "Fulton St",
    x: 305.5,
    y: 814.5,
    lengthFromStart: 35,
  },
  { name: "Chambers St", x: 305.5, y: 753.5, lengthFromStart: 96 },
  { name: "Canal St", x: 305.5, y: 729.5, lengthFromStart: 120 },
  { name: "Bowery", x: 324.5, y: 713, lengthFromStart: 136 },
  { name: "Essex St", x: 383.5, y: 713, lengthFromStart: 195 },
  { name: "Marcy Av", x: 441, y: 713, lengthFromStart: 253 },
  { name: "Hewes St", x: 466, y: 713, lengthFromStart: 278 },
  { name: "Lorimer St", x: 514.5, y: 713, lengthFromStart: 326 },
  { name: "Flushing Av", x: 537.5, y: 713, lengthFromStart: 349 },
  { name: "Myrtle Av", x: 560.5, y: 713, lengthFromStart: 372 },
  { name: "Kosciuszko St", x: 588.5, y: 713, lengthFromStart: 400 },
  { name: "Gates Av", x: 616.5, y: 713, lengthFromStart: 428 },
  { name: "Halsey St", x: 644.5, y: 713, lengthFromStart: 456 },
  { name: "Chauncey St", x: 672.5, y: 713, lengthFromStart: 484 },
  { name: "Broadway Junction", x: 711.5, y: 710, lengthFromStart: 523 },
  { name: "Alabama Av", x: 735.5, y: 686, lengthFromStart: 547 },
  { name: "Van Siclen Av", x: 748.5, y: 673, lengthFromStart: 560 },
  { name: "Cleveland St", x: 761.5, y: 660, lengthFromStart: 573 },
  { name: "Norwood Av", x: 774.5, y: 647, lengthFromStart: 586 },
  { name: "Crescent St", x: 786, y: 626, lengthFromStart: 607 },
  { name: "Cypress Hills", x: 786, y: 603.5, lengthFromStart: 629 },
  { name: "75th St - Elderts Ln", x: 786, y: 581, lengthFromStart: 651 },
  { name: "85th St - Forest Pkwy", x: 790, y: 564.5, lengthFromStart: 667 },
  { name: "Woodhaven Blvd", x: 806, y: 548.5, lengthFromStart: 683 },
  { name: "104th St", x: 822, y: 532.5, lengthFromStart: 699 },
  { name: "111th St", x: 837, y: 517.5, lengthFromStart: 714 },
  { name: "121st St", x: 853, y: 501.5, lengthFromStart: 730 },
  {
    name: "Sutphin Blvd - Archer Av - JFK Airport",
    x: 883,
    y: 471.5,
    lengthFromStart: 760,
  },
  {
    name: "Jamaica Center - Parsons/Archer",
    x: 903,
    y: 451.5,
    lengthFromStart: 780,
  },
];
