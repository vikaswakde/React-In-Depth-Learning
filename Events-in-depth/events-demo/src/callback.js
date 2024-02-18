const hereos = ["Hanuman", "Superman", "Iron Man", "WonderWomen", "Nader"];


function exclaim(str) {
    return str + "!";
}

const exclaimedFunction = hereos.map((hero) => exclaim(hero));

console.log(exclaimedFunction);

