import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#F6871F";
export const trainColor = "#F6871F";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-f");
  path.setAttribute(
    "d",
    "M886 365.5C886 365.5 858 393.5 846 405.5C834 417.5 834 417.5 813.5 417.5C793 417.5 530.5 417.5 521 417.5C511.5 417.5 511.5 418 505.5 424C499.5 430 503 426.5 495.5 434C488 441.5 488 441.5 481.5 441.5C475 441.5 240 441.5 228 441.5C216 441.5 216 441.5 216 453.5C216 465.5 216 658.5 216 670C216 681.5 223 683 229 683C235 683 341 683 362 683C383 683 383 683 383 704C383 725 382.5 718 383 722.5C383.5 727 384 728.5 393 737.5C402 746.5 410.5 755 416 760.5C421.5 766 422 766.5 422 778.5C422 790.5 422 808 422 808C422 808 422 950.5 422 965.5C422 980.5 428 982 438.5 982C449 982 509.5 982 518.5 982C527.5 982 529 983.5 537 991.5C545 999.5 665 1119.5 677.5 1132C690 1144.5 690.25 1144.75 677.5 1157.5C664.75 1170.25 652.5 1182.5 652.5 1182.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Jamaica - 179th Street", x: 886.5, y: 365.5, lengthFromStart: 0 },
  { name: "169th Street", x: 872.5, y: 378.5, lengthFromStart: 20 },
  { name: "Parsons Blvd", x: 859.5, y: 391.5, lengthFromStart: 40 },
  { name: "Sutphin Blvd", x: 846.5, y: 404.5, lengthFromStart: 60 },
  { name: "Briarwood", x: 801.5, y: 417.5, lengthFromStart: 80 },
  {
    name: "Kew Gardens - Union Turnpike",
    x: 781.5,
    y: 417.5,
    lengthFromStart: 100,
  },
  { name: "75th Avenue", x: 762.5, y: 417.5, lengthFromStart: 120 },
  {
    name: "Forest Hills - 71st Avenue",
    x: 742.5,
    y: 417.5,
    lengthFromStart: 140,
  },
  {
    name: "Jackson Heights - Roosevelt Avenue",
    x: 600.5,
    y: 417.5,
    lengthFromStart: 180,
  },
  {
    name: "21st Street - Queensbridge",
    x: 370.5,
    y: 441.5,
    lengthFromStart: 220,
  },
  {
    name: "Lexington Avenue - 63rd Street",
    x: 350.5,
    y: 441.5,
    lengthFromStart: 240,
  },
  { name: "57th Street", x: 261.5, y: 441.5, lengthFromStart: 260 },
  {
    name: "47th-50th Streets - Rockefeller Center",
    x: 216,
    y: 471.5,
    lengthFromStart: 280,
  },
  { name: "42nd Street - Bryant Park", x: 216, y: 502.5, lengthFromStart: 300 },
  {
    name: "34th Street - Herald Square",
    x: 216,
    y: 565.5,
    lengthFromStart: 320,
  },
  {
    name: "West 4th Street - Washington Square",
    x: 216,
    y: 619.5,
    lengthFromStart: 340,
  },
  {
    name: "Broadway - Lafayette Street",
    x: 216.3,
    y: 673.5,
    lengthFromStart: 360,
  },
  { name: "2nd Avenue", x: 294.5, y: 683, lengthFromStart: 380 },
  {
    name: "Delancey Street - Essex Street",
    x: 362.5,
    y: 683,
    lengthFromStart: 400,
  },
  { name: "East Broadway", x: 383, y: 701.5, lengthFromStart: 420 },
  { name: "York Street", x: 389, y: 733.5, lengthFromStart: 440 },
  { name: "Jay Street - MetroTech", x: 421.8, y: 771.5, lengthFromStart: 460 },
  { name: "Bergen Street", x: 422, y: 870, lengthFromStart: 480 },
  { name: "Carroll Street", x: 422, y: 955.5, lengthFromStart: 500 },
  { name: "Smith - 9th Streets", x: 422.2, y: 969.5, lengthFromStart: 520 },
  { name: "4th Avenue - 9th Street", x: 440.5, y: 982, lengthFromStart: 540 },
  { name: "7th Avenue", x: 475.5, y: 982, lengthFromStart: 560 },
  {
    name: "15th Street - Prospect Park",
    x: 507.5,
    y: 982,
    lengthFromStart: 580,
  },
  { name: "Fort Hamilton Parkway", x: 539, y: 993.5, lengthFromStart: 600 },
  { name: "Church Avenue", x: 555, y: 1009.5, lengthFromStart: 620 },
  { name: "Ditmas Avenue", x: 572, y: 1026.5, lengthFromStart: 640 },
  { name: "18th Avenue", x: 583, y: 1037.5, lengthFromStart: 660 },
  { name: "Avenue I", x: 593, y: 1047.5, lengthFromStart: 680 },
  { name: "Bay Parkway", x: 604, y: 1058.5, lengthFromStart: 700 },
  { name: "Avenue N", x: 614, y: 1068.5, lengthFromStart: 720 },
  { name: "Avenue P", x: 625, y: 1079.5, lengthFromStart: 740 },
  { name: "Kings Highway", x: 635, y: 1089.5, lengthFromStart: 760 },
  { name: "Avenue U", x: 646, y: 1100.5, lengthFromStart: 780 },
  { name: "Avenue X", x: 656, y: 1110.5, lengthFromStart: 800 },
  { name: "Neptune Avenue", x: 667, y: 1121.5, lengthFromStart: 820 },
  {
    name: "West 8th Street - NY Aquarium",
    x: 678,
    y: 1132.5,
    lengthFromStart: 840,
  },
  {
    name: "Coney Island - Stillwell Avenue",
    x: 684,
    y: 1150.7,
    lengthFromStart: 860,
  },
  {
    name: "Gravesend - 86th Street",
    x: 652.5,
    y: 1182.5,
    lengthFromStart: 880,
  },
];
