import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero, Villian } from '../interfaces';
// printObject(123)

// console.log( genericFunction(3.1415).toFixed(2) );
// console.log( genericFunction('Hola').toUpperCase() );
// console.log( genericFunction(new Date()).getDate() );

// console.log( genericFunctionArrow(3.1415).toFixed(2) );
// console.log( genericFunctionArrow('Hola').toUpperCase() );
// console.log( genericFunctionArrow(new Date()).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wiston Wilson',
    dangerLavel: 130,
}

console.log( genericFunctionArrow<Hero>(deadpool))