var animals = [
    {name : 'Fluffykins', species : 'rabbit'},
    {name : 'Caro', species : 'dog'},
    {name : 'Hamilton', species : 'fish'},
    {name : 'Harold', species : 'cat'},
    {name : 'Jimmy', species : 'fish'}
]
/*
var names = []
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name)
}
*/

// var names = [];for (var i = 0; i < animals.length; i++) { names.push(animals[i].name)}
// var names = animals.map(function(animal) { return animal.name})

var names = animals.map((x) => x.name)

console.log(names);
