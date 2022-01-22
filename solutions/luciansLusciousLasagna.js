const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

console.log(totalTimeInMinutes(3, 10)); // => 16