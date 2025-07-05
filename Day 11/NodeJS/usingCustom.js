
// const mathModule = require("../NodeJS/custom/math"); // common js way to import

//selective import
import Product, { Add, Subtract } from "../NodeJS/custom/math.js";

console.log(`The addition is : ${Add(20, 30)}`);
console.log(`The multiplication is : ${Product(20, 30)}`);