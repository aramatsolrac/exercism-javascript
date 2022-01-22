const knightIsAwake = true;
const archerIsAwake = false;
const prisonerIsAwake = true;
const petDogIsPresent = false;

function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake;
};

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return !archerIsAwake && prisonerIsAwake
}

function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
) {
    return (!archerIsAwake && petDogIsPresent) || (!knightIsAwake && !archerIsAwake && prisonerIsAwake && !petDogIsPresent)
}

console.log(canFreePrisoner(false, true, false, false)); // => false