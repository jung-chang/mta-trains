import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#FFD301";
export const trainColor = "#FFD301";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-n");
  path.setAttribute(
    "d",
    "M648 1178C648 1178 664.5 1161.5 669.5 1156.5C674.5 1151.5 674.5 1150.5 669.5 1145.5C664.5 1140.5 648 1124 648 1124C648 1124 627.5 1103.5 619.5 1095.5C611.5 1087.5 610 1087 603 1087C596 1087 574 1087 574 1087C574 1087 508.5 1087 498 1087C487.5 1087 487.5 1086.5 487.5 1076.5C487.5 1066.5 487.5 1030 487.5 1030C487.5 1030 487.5 894.5 487.5 884C487.5 873.5 485 871.5 479 865.5C473 859.5 454.5 841 454.5 841C454.5 841 372.5 759 366 752.5C359.5 746 359.5 746 351 746C342.5 746 329.5 746 329.5 746C329.5 746 287 746 275 746C263 746 258 745 258 729C258 713 258 701 258 701C258 701 258 649 258 636.5C258 624 256.5 619 247.5 610C238.5 601 188.5 551 182 544.5C175.5 538 174.5 535 174.5 519C174.5 503 174.5 489.5 174.5 479C174.5 468.5 174.5 465.5 187 465.5C199.5 465.5 419 465.5 433.5 465.5C448 465.5 452 464.5 452 447C452 429.5 452 345 452 345"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Astoria - Ditmars Blvd", x: 452, y: 345, lengthFromStart: 0 },
  { name: "Astoria Blvd", x: 452, y: 363.5, lengthFromStart: 18 },
  { name: "30th Avenue", x: 452, y: 380.5, lengthFromStart: 36 },
  { name: "Broadway", x: 452, y: 398.5, lengthFromStart: 54 },
  { name: "36th Avenue", x: 452, y: 416.5, lengthFromStart: 72 },
  { name: "39th Avenue", x: 452, y: 435.5, lengthFromStart: 90 },
  { name: "Queensboro Plaza", x: 439.5, y: 465.5, lengthFromStart: 120 },
  {
    name: "Lexington Avenue - 59th Street",
    x: 294.5,
    y: 465.5,
    lengthFromStart: 250,
  },
  {
    name: "5th Avenue - 59th Street",
    x: 243.5,
    y: 465.5,
    lengthFromStart: 300,
  },
  {
    name: "57th Street - 7th Avenue",
    x: 174.9,
    y: 471.5,
    lengthFromStart: 350,
  },
  { name: "49th Street", x: 174.5, y: 502.5, lengthFromStart: 380 },
  { name: "Times Square - 42nd Street", x: 175, y: 531, lengthFromStart: 410 },
  {
    name: "34th Street - Herald Square",
    x: 194,
    y: 556.5,
    lengthFromStart: 440,
  },
  { name: "14th Street - Union Square", x: 258, y: 637, lengthFromStart: 520 },
  { name: "Canal Street", x: 258, y: 729.5, lengthFromStart: 610 },
  {
    name: "Atlantic Avenue - Barclays Center",
    x: 487.5,
    y: 913.5,
    lengthFromStart: 800,
  },
  {
    name: "Coney Island - Stillwell Avenue",
    x: 487.5,
    y: 1020.5,
    lengthFromStart: 910,
  },
  { name: "Kings Highway", x: 487.5, y: 1074.5, lengthFromStart: 960 },
  { name: "Avenue U", x: 497.5, y: 1087, lengthFromStart: 970 },
  { name: "Neptune Avenue", x: 518.5, y: 1087, lengthFromStart: 990 },
  {
    name: "West 8th Street - NY Aquarium",
    x: 539.5,
    y: 1087,
    lengthFromStart: 1010,
  },
  { name: "Ocean Parkway", x: 583.5, y: 1087, lengthFromStart: 1050 },
  { name: "Brighton Beach", x: 603.5, y: 1087, lengthFromStart: 1070 },
  { name: "Sheepshead Bay", x: 620.5, y: 1096.5, lengthFromStart: 1090 },
  { name: "Neck Road", x: 636.5, y: 1112.5, lengthFromStart: 1110 },
  { name: "Avenue X", x: 651.5, y: 1127.5, lengthFromStart: 1130 },
  { name: "Avenue Z", x: 667.5, y: 1143.5, lengthFromStart: 1150 },
  { name: "Coney Island Terminal", x: 648, y: 1178, lengthFromStart: 1200 },
];
