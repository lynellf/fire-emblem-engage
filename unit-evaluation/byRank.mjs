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

const withTopClasses =
  (keys, normalClasses, identifierKey, exceptions) => (acc, item) => {
    const name = item[identifierKey];
    const charBaseStats = keys.map(asValue(item));
    const characterSpecificClass = normalClasses.filter((c) =>
      Boolean(
        exceptions.find((e) => e.class === c.Name && e.character === name)
      )
    );

    const withoutCharacterSpecificClasses = normalClasses.filter(
      (c) => !Boolean(exceptions.find((e) => e.class === c.Name))
    );
    const mergedNormalClasses = withoutCharacterSpecificClasses.concat(
      characterSpecificClass
    );
    const classValues = mergedNormalClasses.map(asValues(keys));

    // console.log({
    //   baseClasses: characterSpecificClass.map((c) => c.Name),
    //   name
    // });

    const topClasses = classValues
      .map(asCorrelation(charBaseStats))
      .map(withIdentifier(identifierKey, mergedNormalClasses))
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
  exceptions = [],
  identifierKey = "Name"
) {
  return normalChars.reduce(
    withTopClasses(keys, normalClasses, identifierKey, exceptions),
    {}
  );
}
