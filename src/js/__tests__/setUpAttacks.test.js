import setUpAttacks from "../setUpAttacks";

describe("setUpAttacks", () => {
  test("shield = false, Archer, damage = 9", () => {
    const characters = [
      { name: "Magician", health: 40 },
      { name: "Archer", health: 10 },
      { name: "Swordsman", health: 100 },
    ];
    const attacks = setUpAttacks(characters, false);
    const expected = [
      { name: "Magician", health: 40 },
      { name: "Archer", health: 1 },
      { name: "Swordsman", health: 100 },
    ];
    attacks[1](9);
    const result = characters;
    expect(result).toEqual(expected);
  });
  test("Shield = true, Archer, damage = 9", () => {
    const characters = [
      { name: "Magician", health: 40 },
      { name: "Archer", health: 10 },
      { name: "Swordsman", health: 100 },
    ];
    const attacks = setUpAttacks(characters);
    const expected = [
      { name: "Magician", health: 37 },
      { name: "Archer", health: 7 },
      { name: "Swordsman", health: 97 },
    ];
    attacks[1](9);
    const result = characters;
    expect(result).toEqual(expected);
  });
  test("Shield = true, Magician, damage = 10", () => {
    const characters = [
      { name: "Magician", health: 40 },
      { name: "Archer", health: 10 },
      { name: "Swordsman", health: 100 },
    ];
    const attacks = setUpAttacks(characters);
    const expected = [
      { name: "Magician", health: 36 },
      { name: "Archer", health: 7 },
      { name: "Swordsman", health: 97 },
    ];
    attacks[0](10);
    const result = characters;
    expect(result).toEqual(expected);
  });
  test("Shield = true, Swordsman, damage = 600", () => {
    const characters = [
      { name: "Magician", health: 40 },
      { name: "Archer", health: 10 },
      { name: "Swordsman", health: 100 },
    ];
    const attacks = setUpAttacks(characters);
    const expected = [
      { name: "Magician", health: 0 },
      { name: "Archer", health: 0 },
      { name: "Swordsman", health: 0 },
    ];
    attacks[2](600);
    const result = characters;
    expect(result).toEqual(expected);
  });
});
