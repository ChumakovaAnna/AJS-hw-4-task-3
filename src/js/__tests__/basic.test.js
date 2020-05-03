import setUpAttacks from '../basic';

describe('setUpAttacks', () => {
  test('shield = false, Archer, damage = 9', () => {
    const characters = [
      { name: 'Magician', health: 40 },
      { name: 'Archer', health: 10 },
      { name: 'Swordsman', health: 100 },
    ];
    const attacks = setUpAttacks(characters, false);
    const expected = [
      { name: 'Magician', health: 40 },
      { name: 'Archer', health: 1 },
      { name: 'Swordsman', health: 100 },
    ];
    attacks[1](9);
    const result = characters;
    expect(result).toEqual(expected);
  });
  test('Archer, damage = 9', () => {
    const characters = [
      { name: 'Magician', health: 40 },
      { name: 'Archer', health: 10 },
      { name: 'Swordsman', health: 100 },
    ];
    const attacks = setUpAttacks(characters);
    const expected = [
      { name: 'Magician', health: 37 },
      { name: 'Archer', health: 7 },
      { name: 'Swordsman', health: 97 },
    ];
    attacks[1](9);
    const result = characters;
    expect(result).toEqual(expected);
  });
  test('Magician, damage = 10', () => {
    const characters = [
      { name: 'Magician', health: 40 },
      { name: 'Archer', health: 10 },
      { name: 'Swordsman', health: 100 },
    ];
    const attacks = setUpAttacks(characters);
    const expected = [
      { name: 'Magician', health: 36 },
      { name: 'Archer', health: 7 },
      { name: 'Swordsman', health: 97 },
    ];
    attacks[0](10);
    const result = characters;
    expect(result).toEqual(expected);
  });
  test('Swordsman, damage = 60', () => {
    const characters = [
      { name: 'Magician', health: 40 },
      { name: 'Archer', health: 10 },
      { name: 'Swordsman', health: 100 },
    ];
    const attacks = setUpAttacks(characters);
    const expected = [
      { name: 'Magician', health: 20 },
      { name: 'Archer', health: 0 },
      { name: 'Swordsman', health: 80 },
    ];
    attacks[2](60);
    const result = characters;
    expect(result).toEqual(expected);
  });
});
