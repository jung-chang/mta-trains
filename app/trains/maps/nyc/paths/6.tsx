import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#00A56C";
export const trainColor = "#00A56C";
export const stationColor = "black";
export const stations: IStation[] = [
  { name: "Pelham Bay Park", x: 555.5, y: 118.5, lengthFromStart: 0 },
  { name: "Buhre Ave", x: 543.5, y: 130.5, lengthFromStart: 12 },
  { name: "Middletown Rd", x: 533.5, y: 140.5, lengthFromStart: 24 },
  {
    name: "Westchester Sq-E Tremont Ave",
    x: 523.5,
    y: 150.5,
    lengthFromStart: 36,
  },
  { name: "Zerega Ave", x: 511.5, y: 162.5, lengthFromStart: 48 },
  { name: "Castle Hill Ave", x: 502.5, y: 171.5, lengthFromStart: 60 },
  { name: "Parkchester", x: 491.5, y: 182.5, lengthFromStart: 72 },
  { name: "St Lawrence Ave", x: 480.5, y: 193.5, lengthFromStart: 84 },
  { name: "Morrison Ave-Soundview", x: 470.5, y: 203.5, lengthFromStart: 96 },
  { name: "Elder Ave", x: 459.5, y: 214.5, lengthFromStart: 108 },
  { name: "Whitlock Ave", x: 450.5, y: 223.5, lengthFromStart: 120 },
  { name: "Hunts Point Ave", x: 446, y: 238.5, lengthFromStart: 132 },
  { name: "Longwood Ave", x: 446, y: 251.5, lengthFromStart: 144 },
  { name: "E 149th St", x: 446, y: 264.5, lengthFromStart: 156 },
  { name: "E 138th St-3rd Ave", x: 446, y: 278.5, lengthFromStart: 168 },
  { name: "125th St", x: 416.5, y: 303, lengthFromStart: 180 },
  { name: "116th St", x: 374.5, y: 303, lengthFromStart: 192 },
  { name: "110th St", x: 329.5, y: 303, lengthFromStart: 204 },
  { name: "103rd St", x: 287.5, y: 332.5, lengthFromStart: 216 },
  { name: "96th St", x: 287.5, y: 345.5, lengthFromStart: 228 },
  { name: "86th St", x: 287.5, y: 356.5, lengthFromStart: 240 },
  { name: "77th St", x: 287.5, y: 369.5, lengthFromStart: 252 },
  { name: "68th St-Hunter College", x: 287.5, y: 381.5, lengthFromStart: 264 },
  { name: "59th St", x: 287.5, y: 393.5, lengthFromStart: 276 },
  { name: "51st St", x: 287.5, y: 406.5, lengthFromStart: 288 },
  { name: "Grand Central-42nd St", x: 287.5, y: 423.5, lengthFromStart: 300 },
  { name: "33rd St", x: 287.5, y: 471.5, lengthFromStart: 312 },
  { name: "28th St", x: 287.5, y: 502.5, lengthFromStart: 324 },
  { name: "23rd St", x: 287.5, y: 529.5, lengthFromStart: 336 },
  { name: "14th St-Union Square", x: 287.5, y: 575.5, lengthFromStart: 348 },
  { name: "Astor Pl", x: 287.5, y: 591.5, lengthFromStart: 360 },
  { name: "Bleecker St", x: 287.5, y: 606.5, lengthFromStart: 372 },
  { name: "Spring St", x: 287.5, y: 637, lengthFromStart: 384 },
  { name: "Canal St", x: 287.5, y: 650.5, lengthFromStart: 396 },
  {
    name: "Brooklyn Bridge-City Hall",
    x: 287.5,
    y: 668.5,
    lengthFromStart: 408,
  },
  { name: "Fulton St", x: 287.5, y: 704.5, lengthFromStart: 420 },
  { name: "Wall St", x: 287.5, y: 729.5, lengthFromStart: 432 },
  { name: "Bowling Green", x: 287.5, y: 753.5, lengthFromStart: 444 },
];

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-6");
  path.setAttribute(
    "d",
    "M555 119C555 119 461 213 453.5 220.5C446 228 446 228 446 239.5C446 251 446 273 446 288C446 303 446 303 431 303C416 303 326.5 303 307 303C287.5 303 287.5 303 287.5 322.5C287.5 342 287.5 753.5 287.5 753.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}
