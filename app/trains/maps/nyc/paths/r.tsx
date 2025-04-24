import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#FFD301";
export const trainColor = "#FFD301";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-r");
  path.setAttribute(
    "d",
    "M742.5 405.5C742.5 405.5 493.5 405.5 483.5 405.5C473.5 405.5 469.5 407.5 469.5 419.5C469.5 431.5 469.5 428.5 469.5 441C469.5 453.5 469.5 453.5 457 453.5C444.5 453.5 187.5 453.5 180.5 453.5C173.5 453.5 162.5 454.5 162.5 471C162.5 487.5 162.5 523.5 162.5 528C162.5 532.5 163 543 171.5 551.5C180 560 224 604 235 615C246 626 246 626 246 643.5C246 661 246 835 246 852.5C246 870 246 870 263.5 870C281 870 439.5 870 460 870C480.5 870 482 872.5 482 892C482 911.5 482 1146 482 1146"
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
    y: 405.5,
    lengthFromStart: 0,
  },
  { name: "67th Avenue", x: 719.5, y: 405.5, lengthFromStart: 20 },
  { name: "63rd Drive - Rego Park", x: 696.5, y: 405.5, lengthFromStart: 40 },
  { name: "Woodhaven Blvd", x: 673.5, y: 405.5, lengthFromStart: 60 },
  { name: "Grand Avenue - Newtown", x: 649.5, y: 405.5, lengthFromStart: 80 },
  { name: "Elmhurst Avenue", x: 626.5, y: 405.5, lengthFromStart: 100 },
  {
    name: "Jackson Heights - Roosevelt Avenue",
    x: 600.5,
    y: 405.5,
    lengthFromStart: 120,
  },
  { name: "Queens Plaza", x: 553.5, y: 405.5, lengthFromStart: 160 },
  {
    name: "Lexington Avenue - 59th Street",
    x: 495.5,
    y: 405.5,
    lengthFromStart: 200,
  },
  {
    name: "5th Avenue - 59th Street",
    x: 469.5,
    y: 416.5,
    lengthFromStart: 220,
  },
  {
    name: "57th Street - 7th Avenue",
    x: 469.5,
    y: 430.5,
    lengthFromStart: 240,
  },
  { name: "49th Street", x: 468.5, y: 451.5, lengthFromStart: 260 },
  {
    name: "Times Square - 42nd Street",
    x: 294.5,
    y: 453.5,
    lengthFromStart: 300,
  },
  {
    name: "34th Street - Herald Square",
    x: 243.5,
    y: 453.5,
    lengthFromStart: 340,
  },
  {
    name: "14th Street - Union Square",
    x: 162.5,
    y: 471.5,
    lengthFromStart: 380,
  },
  { name: "Canal Street", x: 162.5, y: 502.5, lengthFromStart: 420 },
  { name: "City Hall", x: 162.5, y: 531, lengthFromStart: 460 },
  { name: "Cortlandt Street", x: 185.5, y: 565.5, lengthFromStart: 500 },
  { name: "Rector Street", x: 228, y: 608, lengthFromStart: 540 },
  { name: "Whitehall Street", x: 239, y: 619, lengthFromStart: 580 },
  { name: "Court Street", x: 246, y: 637, lengthFromStart: 620 },
  { name: "Jay Street - MetroTech", x: 246, y: 664.5, lengthFromStart: 660 },
  { name: "DeKalb Avenue", x: 246, y: 704.5, lengthFromStart: 700 },
  {
    name: "Atlantic Avenue - Barclays Center",
    x: 246,
    y: 729.5,
    lengthFromStart: 740,
  },
  { name: "Union Street", x: 246, y: 767.5, lengthFromStart: 780 },
  { name: "9th Street", x: 246, y: 834.5, lengthFromStart: 820 },
  { name: "Prospect Avenue", x: 246, y: 853.5, lengthFromStart: 860 },
  { name: "25th Street", x: 258.5, y: 870, lengthFromStart: 900 },
  { name: "36th Street", x: 394.5, y: 870, lengthFromStart: 940 },
  { name: "45th Street", x: 428.5, y: 870, lengthFromStart: 980 },
  { name: "53rd Street", x: 473.5, y: 871, lengthFromStart: 1020 },
  { name: "59th Street", x: 482, y: 913.5, lengthFromStart: 1060 },
  { name: "Bay Ridge Avenue", x: 482, y: 947.5, lengthFromStart: 1100 },
  { name: "77th Street", x: 482, y: 976, lengthFromStart: 1140 },
  { name: "86th Street", x: 482, y: 990.5, lengthFromStart: 1180 },
  { name: "Bay Ridge - 95th Street", x: 482, y: 1146.5, lengthFromStart: 1220 },
];
