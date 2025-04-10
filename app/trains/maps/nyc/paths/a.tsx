import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#015EAC";
export const trainColor = "#015EAC";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-a");
  path.setAttribute(
    "d",
    "M46.5 162C46.5 162 46.5 211.5 46.5 217C46.5 222.5 50.5 225.5 50.5 225.5C50.5 225.5 97.5 272.5 99.5 274.5C101.5 276.5 102.5 278 102.5 280C102.5 282 102.5 643 102.5 650.5C102.5 658 109.5 667 118 667C126.5 667 175.5 667 179 667C182.5 667 186.5 667 186.5 674C186.5 681 186.5 801.5 186.5 810C186.5 818.5 191.5 826.5 201.5 826.5C211.5 826.5 399 826.5 404 826.5C409 826.5 410 828 410 835C410 842 410 926.5 410 929.5C410 932.5 414 938 417 938C420 938 448.5 938 452 938C455.5 938 459 938 462.5 934.5C466 931 519.5 877.5 523.5 873.5C527.5 869.5 527.5 869.5 536 869.5C544.5 869.5 566 869.5 572 869.5C578 869.5 578 869.5 582.5 865C587 860.5 717.5 730 723 724.5C728.5 719 728.5 719 736.5 719C744.5 719 761 719 766 719C771 719 777 713 777 713L881 609"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Inwood - 207 St", lengthFromStart: 0, x: 46.5, y: 161.5 },
  { name: "Dyckman St", lengthFromStart: 19, x: 46.5, y: 180.5 },
  { name: "190 St", lengthFromStart: 38, x: 46.5, y: 198.5 },
  { name: "181 St", lengthFromStart: 57, x: 46.5, y: 217.5 },
  { name: "175 St", lengthFromStart: 74, x: 58.5, y: 233.5 },
  { name: "168 St", lengthFromStart: 86, x: 69.5, y: 245 },
  { name: "145 St", lengthFromStart: 138, x: 102.5, y: 297.5 },
  { name: "135 St", lengthFromStart: 174, x: 102.5, y: 333.5 },
  { name: "125 St", lengthFromStart: 210, x: 102.5, y: 466.5 },
  { name: "59 St - Columbus Circle", lengthFromStart: 250, x: 102.5, y: 530.5 },
  {
    name: "42 St - Port Authority Bus Terminal",
    lengthFromStart: 290,
    x: 102.5,
    y: 575.5,
  },
  { name: "34 St - Penn Station", lengthFromStart: 330, x: 102.5, y: 636.5 },
  { name: "14 St", lengthFromStart: 370, x: 186.5, y: 673.5 },
  { name: "W 4 St - Washington Sq", lengthFromStart: 410, x: 186.5, y: 730.5 },
  { name: "Canal St", lengthFromStart: 450, x: 186.5, y: 768.5 },
  { name: "Fulton St", lengthFromStart: 490, x: 294, y: 826.5 },
  { name: "High St", lengthFromStart: 530, x: 410, y: 834.5 },
  { name: "Jay St - MetroTech", lengthFromStart: 570, x: 410, y: 869.5 },
  { name: "Hoyt - Schermerhorn Sts", lengthFromStart: 610, x: 437.5, y: 938 },
  { name: "Utica Av", lengthFromStart: 650, x: 619.5, y: 828 },
  { name: "Broadway Junction", lengthFromStart: 690, x: 661.5, y: 786 },
  { name: "Euclid Av", lengthFromStart: 730, x: 724.5, y: 722.5 },
  { name: "Grant Av", lengthFromStart: 770, x: 795.5, y: 694.5 },
  { name: "80 St", lengthFromStart: 810, x: 806.5, y: 683.5 },
  { name: "88 St", lengthFromStart: 850, x: 816.5, y: 673.5 },
  { name: "Rockaway Blvd", lengthFromStart: 890, x: 827.5, y: 662.5 },
  { name: "104 St", lengthFromStart: 930, x: 838.5, y: 651.5 },
  { name: "111 St", lengthFromStart: 970, x: 854.5, y: 635.5 },
  {
    name: "Ozone Park - Lefferts Blvd",
    lengthFromStart: 1010,
    x: 867.5,
    y: 622.5,
  },
  {
    name: "Far Rockaway - Mott Av",
    lengthFromStart: 1050,
    x: 881.5,
    y: 608.5,
  },
];
