import classGrowthRates from "./data/class-growth-rates.json" assert { type: "json" };
import characterGrowthRates from "./data/character-growth-rates.json" assert { type: "json" };
import asNormalizedData from "./normalization.mjs";
import byRank from "./byRank.mjs";

const keynames = ["HP", "Str", "Mag", "Dex", "Spd", "Def", "Bld", "Lck"];

const withName = (dataset) => (item, index) => ({
  Name: dataset[index].Name,
  ...item
});

const byKeynameDesc = (keyname) => (a, z) =>
  a[keyname].localeCompare(z[keyname]);

function App() {
  const normalizedClasses = asNormalizedData(keynames, classGrowthRates).map(
    withName(classGrowthRates)
  );
  const normalizedCharacters = asNormalizedData(keynames, characterGrowthRates)
    .map(withName(characterGrowthRates))
    .sort(byKeynameDesc("Name"));

  const charsWithRankedClasses = byRank(
    keynames,
    normalizedClasses,
    normalizedCharacters
  );
  console.log(charsWithRankedClasses);
}

App();
