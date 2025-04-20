import TrainPath from "../../../models/train-path";

const trainModules = [
  { id: "4", path: "./4" },
  { id: "SIR", path: "./sir" },
  { id: "A", path: "./a" },
  { id: "C", path: "./c" },
  { id: "7", path: "./7" },
  { id: "L", path: "./l" },
  { id: "1", path: "./1" },
  { id: "2", path: "./2" },
  { id: "J", path: "./j" },
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

export { trainPaths };
