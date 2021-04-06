// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,name) {
    return drivers.filter( matchingDriver =>
        matchingDriver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

function matchName(drivers, name) {
    return drivers.filter( record => record.name === name);
}