import TrainPath from "../../../models/train-path";

const trainModules = [
  { id: "SIR", path: "./sir" },
  { id: "7", path: "./7" },
  { id: "L", path: "./l" },
  { id: "G", path: "./g" },
  // Green
  { id: "4", path: "./4" },
  { id: "5", path: "./5" },
  { id: "6", path: "./6" },
  // Blue
  { id: "A", path: "./a" },
  { id: "C", path: "./c" },
  { id: "E", path: "./e" },
  // Red
  { id: "1", path: "./1" },
  { id: "2", path: "./2" },
  { id: "3", path: "./3" },
  // Brown
  { id: "J", path: "./j" },
  { id: "Z", path: "./z" },
  // Orange
  { id: "N", path: "./n" },
  { id: "R", path: "./r" },
  { id: "W", path: "./w" },
  { id: "Q", path: "./q" },
  // Yellow
  { id: "F", path: "./f" },
  { id: "B", path: "./b" },
  { id: "D", path: "./d" },
  { id: "M", path: "./m" },
];

const trainPaths: Map<string, TrainPath> = new Map();

const loadTrainModules = async () => {
  for (const { id, path } of trainModules) {
    const module = await import(path);
    console.log({ path, module });
    const trainPath = new TrainPath(id, module.SvgPath(), module.stations, {
      stationColor: module.stationColor,
      pathColor: module.pathColor,
    });
    trainPaths.set(id, trainPath);
  }
};

await loadTrainModules();

export default trainPaths;
