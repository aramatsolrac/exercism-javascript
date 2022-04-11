let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}
console.log(totalBirdCount(birdsPerDay)); // 34

function birdsInWeek(birdsPerDay, week) {
  return totalBirdCount(birdsPerDay.slice(week * 7 - 7, week * 7));
}
console.log(birdsInWeek(birdsPerDay, 1)); // 12

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}
console.log(fixBirdCountLog(birdsPerDay)); // [ 3, 5, 1, 7, 5, 1, 4, 0, 3, 5, 1, 1, 4, 1]
