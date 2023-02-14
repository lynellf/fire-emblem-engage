import { sampleCorrelation } from "simple-statistics";

const asValue = (item) => (keyname) => item[keyname];
const asValues = (keys) => (item) => keys.map(asValue(item));

const asCorrelation = (arrA) => (arrB) => ({
  correlation: parseFloat(sampleCorrelation(arrB, arrA).toFixed(2))
});

const withIdentifier = (keyname, arr) => (item, index) => ({
  ...item,
  [keyname]: arr[index][keyname]
});

const byCorrelationDesc = (a, z) => z.correlation - a.correlation;

const withTopClasses = (keys, normalClasses, identifierKey) => (acc, item) => {
  const name = item[identifierKey];
  const charBaseStats = keys.map(asValue(item));
  const classValues = normalClasses.map(asValues(keys));

  const topClasses = classValues
    .map(asCorrelation(charBaseStats))
    .map(withIdentifier(identifierKey, normalClasses))
    .sort(byCorrelationDesc)
    .slice(0, 5);

  return {
    ...acc,
    [name]: topClasses
  };
};

export default function byRank(
  keys = [],
  normalClasses = [],
  normalChars = [],
  identifierKey = "Name"
) {
  return normalChars.reduce(
    withTopClasses(keys, normalClasses, identifierKey),
    {}
  );
}
