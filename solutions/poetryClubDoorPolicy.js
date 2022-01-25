const poem = ['Stands so high ', 'Huge hooves too ', 'Impatiently waits for ', 'Reins and harness ', 'Eager to leave'];

function frontDoorResponse(line) {
    return line[0];
}

function frontDoorPassword(word) {
    const frontFirstLetter = word[0].toUpperCase();
    const frontRestLetters = word.slice(1, word.length).toLowerCase();
    return frontFirstLetter + frontRestLetters;
}

function backDoorResponse(line) {
    return line.trim().slice(-1);
}

function backDoorPassword(word) {
    const backFirstLetter = word[0].toUpperCase();
    const backRestLetters = word.slice(1, word.length).toLowerCase();
    return `${backFirstLetter}${backRestLetters}, please`;
}

const frontDoorRecite = () => {
    return poem.map((line) => frontDoorResponse(line));
};

const backDoorRecite = () => {
    return poem.map((line) => backDoorResponse(line));
};

const frontDoorPasswordResult = frontDoorPassword(frontDoorRecite(poem, frontDoorResponse).join(""));
const backDoorPasswordResult = backDoorPassword(backDoorRecite(poem, backDoorResponse).join(""));

console.log(frontDoorPasswordResult); // => Shire
console.log(backDoorPasswordResult); // => Horse, please