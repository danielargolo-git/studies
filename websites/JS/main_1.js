//Setting variables, concatenation and template string
    //Variables

    const name = 'Daniel';
    const age = 28;


    //Concatenation
    console.log('My name is ' + name + ' and I am ' + age + ' years old.');

    //Template string
    console.log(`My name is ${name}`);
    const hello = `My name is ${name}`;
    console.log(hello);



//Length and Split functions
    const s = 'Hello World';
    console.log('Length function practice:');
    
    console.log(s.length);
    console.log(s.toUpperCase());
    console.log(s.toLowerCase());
    console.log(s.substring(0, 5));
    console.log(s.substring(0, 5).toUpperCase());

    console.log('Split function practice:');

    const r = 'House, Car, Bike, Bus, Dog, Coffe, Time, Work'
    console.log(s.split(''));
    console.log(r.split(', '));
