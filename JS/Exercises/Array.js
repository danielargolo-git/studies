//Array
    // Taking out from Python, aside from numbers and symbol, all the rest has some kind of corelation with Python.
    // Numbers: It is literally any number. float, integers, an int that was converted to an object type - Anything.
    // Symbol: It is an immutable variable that can have more then one variable with the same name and still be different from each other. 
        //This makes this variable type useful for projects with global variables that can or need different values for practicicity or usefulnes.  

const number1 = '123';
const number2 = '1,23';
const string = 'Oi!';
const boolean = true;
const Null = null;
const object = ("New Object");
const simbol = Symbol();
const printsimbol = {[simbol]: 'This is a symbol!' };


console.log("//");
console.log("//");
console.log("This script shows an exemple of most data type in js.");
console.log("This is a number variable "+number1+ " and this is also a number variable "+number2+" .");
console.log("This is a string variable "+string+" .");
console.log("And this is a boolean variable "+boolean+" .");
console.log("This is a null variable that can be used as result or a tool for something "+Null+" .");
console.log("This is an object type variable "+object+" .");
console.log("And for the last one, this is a symbol variable "+printsimbol[simbol]+", and this one too: "+printsimbol[simbol]+" and although they have the same content and were called using the same variable, they are different");
console.log("//");
console.log("//");