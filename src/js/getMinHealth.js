export default function getMinHealth(item, damage) {
  const targetItem = item;
  targetItem.health -= damage;
  if (targetItem.health < 0) {
    targetItem.health = 0;
  }
  return targetItem;
}
