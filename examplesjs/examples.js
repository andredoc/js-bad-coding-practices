class ErrorsInJavascriptCoding {
    //5.1.3 Don't declared a variable at the start of their containing block
    name;
    //5.2.1 Don't use a trailing comma whenever there is a line break between the final element and the closing bracket
    values = [
        'first value',
        'second value',     // 5.3.1 Don't use this ending comma
    ]
    //5.2.2 Don't use variadic Array constructor
    ArrayExample1 = new Array(true,4,"Alberto"); // 5.2.2 Use [] in the array instead. Example: ArrayExample2= [true,4,"Alberto"]

    food1 = ['🥗','🍗','🍕'];
    food2 = ['🍔','🌭','🍟'];
     //***5.2.5 Instead of copy an array with the same reference's point.
     
     copyFood1 = Array.prototype.slice.call(this.food1);
     //You can use spread operator to clone the array and reference to other point    -->  copyFood1 = [...this.food1];
     
     food3 = this.food1.concat(this.food2);
     //5.2.5 Don't use concat() method to unit 2 or more arrays.  
     //Instead you can use spread operator to clone a new array with all the elements --> food3 = [...this.food1, ...this.food2];
  
     objectCar = {
     //***5.3.3 Do'nt mix quoted and unquoted keys
         name: 35,              //struct-style unquoted key
         model: "Mario",        //5.6.1 Don't use double quotes in. Use single quote --> model: 'Mario'
         weight: 850,           //struct-style unquoted key
         'color': 'white',      //dict-style quoted key
         year: 2021             //struct-style unquoted key
     }

    duplicateNumber(arrayNumber) {
    //5.2.3 Don't use a non-numeric properties on an array (other than "length"). Use a Map instead
        const doubleNumbers = arrayNumber.map(num => num*2);
        return doubleNumbers;
    }

    badDestructuring([a, b]= [2,4]) {
    //5.2.4 Function Disallowed
        return `a: ${a} y b: ${b}`;
    }
    optionalDestructuring([a=4, b=2]= []) {
    //5.2.4 Use this instead
        return `a: ${a} y b: ${b}`;
    }

    constUse(constant){
        //5.1.1 var Don't use const instead
        var savedAge = constant;
        console.log(savedAge)
    }
    letUse(color){
        //5.1.1 var Don't, use let instead
        var  customColor = color;
        customColor = 'red'
        console.log(customColor)
    }
    oneVariablePerDeclaration(){
        //5.1.2 let a = 1, b = 2 don't; use inline declaration instead
        //5.1.2  let a = 1;
        //5.1.2  let b = 2;
        let a = 1, b = 2;
        return a + b;
    }
    declareWhenNeeded() {
        //5.1.3 Local variable not initialized in this containing block 
        return this.name = "Juan";       
    }

    getterTest() {
        const obj = {
            log: ['a', 'b', 'c'],
            get latest() {       // 5.4.7 Don't use javascript getter and setter properties. They have limited support in the compiler. Exception: in frameworks like Angular and Polymer it can be used with caution.  
                return this.log[this.log.length - 1];
            }
        }
        return obj.latest;
    }

    testArrowFunction() {
        const obj = {
            log: ['a', 'b', 'c'],
            latest: () => obj.log[obj.log.length - 1]   //5.5.3 Don't use "this" with Arrow functions. Using arrow functions simplify scoping this for nested functions.
        }
        return obj.latest();
    }
      
    equalityChecks(num) {
        //5.10 == Don't, use  === instead
        return num ==1; 
    }
    evaluateSum(num1,num2) {
    //5.11.2 Don't use eval(). It could potentially compromise the security if the user enters malicious code
        const code= "num1 + num2";
        const sum= eval(code);
        return sum;
    }; //5.11.3 Don't terminate function's statements with semicolons.

    arithmetic(a, b, c) {
        //Don't use simple quotes in complex string concatenation --> console.log('Here is a table of arithmetic operations:', a+b, c) 
    
        //5.6.2 Use template literals over complex string concatenation
        console.log(`Here is a table of arithmetic operations:
        ${a} + ${b} = ${a + b}
        ${a} - ${b} = ${a - b}
        ${a} * ${b} = ${a * b}
        ${a} / ${b} = ${a / b}`);  //Always use a semicolon in breaklines
    }

    guessYearsOld(age, name) {
        //Extra: Don't use if nested statement 
        if(age < 18) {
            console.log(`${name} is under 18 years old`)
        } else if(age >=18 && age <=21) {
            console.log(`${name} is between 18 and 21 years old`)
        } else if(age >=22 && age <=31){
            console.log(`${name} is between 22 and 31 old`)
        } else if(age >=32 && age <=41) {
            console.log(`${name} is between 32 and 41 years old`)
        } else if(age >=42 && age <=51) {
            console.log(`${name} is between 42 and 51 years old`)
        } else {
            console.log(`${name} has more than 51 years old`)
        }
    }

}; //5.11.3 Don't terminate classes statements with semicolons.

const example = new ErrorsInJavascriptCoding();
const result = example.equalityChecks("1")
console.log(result);
console.log(example.duplicateNumber([1,2,3,4,5]));
console.log(example.evaluateSum(1,2));
console.log(example.badDestructuring());
console.log(example.badDestructuring([]));
console.log(example.badDestructuring([6,8]));
console.log(example.optionalDestructuring());
console.log(example.optionalDestructuring([]));
console.log(example.optionalDestructuring([6,8]));
console.log(example.copyFood1);
console.log(example.food3);
example.arithmetic(1,2,3);
console.log(example.getterTest());
console.log(example.testArrowFunction());
example.guessYearsOld(9, 'Jesus');





