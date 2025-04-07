import { type IStation } from "~/trains/models/station";
import { TRAIN_PATH_CLASSNAME } from "~/trains/models/train-path";

export const pathColor = "#869ED0";
export const trainColor = "#0078c6";
export const stationColor = "black";
export const stations: IStation[] = [
  { name: "Tottenville", x: 95.5355, y: 1199.93, handicap: true },
  { name: "Arthur Kill", x: 105.435, y: 1190.03, handicap: true },
  { name: "Richmond Valley", x: 115.335, y: 1180.13 },
  { name: "Pleasant Plains", x: 125.234, y: 1170.23 },
  { name: "Prince's Bay", x: 135.133, y: 1160.33 },
  { name: "Huguenot", x: 145.033, y: 1150.43 },
  { name: "Annadale", x: 154.932, y: 1140.53 },
  { name: "Eltingville", x: 164.832, y: 1130.63 },
  { name: "Great Kills", x: 174.732, y: 1120.73, handicap: true },
  { name: "Bay Terrace", x: 184.631, y: 1110.83 },
  { name: "Oakwood Heights", x: 194.53, y: 1100.93 },
  { name: "New Dorp", x: 204.43, y: 1091.03, handicap: true },
  { name: "Grant City", x: 214.329, y: 1081.13 },
  { name: "Jefferson Ave", x: 224.229, y: 1071.23 },
  { name: "Dongan Hills", x: 234.128, y: 1061.33, handicap: true },
  { name: "Old Town", x: 244.028, y: 1051.44 },
  { name: "Grasmere", x: 252.927, y: 1042.54 },
  { name: "Clifton", x: 258.536, y: 1027.54 },
  { name: "Stapleton", x: 258.536, y: 1013.54 },
  { name: "Tompkinsville", x: 258.536, y: 999.536 },
  { name: "St. George", x: 258.536, y: 981.536, handicap: true },
];

export function SvgPath() {
  return (
    <path
      d="M95.5 1200.5L105.5 1190.5L115 1181L125 1171L135 1161L145 1151L155 1141L164.5 1131.5L174.5 1121.5L184 1112L194.5 1101.5L204.5 1091.5L214 1082L224 1072L233.5 1062.5L243.5 1052.5C243.5 1052.5 247.5 1048.5 253 1043C258.5 1037.5 258.5 1035.5 258.5 1027.5C258.5 1019.5 258.5 1014.5 258.5 1014.5V1001.5V982.5"
      stroke="#8ba6d0"
      strokeWidth="5"
      strokeLinecap="round"
      className={TRAIN_PATH_CLASSNAME}
    />
  );
}
