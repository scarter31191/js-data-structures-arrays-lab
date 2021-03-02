const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver() {
    return drivers.push('Ralph');
}

function destructivelyPrependDriver() {
    return drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
    return drivers.pop('Garfield');
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift('Milo')
}

function appendDriver() {
    return drivers.concat("Broom")
}

function prependDriver() {
    return ["Arnold", ...drivers]
}

function removeLastDriver() {
    return drivers.slice(0,-1)
}

function removeFirstDriver() {
    return drivers.slice(1)
}

console.log(removeFirstDriver(drivers))



