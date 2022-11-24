var mode = require("./calculateMode");

console.log(mode.calculateMode([1,2,3,3])) //-> [3]
console.log(mode.calculateMode([4.5, 0, 0])) //-> [0])
console.log(mode.calculateMode([1.5, -1, 1, 1.5])) //-> [1.5]
console.log(mode.calculateMode([1,1,2,2])) //-> [1,2]
console.log(mode.calculateMode([1,2,3])) //-> [1,2,3]
console.log(mode.calculateMode(["who", "what", "where", "who"])) //-> ["who"]