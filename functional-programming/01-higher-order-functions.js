// var triple = function(x) {
//     return x*3
// }
//
// var waffle = triple
//
// waffle(3)

var animals = [
    {name : 'Fluffykins', species : 'rabbit'},
    {name : 'Caro', species : 'dog'},
    {name : 'Hamilton', species : 'fish'},
    {name : 'Harold', species : 'cat'},
    {name : 'Jimmy', species : 'fish'}
]

// var dogs = []
// for (var i = 0; i < animals.length; i++) {
//     if (animals[i].species === 'dog')
//         dogs.push(animals[i])
// }


// var dogs = animals.filter(function(animal) {
//     return animal.species === 'dog'
// })

var isDog = function(animal) {
    return animal.species === 'dog'
}

var dogs = animals.filter(isDog)

console.log("dogs")
console.log(dogs)

var fishes = animals.filter((x) => x.species === 'fish')
console.log("fishes")
console.log(fishes)
