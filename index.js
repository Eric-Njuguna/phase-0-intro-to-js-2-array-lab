// Write your solution here!


let cats = ["Milo", "Otis", "Garfield"];

function arrayFunctions(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    return cats;
 }

 function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    let copyOfCats = [...cats,name];
    return copyOfCats;
}

function prependCat(name){
    let copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat(){
    let copyOfCats = [...cats];
    copyOfCats.splice(-1);
    return copyOfCats;
}

function removeFirstCat(){
    let copyOfCats = [...cats];
    copyOfCats.splice(0,1);
    return copyOfCats;
}

console.log(arrayFunctions());
//console.log(removeFirstCat());