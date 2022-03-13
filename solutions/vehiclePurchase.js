function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}

console.log(needsLicense("car")); // true
console.log(needsLicense("bike")); // false

function chooseVehicle(option1, option2) {
  const sortOption = [option1, option2].sort();
  return `${sortOption[0]} is clearly the better choice.`;
}

console.log(chooseVehicle("Ford Pinto", "Bugatti Veyron")); // Bugatti Veyron is clearly the better choice.

function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else age >= 3 && age <= 10;
  {
    return originalPrice * 0.7;
  }
}

console.log(calculateResellPrice(25000, 7)); // 17500
