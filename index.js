const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
    return drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
    return drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop('Garfield');
}

function destructivelyRemoveFirstDriver(name) {
    return drivers.shift('Milo')
}

function appendDriver(name) {
    return drivers.splice(3,0,"Broom")
}

console.log()



