import classGrowthRates from "./data/class-growth-rates.json" assert { type: "json" };
import characterGrowthRates from "./data/character-growth-rates.json" assert { type: "json" };
import {
  asNoramlizedClassData,
  asNormalizedCharData
} from "./normalization.mjs";
import byRank from "./byRank.mjs";
import saveAs from "./save-as.mjs";

const keynames = ["HP", "Str", "Mag", "Dex", "Spd", "Def", "Bld", "Lck"];

const characterSpecificClasses = [
  { character: "Alfred", class: "Avenir" },
  { character: "Fogado", class: "Cupido" },
  { character: "Alear", class: "Divine Dragon" },
  { character: "Veyle", class: "Fell Child" },
  { character: "Ivy", class: "Lindwurm" },
  { character: "Timerra", class: "Picket" },
  { character: "Hortensia", class: "Sleipnir Rider" },
  { character: "Diamant", class: "Successeur" },
  { character: "Alcryst", class: "Tireur d’élite" },
  { character: "Céline", class: "Vidame" }
];

const withName = (dataset) => (item, index) => ({
  Name: dataset[index].Name,
  ...item
});

const byKeynameDesc = (keyname) => (a, z) =>
  a[keyname].localeCompare(z[keyname]);

function App() {
  const normalizedClasses = asNoramlizedClassData(
    keynames,
    classGrowthRates
  ).map(withName(classGrowthRates));
  const normalizedCharacters = asNormalizedCharData(
    keynames,
    characterGrowthRates
  )
    .map(withName(characterGrowthRates))
    .sort(byKeynameDesc("Name"));

  const charsWithRankedClasses = byRank(
    keynames,
    normalizedClasses,
    normalizedCharacters,
    characterSpecificClasses
  );

  saveAs("out/chars-with-ranked-classes.json", charsWithRankedClasses);

  saveAs("out/classes-normalized.json", normalizedClasses);

  saveAs("out/characters-normalized.json", normalizedCharacters);
}

App();
