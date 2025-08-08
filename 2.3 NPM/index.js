import generateName from "sillyName";
var sillyName = generateName();
console.log(sillyName);

import superheroes, { randomSuperhero } from "superheroes";

const name = randomSuperhero();
console.log(`I am ${name}!`);
