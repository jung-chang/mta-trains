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
    "M907 456C907 456 807.5 555.5 800 563C792.5 570.5 792.5 570.5 792.5 581C792.5 591.5 792.5 616 792.5 624.5C792.5 633 792.5 638 784.5 646C776.5 654 740 690.5 726.5 704C713 717.5 711.5 719 699.5 719C687.5 719 336.5 719 324 719C311.5 719 311.5 719 311.5 731.5C311.5 744 311.5 848.5 311.5 848.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  {
    name: "Jamaica Center - Parsons/Archer",
    x: 907.5,
    y: 455.5,
    lengthFromStart: 0,
  },
  {
    name: "Sutphin Blvd - Archer Av - JFK Airport",
    x: 887.5,
    y: 475.5,
    lengthFromStart: 20,
  },
  { name: "121st St", x: 857.5, y: 505.5, lengthFromStart: 50 },
  { name: "111th St", x: 826.5, y: 536.5, lengthFromStart: 81 },
  { name: "104th St", x: 810.5, y: 552.5, lengthFromStart: 97 },
  { name: "Woodhaven Blvd", x: 792.5, y: 581, lengthFromStart: 125 },
  { name: "85th St - Forest Pkwy", x: 792.5, y: 626, lengthFromStart: 170 },
  { name: "75th St - Elderts Ln", x: 779.5, y: 651, lengthFromStart: 195 },
  { name: "Cypress Hills", x: 752.5, y: 678, lengthFromStart: 222 },
  { name: "Crescent St", x: 739.5, y: 691, lengthFromStart: 235 },
  { name: "Norwood Av", x: 715.5, y: 714.5, lengthFromStart: 258 },
  { name: "Cleveland St", x: 672.5, y: 719, lengthFromStart: 305 },
  { name: "Van Siclen Av", x: 616.5, y: 719, lengthFromStart: 361 },
  { name: "Alabama Av", x: 560.5, y: 719, lengthFromStart: 417 },
  { name: "Broadway Junction", x: 441, y: 719, lengthFromStart: 536 },
  { name: "Chauncey St", x: 383, y: 719, lengthFromStart: 594 },
  { name: "Halsey St", x: 324.5, y: 719, lengthFromStart: 653 },
  { name: "Gates Av", x: 311.5, y: 729.5, lengthFromStart: 667 },
  { name: "Kosciuszko St", x: 311.5, y: 753.5, lengthFromStart: 691 },
  { name: "Myrtle Av", x: 311.5, y: 814.5, lengthFromStart: 752 },
  { name: "Flushing Av", x: 311.5, y: 849.5, lengthFromStart: 787 },
];
