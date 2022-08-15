let num1 = +prompt('num');
let num2 = +prompt('num');
let method = prompt('method');
function count(num1, num2, method) {
let result;
      switch (method) {
        case "+":
          result = num1 + num2;
            break;
        case "-":
         result = num1 - num2;
             break;
         case "*":
         result = num1 * num2;
             break
         case "/":
         result = num1 / num2;  
      } 
      alert(result);
    }
  count(num1,num2,method);