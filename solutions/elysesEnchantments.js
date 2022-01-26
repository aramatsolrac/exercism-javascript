const cards = [2, 4, 6, 8, 10]
const position = 1;
const newCard = '*';
const stackSize = 4;


function getItem(cards, position) {
    return cards[position];
}

function setItem(cards, position, newCard) {
    cards[position] = newCard;
    return cards;
}

function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
}

function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
}

function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
}

function removeItemFromTop(cards) {
    cards.pop();
    return cards;
}

function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}

function checkSizeOfStack(cards, stackSize) {
    return cards.length === stackSize;
}

console.log(getItem(cards, position)); // => 4
console.log(setItem(cards, position, newCard)); // => [ 2, '*', 6, 8, 10 ]
console.log(insertItemAtTop(cards, newCard)); // =>  2, '*', 6, 8, 10, '*' ]
console.log(insertItemAtBottom(cards, newCard)); // => ['*',  2, '*', 6, 8, 10, '*']
console.log(removeItem(cards, position)); // => [ '*', '*', 6, 8, 10, '*' ]
console.log(removeItemFromTop(cards)); // => [ '*', '*', 6, 8, 10 ]
console.log(removeItemAtBottom(cards)); // => [ '*', 6, 8, 10 ]
console.log(checkSizeOfStack(cards, stackSize)); // => true