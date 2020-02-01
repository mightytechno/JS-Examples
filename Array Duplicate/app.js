const animals = ['🐞','🐌','🐳','🐏','🐙','🐙','🐌'];

var removeDuplicateUsingTwoArrays = function(){
    let uniqueAnimals = [];
    for(var i = 0 ; i < animals.length ; i++){
        if(!uniqueAnimals.includes(animals[i])){
            uniqueAnimals.push(animals[i])
        }
    }
    return uniqueAnimals;
}

var removeDuplicateUsingFilter = function(){
    return uniqueAnimals = animals.filter(function(item,index){
        return animals.indexOf(item) == index;
    });
}

var removeDuplicateUsingSet = function(){
    return uniqueAnimals = [...new Set(animals)];
}

var removeDuplicateUsingForEach = function(){
    let uniqueAnimals = {};
    animals.forEach(function(i){
        if(!uniqueAnimals[i]){
            uniqueAnimals[i] = true;
        }
    })
   return Object.keys(uniqueAnimals);
}

var removeDuplicateUsingReduce = function(){
    return animals.reduce((uniqueAnimals,currentValue) => {
        return uniqueAnimals.includes(currentValue) ? uniqueAnimals : [...uniqueAnimals,currentValue];
    },[])

}

//console.log(removeDuplicateUsingTwoArrays());

//console.log(removeDuplicateUsingFilter());

//onsole.log(removeDuplicateUsingSet());

//console.log(removeDuplicateUsingForEach());

console.log(removeDuplicateUsingReduce());