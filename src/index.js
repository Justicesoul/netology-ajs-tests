export const lifeLine = ({ health }) => {
  if (health > 50) {
    return 'healthy';
  } else if (health <= 50 && health > 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
};

export const sortedLifeLines = (units) => {
  return units
    .sort((a, b) => {
      return a.health - b.health;
    })
    .reverse();
};
