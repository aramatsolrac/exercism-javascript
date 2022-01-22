function dayRate(ratePerHour) {
    return ratePerHour * 8;
}

function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
}

const ratePerHour = 89;
const numDays = 230;
const discount = 0.42;

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const monthQtd = Math.floor(numDays / 22);
    const remainingDays = Math.floor(numDays % 22);
    const dayRateAmount = dayRate(ratePerHour);

    const monthTotalRate = monthQtd * 22 * dayRateAmount;
    const monthTotalRateWithDiscount = monthTotalRate - (monthTotalRate * discount)
    const remainingDaysRate = remainingDays * dayRateAmount;
    return Math.ceil(monthTotalRateWithDiscount + remainingDaysRate);
}


console.log(priceWithMonthlyDiscount(ratePerHour, numDays, discount)); // => 97972  