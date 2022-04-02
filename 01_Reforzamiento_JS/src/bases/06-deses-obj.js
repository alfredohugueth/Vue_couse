const persona = {
    name: 'tony',
    age: 45,
    codeName: 'IronMan'
}

const {age, codeName, name, power = 'no tiene poder'} = persona

// console.log(age);
// console.log(codeName);
// console.log(name);
// console.log(power);


const createHero = ( { name, age, codeName, power = 'No tiene poder' } ) =>
        ({
            id: 1233,
            name: name,
            age: age,
            codeName: codeName,
            power: power
        })    


console.log(createHero(persona));
