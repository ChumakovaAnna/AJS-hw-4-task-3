import setUpAttacks from "./setUpAttacks";

console.log("worked");

const characters = [
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
  { name: "мечник", health: 10 },
];

const attacks = setUpAttacks(characters);

attacks[1](20); // атакуем лучника 9 баллами урона
console.log(characters);
