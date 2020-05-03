export default function setUpAttacks(items, shield = true) {
  const result = [];

  for (let i = 0; i < items.length; i += 1) {
    const getHit = (damage) => {
      const targetOfAttack = items[i];
      const aliveCharacters = items.filter((item) => item.health > 0);
      if (shield && targetOfAttack.health > 0) {
        const damageForOne = Math.floor(damage / aliveCharacters.length);
        const damageBalance = damage - damageForOne * aliveCharacters.length;
        if (targetOfAttack.health > (damageForOne + damageBalance)) {
          targetOfAttack.health -= damageBalance;
          for (const item of aliveCharacters) {
            item.health -= damageForOne;
            if (item.health < 0) {
              item.health = 0;
            }
          }
        }
      } else {
        targetOfAttack.health -= damage;
      }
    };
    result.push(getHit);
  }
  return result;
}
