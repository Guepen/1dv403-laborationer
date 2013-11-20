"use strict";

var makePerson = function(persArr){

var nameArr = [];
var ageArr = [];
var totalAge = 0;
var averageAge;
var i = 0;

for(i; i < persArr.length; i++){
    nameArr.push(persArr[i].name);
    ageArr.push(persArr[i].age);
    totalAge += persArr[i].age;
    console.log([i]);
}

nameArr.sort();
ageArr.sort();

var obj = {
    minAge: ageArr[0],
    maxAge: ageArr[ageArr.length - 1],
    averageAge: Math.round(totalAge/ageArr.length),
    names: nameArr.join(", ")
};
      
return obj;

};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var obj = makePerson(data);
