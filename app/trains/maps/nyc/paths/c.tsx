import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#015EAC";
export const trainColor = "#015EAC";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-c");
  path.setAttribute(
    "d",
    "M73.5 240.5C73.5 240.5 101.004 268.003 103 270C104.996 271.997 107.923 276.445 107.923 278.442C107.923 280.439 107.923 640.919 107.923 648.409C107.923 655.898 112.414 661.39 120.896 661.39C129.378 661.39 177.278 661.39 180.771 661.39C184.264 661.39 191.748 664.885 191.748 671.875C191.748 678.865 191.748 799.191 191.748 807.679C191.748 816.167 196.239 820.66 206.218 820.66C216.197 820.66 400.313 820.66 405.303 820.66C410.292 820.66 415.5 825 415.5 831.99C415.5 838.98 415.5 924.729 415.5 927.724C415.5 930.72 417.006 932.5 420 932.5C422.994 932.5 450.507 932.795 454 932.795C457.493 932.795 459.507 929.995 463 926.5C466.493 923.005 518.008 871.088 522 867.094C525.992 863.099 530.018 863.599 538.5 863.599C546.982 863.599 566.012 863.599 572 863.599C577.988 863.599 578.509 860.994 583 856.5C587.491 852.006 713.854 725.492 719.342 720C724.831 714.508 726.632 713.315 734.616 713.315C742.599 713.315 760.01 713.5 765 713.5C769.99 713.5 775 707 775 707L791 691"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}
export const stations: IStation[] = [
  { name: "168 St", x: 73.5, y: 240.5, lengthFromStart: 0 },
  { name: "163 St - Amsterdam Av", x: 85.5, y: 252.5, lengthFromStart: 16.97 },
  { name: "155 St", x: 102.5, y: 269.5, lengthFromStart: 41.72 },
  { name: "145 St", x: 108, y: 297.5, lengthFromStart: 68.97 },
  { name: "135 St", x: 108, y: 315.5, lengthFromStart: 87.97 },
  { name: "125 St", x: 108, y: 333, lengthFromStart: 105.47 },
  { name: "116 St", x: 108, y: 344.5, lengthFromStart: 117.97 },
  {
    name: "Cathedral Pkwy (110 St)",
    x: 108,
    y: 356.5,
    lengthFromStart: 129.97,
  },
  { name: "103 St", x: 108, y: 368.5, lengthFromStart: 141.97 },
  { name: "96 St", x: 108, y: 393.5, lengthFromStart: 166.97 },
  { name: "86 St", x: 108, y: 408.5, lengthFromStart: 181.97 },
  {
    name: "81 St - Museum of Natural History",
    x: 108,
    y: 423.5,
    lengthFromStart: 196.97,
  },
  { name: "72 St", x: 108, y: 438.5, lengthFromStart: 211.97 },
  {
    name: "59 St - Columbus Circle",
    x: 108,
    y: 466.5,
    lengthFromStart: 239.97,
  },
  { name: "50 St", x: 108, y: 502.5, lengthFromStart: 275.97 },
  {
    name: "42 St - Port Authority Bus Terminal",
    x: 108,
    y: 530.5,
    lengthFromStart: 303.97,
  },
  { name: "34 St - Penn Station", x: 108, y: 575.5, lengthFromStart: 348.97 },
  { name: "23 St", x: 108, y: 615, lengthFromStart: 388.47 },
  { name: "14 St", x: 108, y: 636.5, lengthFromStart: 409.97 },
  {
    name: "W 4 St - Washington Sq",
    x: 191.7,
    y: 673.5,
    lengthFromStart: 460.97,
  },
  { name: "Spring St", x: 191.7, y: 730.5, lengthFromStart: 517.97 },
  { name: "Canal St", x: 191.7, y: 768.5, lengthFromStart: 555.97 },
  { name: "Chambers St", x: 294, y: 820.5, lengthFromStart: 658.97 },
  { name: "Fulton St", x: 415.5, y: 834.5, lengthFromStart: 780.97 },
  { name: "High St", x: 415.5, y: 869.5, lengthFromStart: 815.97 },
  { name: "Jay St - MetroTech", x: 437.5, y: 932.5, lengthFromStart: 878.97 },
  {
    name: "Hoyt - Schermerhorn Sts",
    x: 532.5,
    y: 863.5,
    lengthFromStart: 973.97,
  },
  { name: "Lafayette Av", x: 580.5, y: 859, lengthFromStart: 1021.97 },
  {
    name: "Clinton - Washington Avs",
    x: 597.5,
    y: 842,
    lengthFromStart: 1038.97,
  },
  { name: "Franklin Av", x: 614.5, y: 825, lengthFromStart: 1055.97 },
  { name: "Nostrand Av", x: 635.5, y: 804, lengthFromStart: 1076.97 },
  { name: "Kingston - Throop Avs", x: 657.5, y: 782, lengthFromStart: 1098.97 },
  { name: "Utica Av", x: 672.5, y: 766.5, lengthFromStart: 1113.47 },
  { name: "Ralph Av", x: 689.5, y: 749.5, lengthFromStart: 1130.47 },
  { name: "Rockaway Av", x: 754.5, y: 713.5, lengthFromStart: 1195.47 },
  { name: "Broadway Junction", x: 770.5, y: 711.5, lengthFromStart: 1211.47 },
  { name: "Liberty Av", x: 780.5, y: 701.5, lengthFromStart: 1221.47 },
  { name: "Van Siclen Av", x: 791.5, y: 690.5, lengthFromStart: 1232.47 },
];
