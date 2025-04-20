import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#EB0E44";
export const trainColor = "#EB0E44";
export const stationColor = "black";
export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-1");
  path.setAttribute(
    "d",
    "M386 38.5C386 39.3 386 246 386 259.5C386 273 386 273 372.5 273C359 273 218.5 273 208.5 273C198.5 273 198.5 273 198.5 283C198.5 293 198.5 353 198.5 366C198.5 379 198.5 379 185.5 379C172.5 379 102.5 379 95.5 379C88.5 379 84.5 382 84.5 392.5C84.5 403 84.5 426.5 84.5 435C84.5 443.5 85.5 447 91 452.5C96.5 458 134.5 496 142.5 504C150.5 512 150.5 513 150.5 523C150.5 533 150.5 764.5 150.5 776.5C150.5 788.5 154 791 165 791C176 791 304.5 791 319.5 791C334.5 791 334.5 791 334.5 809C334.5 827 334.5 826 334.5 834.5C334.5 843 335.5 847.5 351 847.5C366.5 847.5 359.5 847.5 370.5 847.5C381.5 847.5 381.5 847.5 381.5 858.5C381.5 869.5 381.5 886.5 381.5 895.5C381.5 904.5 387 907.5 399.5 907.5C412 907.5 475.5 907.5 485.5 907.5C495.5 907.5 495.5 907.5 507 919C518.5 930.5 508 920 518 930C528 940 531 940 543 940C555 940 623.5 940 634.5 940C645.5 940 645.5 940 654 948.5C662.5 957 727 1021.5 727 1021.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Wakefield - 241st Street", x: 386, y: 38.5, lengthFromStart: 0 },
  { name: "Nereid Avenue", x: 386, y: 61.5, lengthFromStart: 23 },
  { name: "233rd Street", x: 386, y: 75.5, lengthFromStart: 37 },
  { name: "225th Street", x: 386, y: 89.5, lengthFromStart: 51 },
  { name: "219th Street", x: 386, y: 101.5, lengthFromStart: 63 },
  { name: "Gun Hill Road", x: 386, y: 114.5, lengthFromStart: 76 },
  { name: "Burke Avenue", x: 386, y: 127.5, lengthFromStart: 89 },
  { name: "Allerton Avenue", x: 386, y: 140.5, lengthFromStart: 102 },
  { name: "Pelham Parkway", x: 386, y: 154.5, lengthFromStart: 116 },
  { name: "Bronx Park East", x: 386, y: 167.5, lengthFromStart: 129 },
  { name: "E 180th Street", x: 386, y: 180.5, lengthFromStart: 142 },
  {
    name: "West Farms Square - E Tremont Avenue",
    x: 386,
    y: 193.5,
    lengthFromStart: 155,
  },
  { name: "174th Street", x: 386, y: 206.5, lengthFromStart: 168 },
  { name: "Freeman Street", x: 386, y: 219.5, lengthFromStart: 181 },
  { name: "Simpson Street", x: 386, y: 232.5, lengthFromStart: 194 },
  { name: "Intervale Avenue", x: 386, y: 245.5, lengthFromStart: 207 },
  { name: "Prospect Avenue", x: 386, y: 259.5, lengthFromStart: 221 },
  { name: "Jackson Avenue", x: 374.5, y: 273, lengthFromStart: 235 },
  { name: "3rd Avenue - 149th Street", x: 329.5, y: 273, lengthFromStart: 280 },
  {
    name: "149th Street - Grand Concourse",
    x: 281.5,
    y: 273,
    lengthFromStart: 328,
  },
  { name: "135th Street", x: 198.5, y: 315.5, lengthFromStart: 411 },
  { name: "125th Street", x: 198.5, y: 332.5, lengthFromStart: 428 },
  { name: "116th Street", x: 198.5, y: 344.5, lengthFromStart: 440 },
  {
    name: "Central Park North - 110th Street",
    x: 198.5,
    y: 356.5,
    lengthFromStart: 452,
  },
  { name: "96th Street", x: 84.5, y: 393.5, lengthFromStart: 489 },
  { name: "72nd Street", x: 84.5, y: 438.5, lengthFromStart: 534 },
  {
    name: "Times Square - 42nd Street",
    x: 150.5,
    y: 531,
    lengthFromStart: 627,
  },
  {
    name: "34th Street - Penn Station",
    x: 150.5,
    y: 575.5,
    lengthFromStart: 671,
  },
  { name: "14th Street", x: 150.5, y: 637, lengthFromStart: 733 },
  { name: "Chambers Street", x: 150.5, y: 768.5, lengthFromStart: 864 },
  { name: "Park Place", x: 204.5, y: 791, lengthFromStart: 887 },
  { name: "Fulton Street", x: 334.5, y: 814.5, lengthFromStart: 1017 },
  { name: "Wall Street", x: 334.5, y: 834.5, lengthFromStart: 1037 },
  { name: "Clark Street", x: 381.5, y: 854.5, lengthFromStart: 1057 },
  { name: "Borough Hall", x: 394.5, y: 907.3, lengthFromStart: 1110 },
  { name: "Hoyt Street", x: 430.5, y: 907.5, lengthFromStart: 1146 },
  { name: "Nevins Street", x: 454.5, y: 907.5, lengthFromStart: 1170 },
  {
    name: "Atlantic Avenue - Barclays Center",
    x: 501.5,
    y: 913.5,
    lengthFromStart: 1217,
  },
  { name: "Bergen Street", x: 516.5, y: 928.5, lengthFromStart: 1232 },
  { name: "Grand Army Plaza", x: 532.5, y: 939.5, lengthFromStart: 1248 },
  {
    name: "Eastern Parkway - Brooklyn Museum",
    x: 545.5,
    y: 940,
    lengthFromStart: 1261,
  },
  { name: "Franklin Avenue", x: 596.5, y: 940, lengthFromStart: 1312 },
  { name: "President Street", x: 650, y: 944.5, lengthFromStart: 1366 },
  { name: "Sterling Street", x: 662, y: 956.5, lengthFromStart: 1378 },
  { name: "Winthrop Street", x: 674, y: 968.5, lengthFromStart: 1390 },
  { name: "Church Avenue", x: 688, y: 982.5, lengthFromStart: 1404 },
  { name: "Beverly Road", x: 701, y: 995.5, lengthFromStart: 1417 },
  { name: "Newkirk Avenue", x: 714, y: 1008.5, lengthFromStart: 1430 },
  {
    name: "Flatbush Avenue - Brooklyn College",
    x: 727,
    y: 1021.5,
    lengthFromStart: 1443,
  },
];
