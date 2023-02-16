# fire-emblem-engage-character-map
![Engage Cover Photo](engage.jpg)

 Find the best advanced classes for each character

## Goals

1. Normalize the data
2. Find correlation between base stat growth rate and advanced class growth rate
3. For each class, rank the top 5 characters by correlation


## What does the data mean?

A high correlation between a character's base stat growth rate and a class's growth rate indicates a class favors a character's strengths when leveling up. So if a player wanted to get the most out of a specific character, using the listed classes are a solid option.

A character with relatively low correlations for each class indicates they may be fine the way they are, better off with a character-specific class ... or they're highly specialized in a few areas. 

However, we're only looking at stats here. Other factors such as playstyle, class/character bonuses, Emblem Rings, etc. likely hold just as much weight (if not more).

## Results

```js
{
  Alcryst: [
    { correlation: 0.67, Name: 'Warrior' },
    { correlation: 0.51, Name: 'Berserker' },
    { correlation: 0.49, Name: 'Tireur d’élite' },
    { correlation: 0.45, Name: 'Sniper' },
    { correlation: 0.4, Name: 'Halberdier' }
  ],
  Alear: [
    { correlation: 0.9, Name: 'Halberdier' },
    { correlation: 0.78, Name: 'Thief' },
    { correlation: 0.68, Name: 'Sniper' },
    { correlation: 0.63, Name: 'Paladin' },
    { correlation: 0.61, Name: 'Royal Knight' }
  ],
  Alfred: [
    { correlation: 0.82, Name: 'Avenir' },
    { correlation: 0.62, Name: 'Dancer' },
    { correlation: 0.56, Name: 'Wyvern Knight' },
    { correlation: 0.53, Name: 'Paladin' },
    { correlation: 0.48, Name: 'Great Knight' }
  ],
  Amber: [
    { correlation: 0.49, Name: 'Berserker' },
    { correlation: 0.47, Name: 'Wyvern Knight' },
    { correlation: 0.45, Name: 'General' },
    { correlation: 0.33, Name: 'Great Knight' },
    { correlation: 0.2, Name: 'Warrior' }
  ],
  Anna: [
    { correlation: 0.75, Name: 'Sage' },
    { correlation: 0.74, Name: 'Griffin Knight' },
    { correlation: 0.72, Name: 'High Priest' },
    { correlation: 0.7, Name: 'Royal Knight' },
    { correlation: 0.42, Name: 'Wolf Knight' }
  ],
  Boucheron: [
    { correlation: 0.37, Name: 'Warrior' },
    { correlation: 0.34, Name: 'General' },
    { correlation: 0.32, Name: 'Great Knight' },
    { correlation: 0.26, Name: 'Berserker' },
    { correlation: 0.26, Name: 'Sniper' }
  ],
  Bunet: [
    { correlation: 0.61, Name: 'Great Knight' },
    { correlation: 0.45, Name: 'General' },
    { correlation: 0.43, Name: 'Thief' },
    { correlation: 0.41, Name: 'Wyvern Knight' },
    { correlation: 0.37, Name: 'Dancer' }
  ],
  'Céline': [
    { correlation: 0.88, Name: 'Vidame' },
    { correlation: 0.79, Name: 'High Priest' },
    { correlation: 0.74, Name: 'Dancer' },
    { correlation: 0.56, Name: 'Griffin Knight' },
    { correlation: 0.46, Name: 'Sage' }
  ],
  'Chloé': [
    { correlation: 0.58, Name: 'Royal Knight' },
    { correlation: 0.43, Name: 'Griffin Knight' },
    { correlation: 0.38, Name: 'Swordmaster' },
    { correlation: 0.37, Name: 'Bow Knight' },
    { correlation: 0.37, Name: 'Mage Knight' }
  ],
  Citrinne: [
    { correlation: 0.93, Name: 'Sage' },
    { correlation: 0.79, Name: 'High Priest' },
    { correlation: 0.75, Name: 'Mage Knight' },
    { correlation: 0.53, Name: 'Martial Master' },
    { correlation: 0.29, Name: 'Griffin Knight' }
  ],
  Clanne: [
    { correlation: 0.62, Name: 'Thief' },
    { correlation: 0.61, Name: 'Griffin Knight' },
    { correlation: 0.56, Name: 'Royal Knight' },
    { correlation: 0.53, Name: 'Halberdier' },
    { correlation: 0.5, Name: 'Bow Knight' }
  ],
  Diamant: [
    { correlation: 0.53, Name: 'General' },
    { correlation: 0.44, Name: 'Berserker' },
    { correlation: 0.36, Name: 'Wyvern Knight' },
    { correlation: 0.32, Name: 'Warrior' },
    { correlation: 0.26, Name: 'Great Knight' }
  ],
  Etie: [
    { correlation: 0.49, Name: 'Dancer' },
    { correlation: 0.42, Name: 'Hero' },
    { correlation: 0.4, Name: 'Berserker' },
    { correlation: 0.36, Name: 'Paladin' },
    { correlation: 0.34, Name: 'Wyvern Knight' }
  ],
  Fogado: [
    { correlation: 0.37, Name: 'Griffin Knight' },
    { correlation: 0.23, Name: 'Cupido' },
    { correlation: 0.22, Name: 'Royal Knight' },
    { correlation: 0.22, Name: 'Swordmaster' },
    { correlation: 0.19, Name: 'Mage Knight' }
  ],
  Framme: [
    { correlation: 0.88, Name: 'Royal Knight' },
    { correlation: 0.84, Name: 'Griffin Knight' },
    { correlation: 0.65, Name: 'Swordmaster' },
    { correlation: 0.61, Name: 'Bow Knight' },
    { correlation: 0.55, Name: 'Wolf Knight' }
  ],
  Goldmary: [
    { correlation: 0.82, Name: 'General' },
    { correlation: 0.8, Name: 'Great Knight' },
    { correlation: 0.72, Name: 'Wyvern Knight' },
    { correlation: 0.45, Name: 'Martial Master' },
    { correlation: 0.4, Name: 'Paladin' }
  ],
  Hortensia: [
    { correlation: 0.78, Name: 'Griffin Knight' },
    { correlation: 0.76, Name: 'Sleipnir Rider' },
    { correlation: 0.74, Name: 'High Priest' },
    { correlation: 0.73, Name: 'Dancer' },
    { correlation: 0.72, Name: 'Wolf Knight' }
  ],
  Ivy: [
    { correlation: 0.64, Name: 'Mage Knight' },
    { correlation: 0.56, Name: 'Lindwurm' },
    { correlation: 0.37, Name: 'Martial Master' },
    { correlation: 0.33, Name: 'Sage' },
    { correlation: 0.07, Name: 'High Priest' }
  ],
  Jade: [
    { correlation: 0.53, Name: 'General' },
    { correlation: 0.53, Name: 'Martial Master' },
    { correlation: 0.45, Name: 'Great Knight' },
    { correlation: 0.34, Name: 'Wyvern Knight' },
    { correlation: 0.29, Name: 'Mage Knight' }
  ],
  Jean: [
    { correlation: 0.78, Name: 'Griffin Knight' },
    { correlation: 0.74, Name: 'Royal Knight' },
    { correlation: 0.66, Name: 'Sage' },
    { correlation: 0.62, Name: 'High Priest' },
    { correlation: 0.43, Name: 'Wolf Knight' }
  ],
  Kagetsu: [
    { correlation: 0.87, Name: 'Thief' },
    { correlation: 0.73, Name: 'Wolf Knight' },
    { correlation: 0.64, Name: 'Bow Knight' },
    { correlation: 0.6, Name: 'Sniper' },
    { correlation: 0.56, Name: 'Swordmaster' }
  ],
  Lapis: [
    { correlation: 0.58, Name: 'Griffin Knight' },
    { correlation: 0.58, Name: 'Royal Knight' },
    { correlation: 0.54, Name: 'Wolf Knight' },
    { correlation: 0.48, Name: 'Thief' },
    { correlation: 0.47, Name: 'Swordmaster' }
  ],
  Lindon: [
    { correlation: 0.37, Name: 'Mage Knight' },
    { correlation: 0.32, Name: 'Berserker' },
    { correlation: 0.18, Name: 'Warrior' },
    { correlation: 0.11, Name: 'Sage' },
    { correlation: 0.06, Name: 'Martial Master' }
  ],
  Louis: [
    { correlation: 0.82, Name: 'General' },
    { correlation: 0.72, Name: 'Wyvern Knight' },
    { correlation: 0.69, Name: 'Great Knight' },
    { correlation: 0.47, Name: 'Berserker' },
    { correlation: 0.33, Name: 'Warrior' }
  ],
  Mauvier: [
    { correlation: 0.57, Name: 'General' },
    { correlation: 0.43, Name: 'Great Knight' },
  Yunaka: [
    { correlation: 0.83, Name: 'Griffin Knight' },
    { correlation: 0.78, Name: 'Royal Knight' },
    { correlation: 0.56, Name: 'Bow Knight' },
    { correlation: 0.53, Name: 'Swordmaster' },
    { correlation: 0.42, Name: 'Hero' }
  ],
  Zelkov: [
    { correlation: 0.76, Name: 'Great Knight' },
    { correlation: 0.72, Name: 'General' },
    { correlation: 0.69, Name: 'Wyvern Knight' },
    { correlation: 0.5, Name: 'Sniper' },
    { correlation: 0.48, Name: 'Berserker' }
  ]
}
```


