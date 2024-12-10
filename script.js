/* 
PROBLEM:
we work ffor a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor."
 */
const temps = [3, -3, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp < min) min = curTemp;
    if (curTemp > max) max = curTemp;
  }
  console.log(min, max);
  return max - min;
};
const amplitude = calcTempAmplitude(temps);
console.log(amplitude);
