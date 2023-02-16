import { zScore, mean, standardDeviation } from "simple-statistics";

/**
 * @description its hard to compare data that isn't normalized
 * zscore the data before finding correlation
 * @typedef {Record<string, number>} DataItem
 * @param {string[]} keys
 * @param {DataItem[]} dataset
 */
export function asNormalizedCharData(keys = [], dataset = []) {
  const rawValues = keys.map((keyname) =>
    dataset.map((item) => item[keyname] ?? 0)
  );
  const meanValues = rawValues.map((values) => mean(values));
  const stdValues = rawValues.map((values) => standardDeviation(values));

  return dataset.map((item) =>
    keys.reduce(
      (acc, keyname) => ({
        ...acc,
        [keyname]: zScore(
          item[keyname],
          meanValues[keys.indexOf(keyname)],
          stdValues[keys.indexOf(keyname)]
        )
      }),
      {}
    )
  );
}

/**
 * @description its hard to compare data that isn't normalized
 * zscore the data before finding correlation
 * @typedef {Record<string, number>} DataItem
 * @param {string[]} keys
 * @param {DataItem[]} dataset
 */
export function asNoramlizedClassData(keys = [], dataset = []) {
  return dataset.map((item) => {
    const rawValues = keys.map((key) => item[key] ?? 0);
    const meanValue = mean(rawValues);
    const stdValue = standardDeviation(rawValues);

    return keys.reduce(
      (acc, key) => ({
        ...acc,
        [key]: zScore(item[key], meanValue, stdValue)
      }),
      {}
    );
  });
}
