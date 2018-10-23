import {BasicCalculator} from "./BasicCalculator";
import {ExpertCalculator} from "./ExpertCalculator";

let calc = new BasicCalculator();

console.log("ADD = ",calc.add(2,3));
console.log("DIF = ",calc.dif(4,2));
console.log("MUL = ",calc.mul(4,2));
console.log("DIV = ",calc.div(4,2));

let calcex = new ExpertCalculator();
console.log("FACTORIAL = ",calcex.factorial(4));
console.log("POW = ",calcex.pow(3,3));
console.log("SQRT = ",calcex.sqrt(9));

