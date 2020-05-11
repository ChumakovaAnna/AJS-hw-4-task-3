import getMinHealth from "./getMinHealth";

export default function setUpAttacks(items, shield = true) {
  const result = items.map((i) => {
    const targetOfAttack = i;
    const getHit = (damage) => {
      if (!shield) {
        getMinHealth(targetOfAttack, damage);
      } else {
        const aliveCharacters = items.filter((item) => item.health > 0);
        const damageBalance = damage % aliveCharacters.length;
        const damageForOne = (damage - damageBalance) / aliveCharacters.length;
        for (const item of aliveCharacters) {
          getMinHealth(item, damageForOne);
        }
        targetOfAttack.health -= damageBalance;
      }
    };
    return getHit;
  });
  return result;
}
