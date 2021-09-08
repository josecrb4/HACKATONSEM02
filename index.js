// EJERCICIO 0
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];

const usersMapped = users.map((item) => {
    return {
        fullname: `${item.name} ${item.surname}`,
        id: item.id, 
    }
})

console.log(usersMapped)

// EJERCICIO 1
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits; shoppingCart.push("Banana");

console.log(shoppingCart); 

console.log(fruits.length); 

// EJERCICIO 2
let arrobj = ["Jazz", "Blues"];

console.log(arrobj);
arrobj.push("Rock-n-Roll");
console.log(arrobj);
arrobj[Math.floor((arrobj.length - 1) / 2)] = "Classics";
console.log(arrobj);
arrobj.shift();
console.log(arrobj);
arrobj.unshift("Rap", "Reggae");
console.log(arrobj);

// EJERCICIO 3

// EJERCICIO 4

let arr = [5, 3, 8, 1];
function filterRange(arr, a, b ){
  let newArr = []
  let filter = arr.filter(item => {
    
    if(a <= item && item <= b){
      newArr.push(item)
    }
  });

  return newArr;

}

let filtered = filterRange(arr, 1, 4);
console.log( filtered ); 
console.log( arr ); 

// EJERCICIO 5
// EJERCICIO 6
class Calculator{
    constructor(operador, valor1, valor2){
      this.operador = operador;
      this.valor1 = valor1;
      this.valor2 = valor2;
    }
    addMethod(operador, valor1 , valor2){
      let res = '' 
  
      switch (operador) {
        case '-':
          res = valor1 - valor2
          break;
        case '+':
          res = valor1 + valor2
          break;
        case '*':
          res = valor1 * valor2
          break;
        case '/':
          res = valor1 / valor2
          break;
        case '**': 
          res = valor1 ** valor2
          break;
      
        default:
          break;
      } 
      return res 
    }
    calculate(value){ 
      let operator = value.split(' ')[1]
      let a = value.split(' ')[0]
      let b = value.split(' ')[2]  
      const res = this.addMethod(operator, Number(a), Number(b) )
      return res
    }
  
  
  }
  let powerCalc = new Calculator; 
  let result = powerCalc.calculate("2 ** 3");
  console.log( result ); // 8
  console.log(powerCalc.calculate("2 - 3"));
  console.log(powerCalc.calculate("2 + 3"));
  console.log(powerCalc.calculate("2 * 3"));
  console.log(powerCalc.calculate("10 / 2"));