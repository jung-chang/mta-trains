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
    "M656.5 1187L682 1161.5C682 1161.5 718.5 1125 725.5 1118C732.5 1111 732 1110 725.5 1103.5C719 1097 703 1081 703 1081C703 1081 374.5 752.5 368.5 746.5C362.5 740.5 361 740 349.5 740C338 740 289 740 276.5 740C264 740 264 739 264 727.5C264 716 264 645.5 264 633C264 620.5 261.5 615.5 247.5 601.5C233.5 587.5 192.5 546.5 186.5 540.5C180.5 534.5 180.5 531 180.5 518.5C180.5 506 180.5 484.5 180.5 460C180.5 435.5 180.5 435.5 205 435.5C229.5 435.5 299.5 435.5 310 435.5C320.5 435.5 320.5 435.5 320.5 425C320.5 414.5 320.5 381 320.5 381"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "96th Street", x: 320.5, y: 380.5, lengthFromStart: 0 },
  { name: "86th Street", x: 320.5, y: 393.5, lengthFromStart: 20 },
  { name: "72nd Street", x: 320.5, y: 417.5, lengthFromStart: 40 },
  { name: "Lexington Av/63rd Street", x: 260.5, y: 435.5, lengthFromStart: 60 },
  { name: "57th Street - 7th Av", x: 180.5, y: 471.5, lengthFromStart: 100 },
  { name: "49th Street", x: 181, y: 531, lengthFromStart: 140 },
  { name: "Times Sq - 42nd Street", x: 198.5, y: 552.5, lengthFromStart: 160 },
  { name: "34th Street - Herald Sq", x: 264, y: 637, lengthFromStart: 200 },
  { name: "14th Street - Union Sq", x: 264, y: 729.5, lengthFromStart: 240 },
  { name: "Canal Street", x: 482.5, y: 860.5, lengthFromStart: 300 },
  { name: "DeKalb Av", x: 518.5, y: 896.5, lengthFromStart: 340 },
  {
    name: "Atlantic Av - Barclays Ctr",
    x: 538.5,
    y: 916.5,
    lengthFromStart: 360,
  },
  { name: "7th Av", x: 596.5, y: 974.5, lengthFromStart: 400 },
  { name: "Prospect Park", x: 606.5, y: 984.5, lengthFromStart: 420 },
  { name: "Parkside Av", x: 616.5, y: 994.5, lengthFromStart: 440 },
  { name: "Church Av", x: 625.5, y: 1003.5, lengthFromStart: 460 },
  { name: "Beverley Rd", x: 634.5, y: 1012.5, lengthFromStart: 480 },
  { name: "Cortelyou Rd", x: 644.5, y: 1022.5, lengthFromStart: 500 },
  { name: "Newkirk Plaza", x: 654.5, y: 1032.5, lengthFromStart: 520 },
  { name: "Avenue H", x: 663.5, y: 1041.5, lengthFromStart: 540 },
  { name: "Avenue J", x: 672.5, y: 1050.5, lengthFromStart: 560 },
  { name: "Avenue M", x: 681.5, y: 1059.5, lengthFromStart: 580 },
  { name: "Kings Hwy", x: 692.5, y: 1070.5, lengthFromStart: 600 },
  { name: "Avenue U", x: 704.5, y: 1082.5, lengthFromStart: 620 },
  { name: "Neck Rd", x: 715.5, y: 1093.5, lengthFromStart: 640 },
  { name: "Sheepshead Bay", x: 728.5, y: 1106.5, lengthFromStart: 660 },
  { name: "Brighton Beach", x: 710.5, y: 1133, lengthFromStart: 680 },
  { name: "Ocean Pkwy", x: 688.5, y: 1155, lengthFromStart: 700 },
  {
    name: "Coney Island - Stillwell Av",
    x: 656.5,
    y: 1187,
    lengthFromStart: 740,
  },
];
