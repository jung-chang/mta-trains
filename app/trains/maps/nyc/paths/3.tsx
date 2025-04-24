import type { IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#EB0E44";
export const trainColor = "#EB0E44";
export const stationColor = "black";

export function SvgPath() {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "line-3");
  path.setAttribute(
    "d",
    "M162.5 273.5C162.5 273.5 166 273.5 179 273.5C192 273.5 192 273.5 192 286.5C192 299.5 192 357.5 192 371.5C192 385.5 192 385.5 178 385.5C164 385.5 110.5 385.5 100.5 385.5C90.5 385.5 90.5 385.5 90.5 395.5C90.5 405.5 90.5 427.5 90.5 435.5C90.5 443.5 90.5 443.5 99 452C107.5 460.5 142 495 148.5 501.5C155 508 156.5 510 156.5 519.5C156.5 529 156.5 568.5 156.5 568.5C156.5 568.5 156.5 761 156.5 773C156.5 785 156.5 785 168.5 785C180.5 785 315 785 325.5 785C336 785 340.5 787 340.5 802C340.5 817 340.5 821 340.5 831C340.5 841 340.5 841.5 351 841.5C361.5 841.5 367.5 841.5 376 841.5C384.5 841.5 387.5 846 387.5 857.5C387.5 869 387.5 875.5 387.5 888.5C387.5 901.5 387.5 901.5 400.5 901.5C413.5 901.5 472 901.5 485 901.5C498 901.5 498 901.5 509.5 913C521 924.5 519.5 923 525 928.5C530.5 934 530.5 934 546 934C561.5 934 609.5 934 625 934C640.5 934 640.5 934 653 921.5C665.5 909 831 743.5 831 743.5"
  );
  path.setAttribute("stroke", pathColor);
  path.setAttribute("stroke-width", "5");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("class", TRAIN_PATH_CLASSNAME);
  return path;
}

export const stations: IStation[] = [
  { name: "Harlem - 148th Street", x: 162.5, y: 273.5, lengthFromStart: 0 },
  { name: "145th Street", x: 192, y: 297.5, lengthFromStart: 24 },
  { name: "135th Street", x: 192, y: 315.5, lengthFromStart: 42 },
  { name: "125th Street", x: 192, y: 332.5, lengthFromStart: 59 },
  { name: "116th Street", x: 192, y: 344.5, lengthFromStart: 71 },
  {
    name: "Central Park North - 110th Street",
    x: 192,
    y: 356.5,
    lengthFromStart: 83,
  },
  { name: "96th Street", x: 90.5, y: 393.5, lengthFromStart: 120 },
  { name: "72nd Street", x: 90.5, y: 438.5, lengthFromStart: 165 },
  {
    name: "Times Square - 42nd Street",
    x: 156.5,
    y: 531,
    lengthFromStart: 258,
  },
  {
    name: "34th Street - Penn Station",
    x: 156.5,
    y: 575.5,
    lengthFromStart: 302,
  },
  { name: "14th Street", x: 156.5, y: 637, lengthFromStart: 364 },
  { name: "Chambers Street", x: 156.5, y: 768.5, lengthFromStart: 495 },
  { name: "Park Place", x: 204.5, y: 785, lengthFromStart: 512 },
  { name: "Fulton Street", x: 340.5, y: 814.5, lengthFromStart: 542 },
  { name: "Wall Street", x: 340.5, y: 834.5, lengthFromStart: 562 },
  { name: "Clark Street", x: 387.5, y: 854.5, lengthFromStart: 582 },
  { name: "Borough Hall", x: 394.5, y: 901.5, lengthFromStart: 629 },
  { name: "Hoyt Street", x: 430.5, y: 901.5, lengthFromStart: 665 },
  { name: "Nevins Street", x: 454.5, y: 901.5, lengthFromStart: 689 },
  {
    name: "Atlantic Avenue - Barclays Center",
    x: 506,
    y: 909.5,
    lengthFromStart: 741,
  },
  { name: "Bergen Street", x: 520.5, y: 924, lengthFromStart: 756 },
  { name: "Grand Army Plaza", x: 532.5, y: 933.5, lengthFromStart: 768 },
  {
    name: "Eastern Parkway - Brooklyn Museum",
    x: 545.5,
    y: 934,
    lengthFromStart: 781,
  },
  { name: "Franklin Avenue", x: 596.5, y: 934, lengthFromStart: 832 },
  { name: "President Street", x: 666, y: 908.5, lengthFromStart: 902 },
  { name: "Sterling Street", x: 687, y: 887.5, lengthFromStart: 923 },
  { name: "Winthrop Street", x: 708, y: 866.5, lengthFromStart: 944 },
  { name: "Church Avenue", x: 729, y: 845.5, lengthFromStart: 965 },
  { name: "Beverly Road", x: 745, y: 829.5, lengthFromStart: 981 },
  { name: "Newkirk Avenue", x: 762, y: 812.5, lengthFromStart: 998 },
  {
    name: "Flatbush Avenue - Brooklyn College",
    x: 831,
    y: 743.5,
    lengthFromStart: 1067,
  },
];
