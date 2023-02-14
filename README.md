# fire-emblem-engage-character-map
![Engage Cover Photo](engage.jpg)

 Find the best advanced classes for each character

## Goals

1. Normalize the data
2. Find correlation between base stat growth rate and advanced class growth rate
3. For each class, rank the top 5 characters by correlation


## What does the data mean?

A high correlation between a character's base stat growth rate and a class's growth rate indicates a class favors a character's strengths when leveling up. So if a player wanted to get the most out of a specific character, using the listed classes are a solid option.

A character with relatively low correlations for each class indicates they may be fine the way they are, better off with a character-specific class ... or they're not that good of a character overall. 

However, we're only looking at stats here. Other factors such as playstyle, class/character bonuses, Emblem Rings, etc. likely hold just as much weight (if not more).

## Results

```js
{
  Alcryst: [
    { correlation: 0.78, Name: 'Warrior' },
    { correlation: 0.51, Name: 'Berserker' },
    { correlation: 0.47, Name: 'Halberdier' },
    { correlation: 0.46, Name: 'Sniper' },
    { correlation: 0.45, Name: 'Wyvern Knight' }
  ],
  Alear: [
    { correlation: 0.88, Name: 'Halberdier' },
    { correlation: 0.67, Name: 'Thief' },
    { correlation: 0.63, Name: 'Sniper' },
    { correlation: 0.59, Name: 'Paladin' },
    { correlation: 0.42, Name: 'Bow Knight' }
  ],
  Alfred: [
    { correlation: 0.45, Name: 'Wyvern Knight' },
    { correlation: 0.4, Name: 'Paladin' },
    { correlation: 0.4, Name: 'Dancer' },
    { correlation: 0.34, Name: 'Great Knight' },
    { correlation: 0.27, Name: 'Hero' }
  ],
  Amber: [
    { correlation: 0.72, Name: 'Wyvern Knight' },
    { correlation: 0.62, Name: 'Berserker' },
    { correlation: 0.61, Name: 'General' },
    { correlation: 0.48, Name: 'Great Knight' },
    { correlation: 0.45, Name: 'Sword Armor' }
  ],
  Anna: [
    { correlation: 0.83, Name: 'Royal Knight' },
    { correlation: 0.79, Name: 'Griffin Knight' },
    { correlation: 0.76, Name: 'Sage' },
    { correlation: 0.7, Name: 'High Priest' },
    { correlation: 0.62, Name: 'Wolf Knight' }
  ],
  Boucheron: [
    { correlation: 0.58, Name: 'Great Knight' },
    { correlation: 0.56, Name: 'General' },
    { correlation: 0.54, Name: 'Warrior' },
    { correlation: 0.49, Name: 'Sword Armor' },
    { correlation: 0.49, Name: 'Lance Armor' }
  ],
  Bunet: [
    { correlation: 0.53, Name: 'Great Knight' },
    { correlation: 0.39, Name: 'Sword Armor' },
    { correlation: 0.39, Name: 'Lance Armor' },
    { correlation: 0.39, Name: 'Axe Armor' },
    { correlation: 0.28, Name: 'Thief' }
  ],
  'Céline': [
    { correlation: 0.83, Name: 'Dancer' },
    { correlation: 0.73, Name: 'High Priest' },
    { correlation: 0.52, Name: 'Griffin Knight' },
    { correlation: 0.47, Name: 'Hero' },
    { correlation: 0.45, Name: 'Wolf Knight' }
  ],
  'Chloé': [
    { correlation: 0.56, Name: 'Royal Knight' },
    { correlation: 0.44, Name: 'Swordmaster' },
    { correlation: 0.42, Name: 'Bow Knight' },
    { correlation: 0.4, Name: 'Wolf Knight' },
    { correlation: 0.4, Name: 'Griffin Knight' }
  ],
  Citrinne: [
    { correlation: 0.99, Name: 'Sage' },
    { correlation: 0.86, Name: 'Mage Knight' },
    { correlation: 0.82, Name: 'High Priest' },
    { correlation: 0.8, Name: 'Martial Monk' },
    { correlation: 0.71, Name: 'Martial Master' }
  ],
  Clanne: [
    { correlation: 0.65, Name: 'Halberdier' },
    { correlation: 0.65, Name: 'Thief' },
    { correlation: 0.55, Name: 'Griffin Knight' },
    { correlation: 0.51, Name: 'Bow Knight' },
    { correlation: 0.51, Name: 'Royal Knight' }
  ],
  Diamant: [
    { correlation: 0.74, Name: 'General' },
    { correlation: 0.67, Name: 'Wyvern Knight' },
    { correlation: 0.66, Name: 'Sword Armor' },
    { correlation: 0.66, Name: 'Lance Armor' },
    { correlation: 0.66, Name: 'Axe Armor' }
  ],
  Etie: [
    { correlation: 0.38, Name: 'Hero' },
    { correlation: 0.38, Name: 'Berserker' },
    { correlation: 0.37, Name: 'Paladin' },
    { correlation: 0.35, Name: 'Wyvern Knight' },
    { correlation: 0.33, Name: 'Dancer' }
  ],
  Fogado: [
    { correlation: 0.47, Name: 'Griffin Knight' },
    { correlation: 0.4, Name: 'Swordmaster' },
    { correlation: 0.39, Name: 'Royal Knight' },
    { correlation: 0.36, Name: 'Dancer' },
    { correlation: 0.32, Name: 'Hero' }
  ],
  Framme: [
    { correlation: 0.77, Name: 'Royal Knight' },
    { correlation: 0.74, Name: 'Griffin Knight' },
    { correlation: 0.67, Name: 'Swordmaster' },
    { correlation: 0.62, Name: 'Bow Knight' },
    { correlation: 0.57, Name: 'Hero' }
  ],
  Goldmary: [
    { correlation: 0.74, Name: 'Sword Armor' },
    { correlation: 0.74, Name: 'Lance Armor' },
    { correlation: 0.74, Name: 'Axe Armor' },
    { correlation: 0.66, Name: 'Great Knight' },
    { correlation: 0.55, Name: 'Wyvern Knight' }
  ],
  Hortensia: [
    { correlation: 0.84, Name: 'Dancer' },
    { correlation: 0.79, Name: 'Wolf Knight' },
    { correlation: 0.78, Name: 'Griffin Knight' },
    { correlation: 0.72, Name: 'High Priest' },
    { correlation: 0.67, Name: 'Swordmaster' }
  ],
  Ivy: [
    { correlation: 0.77, Name: 'Mage Knight' },
    { correlation: 0.58, Name: 'Martial Monk' },
    { correlation: 0.55, Name: 'Martial Master' },
    { correlation: 0.38, Name: 'Sage' },
    { correlation: 0.23, Name: 'Berserker' }
  ],
  Jade: [
    { correlation: 0.67, Name: 'Sword Armor' },
    { correlation: 0.67, Name: 'Lance Armor' },
    { correlation: 0.67, Name: 'Axe Armor' },
    { correlation: 0.63, Name: 'Great Knight' },
    { correlation: 0.61, Name: 'General' }
  ],
  Jean: [
    { correlation: 0.9, Name: 'Royal Knight' },
    { correlation: 0.85, Name: 'Griffin Knight' },
    { correlation: 0.69, Name: 'Sage' },
    { correlation: 0.65, Name: 'Wolf Knight' },
    { correlation: 0.62, Name: 'High Priest' }
  ],
  Kagetsu: [
    { correlation: 0.94, Name: 'Thief' },
    { correlation: 0.7, Name: 'Wolf Knight' },
    { correlation: 0.67, Name: 'Bow Knight' },
    { correlation: 0.64, Name: 'Sniper' },
    { correlation: 0.57, Name: 'Swordmaster' }
  ],
  Lapis: [
    { correlation: 0.61, Name: 'Royal Knight' },
    { correlation: 0.61, Name: 'Griffin Knight' },
    { correlation: 0.6, Name: 'Wolf Knight' },
    { correlation: 0.58, Name: 'Swordmaster' },
    { correlation: 0.57, Name: 'Thief' }
  ],
  Lindon: [
    { correlation: 0.54, Name: 'Berserker' },
    { correlation: 0.52, Name: 'Warrior' },
    { correlation: 0.49, Name: 'Mage Knight' },
    { correlation: 0.32, Name: 'General' },
    { correlation: 0.22, Name: 'Martial Monk' }
  ],
  Louis: [
    { correlation: 0.88, Name: 'Wyvern Knight' },
    { correlation: 0.87, Name: 'General' },
    { correlation: 0.85, Name: 'Sword Armor' },
    { correlation: 0.85, Name: 'Lance Armor' },
    { correlation: 0.85, Name: 'Axe Armor' }
  ],
  Mauvier: [
    { correlation: 0.78, Name: 'Sword Armor' },
    { correlation: 0.78, Name: 'Lance Armor' },
    { correlation: 0.78, Name: 'Axe Armor' },
    { correlation: 0.7, Name: 'General' },
    { correlation: 0.67, Name: 'Great Knight' }
  ],
  Merrin: [
    { correlation: 0.78, Name: 'Royal Knight' },
    { correlation: 0.75, Name: 'Griffin Knight' },
    { correlation: 0.58, Name: 'Bow Knight' },
    { correlation: 0.54, Name: 'Swordmaster' },
    { correlation: 0.51, Name: 'Wolf Knight' }
  ],
  Pandreo: [
    { correlation: 0.5, Name: 'Sage' },
    { correlation: 0.47, Name: 'Wolf Knight' },
    { correlation: 0.44, Name: 'Royal Knight' },
    { correlation: 0.43, Name: 'Griffin Knight' },
    { correlation: 0.42, Name: 'Bow Knight' }
  ],
  Panette: [
    { correlation: 0.83, Name: 'Wyvern Knight' },
    { correlation: 0.77, Name: 'General' },
    { correlation: 0.75, Name: 'Great Knight' },
    { correlation: 0.75, Name: 'Berserker' },
    { correlation: 0.63, Name: 'Sword Armor' }
  ],
  Rosado: [
    { correlation: 0.56, Name: 'Warrior' },
    { correlation: 0.46, Name: 'Halberdier' },
    { correlation: 0.43, Name: 'Berserker' },
    { correlation: 0.42, Name: 'Paladin' },
    { correlation: 0.35, Name: 'Sniper' }
  ],
  Saphir: [
    { correlation: 0.84, Name: 'Wyvern Knight' },
    { correlation: 0.77, Name: 'Berserker' },
    { correlation: 0.72, Name: 'General' },
    { correlation: 0.69, Name: 'Warrior' },
    { correlation: 0.63, Name: 'Sword Armor' }
  ],
  Seadall: [
    { correlation: 0.79, Name: 'Dancer' },
    { correlation: 0.57, Name: 'Wolf Knight' },
    { correlation: 0.55, Name: 'High Priest' },
    { correlation: 0.52, Name: 'Swordmaster' },
    { correlation: 0.52, Name: 'Hero' }
  ],
  Timerra: [
    { correlation: 0.72, Name: 'Royal Knight' },
    { correlation: 0.68, Name: 'Griffin Knight' },
    { correlation: 0.64, Name: 'Thief' },
    { correlation: 0.62, Name: 'Bow Knight' },
    { correlation: 0.54, Name: 'Wolf Knight' }
  ],
  Vander: [
    { correlation: 0.78, Name: 'Sword Armor' },
    { correlation: 0.78, Name: 'Lance Armor' },
    { correlation: 0.78, Name: 'Axe Armor' },
    { correlation: 0.64, Name: 'General' },
    { correlation: 0.63, Name: 'Wyvern Knight' }
  ],
  Veyle: [
    { correlation: 0.77, Name: 'Martial Monk' },
    { correlation: 0.74, Name: 'Sage' },
    { correlation: 0.68, Name: 'Mage Knight' },
    { correlation: 0.64, Name: 'Royal Knight' },
    { correlation: 0.64, Name: 'Martial Master' }
  ],
  Yunaka: [
    { correlation: 0.75, Name: 'Griffin Knight' },
    { correlation: 0.74, Name: 'Royal Knight' },
    { correlation: 0.6, Name: 'Bow Knight' },
    { correlation: 0.57, Name: 'Swordmaster' },
    { correlation: 0.54, Name: 'Hero' }
  ],
  Zelkov: [
    { correlation: 0.87, Name: 'Great Knight' },
    { correlation: 0.77, Name: 'Wyvern Knight' },
    { correlation: 0.7, Name: 'Sword Armor' },
    { correlation: 0.7, Name: 'Lance Armor' },
    { correlation: 0.7, Name: 'Axe Armor' }
  ]
}
```


