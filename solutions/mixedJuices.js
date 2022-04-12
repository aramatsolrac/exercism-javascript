function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;

    case "Energizer":
    case "Green Garden":
      return 1.5;
      break;

    case "Tropical Island":
      return 3;
      break;

    case "All or Nothing":
      return 5;

    default:
      return 2.5;
  }
}

console.log(timeToMixJuice("Pure Strawberry Joy")); // 0.5

function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  while (wedgesNeeded > 0 && i < limes.length) {
    switch (limes[i]) {
      case "small":
        wedgesNeeded = wedgesNeeded - 6;
        break;
      case "medium":
        wedgesNeeded = wedgesNeeded - 8;
        break;
      case "large":
        wedgesNeeded = wedgesNeeded - 10;
        break;
    }
    i++;
  }
  return i;
}

console.log(limesToCut(25, ["small", "small", "large", "medium", "small"])); // 4

function remainingOrders(timeLeft, orders) {
  let i = 0;
  while (timeLeft > 0) {
    switch (orders[i]) {
      case "Pure Strawberry Joy":
        timeLeft = timeLeft - 0.5;
        break;
      case "Energizer":
      case "Green Garden":
        timeLeft = timeLeft - 1.5;
        break;
      case "Tropical Island":
        timeLeft = timeLeft - 3;
        break;
      case "All or Nothing":
        timeLeft = timeLeft - 5;
        break;
      default:
        timeLeft = timeLeft - 2.5;
    }
    orders.shift();
  }
  return orders;
}

console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
); // [ 'Green Garden' ]
