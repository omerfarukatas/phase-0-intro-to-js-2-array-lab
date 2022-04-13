// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

// function appendCat(name){
//     return cats.concat(name);
// }

// function appendCat(name){
//     return newCats = [...cats, name];
// }

function appendCat(name){
    return [...cats, name];
}



