
const characters = ['goku', 'vegeta', 'trunks']

const [g, v, t, goten = 'No tiene valor'] = characters;

const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()

console.log(letters, numbers);

