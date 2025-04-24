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
    "M45.5001 163C45.5001 163 45.5001 212.5 45.5001 218C45.5001 223.5 49.5001 226.5 49.5001 226.5C49.5001 226.5 80.5001 257.5 91.0001 268C101.5 278.5 101.5 278.5 101.5 295.5C101.5 312.5 101.5 635.5 101.5 648C101.5 660.5 105.5 668 121.5 668C137.5 668 174.5 668 178 668C181.5 668 185.5 668 185.5 675C185.5 682 185.5 802.5 185.5 811C185.5 819.5 190.5 827.5 200.5 827.5C210.5 827.5 398 827.5 403 827.5C408 827.5 409 829 409 836C409 843 409 911.5 409 923.5C409 935.5 410 939 427 939C444 939 447.5 939 451 939C454.5 939 459 940 462.5 936.5C466 933 519.5 879.5 523.5 875.5C527.5 871.5 526.5 870.5 535 870.5C543.5 870.5 565 870.5 571 870.5C577 870.5 578 870.5 582.5 866C587 861.5 717.5 731 723 725.5C728.5 720 727.5 720 735.5 720C743.5 720 760 720 765 720C770 720 776 714 776 714C816.615 673.385 839.386 650.615 880 610"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Inwood - 207 St", lengthFromStart: 0, x: 45.5, y: 162.5 },
  { name: "Dyckman St", lengthFromStart: 19, x: 45.5, y: 181.5 },
  { name: "190 St", lengthFromStart: 38, x: 45.5, y: 199.5 },
  { name: "181 St", lengthFromStart: 57, x: 45.5, y: 218.5 },
  { name: "175 St", lengthFromStart: 74, x: 57.5, y: 234.5 },
  { name: "168 St", lengthFromStart: 86, x: 69, y: 246 },
  { name: "145 St", lengthFromStart: 138, x: 101.5, y: 297.5 },
  { name: "135 St", lengthFromStart: 174, x: 101.5, y: 333 },
  { name: "125 St", lengthFromStart: 210, x: 101.5, y: 466.5 },
  { name: "59 St - Columbus Circle", lengthFromStart: 250, x: 101.5, y: 530.5 },
  {
    name: "42 St - Port Authority Bus Terminal",
    lengthFromStart: 290,
    x: 101.5,
    y: 575.5,
  },
  { name: "34 St - Penn Station", lengthFromStart: 330, x: 101.5, y: 636.5 },
  { name: "14 St", lengthFromStart: 370, x: 185.5, y: 673.5 },
  { name: "W 4 St - Washington Sq", lengthFromStart: 410, x: 185.5, y: 730.5 },
  { name: "Canal St", lengthFromStart: 450, x: 185.5, y: 768.5 },
  { name: "Fulton St", lengthFromStart: 490, x: 294, y: 827.5 },
  { name: "High St", lengthFromStart: 530, x: 409, y: 834.5 },
  { name: "Jay St - MetroTech", lengthFromStart: 570, x: 409, y: 870 },
  { name: "Hoyt - Schermerhorn Sts", lengthFromStart: 610, x: 437.5, y: 939 },
  { name: "Utica Av", lengthFromStart: 650, x: 619.5, y: 829 },
  { name: "Broadway Junction", lengthFromStart: 690, x: 661.5, y: 787 },
  { name: "Euclid Av", lengthFromStart: 730, x: 724, y: 724.5 },
  { name: "Grant Av", lengthFromStart: 770, x: 795.5, y: 694.5 },
  { name: "80 St", lengthFromStart: 810, x: 805.5, y: 684.5 },
  { name: "88 St", lengthFromStart: 850, x: 815.5, y: 674.5 },
  { name: "Rockaway Blvd", lengthFromStart: 890, x: 826.5, y: 663.5 },
  { name: "104 St", lengthFromStart: 930, x: 837.5, y: 652.5 },
  { name: "111 St", lengthFromStart: 970, x: 853.5, y: 636.5 },
  {
    name: "Ozone Park - Lefferts Blvd",
    lengthFromStart: 1010,
    x: 866.5,
    y: 623.5,
  },
  {
    name: "Far Rockaway - Mott Av",
    lengthFromStart: 1050,
    x: 880.5,
    y: 609.5,
  },
];
