import getMinHealth from "../getMinHealth";

describe("getMinHealth", () => {
  test("health > damage", () => {
    const character = { name: "Magician", health: 40 };
    const expected = { name: "Magician", health: 30 };
    const result = getMinHealth(character, 10);
    expect(result).toEqual(expected);
  });
  test("health < damage", () => {
    const character = { name: "Magician", health: 40 };
    const expected = { name: "Magician", health: 0 };
    const result = getMinHealth(character, 100);
    expect(result).toEqual(expected);
  });
});
