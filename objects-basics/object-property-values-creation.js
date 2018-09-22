/**
 * Object Creation:
 * Objects in JS can be created in 3 ways:
 * 1. Empty curly braces {}
 * 2. Using the create method: create()
 * 3. Using the `new` keyword: new Object()
 */

// Method 1: Using empty curly braces {}
var player = {}

// Method 2: Using create method
var task = Object.create(Object.prototype);
// console.log(userDetails);

// Method 3: Using the new keyword
var userDetails = new Object();
// console.log(userDetails);

/**
 * Adding properties & values
 * An object will ideally consist of propeties and its values.
 * There are 2 ways to create properties
 * 1. Dot notation 
 * 2. Square bracket notation
 * One of the advantage of square bracket notation is that we 
 * have the flexibility to dynamically pass variable values as 
 * property names or values
 */

// Method 1: Dot notation: adding property and value
player.name = "Sam";
player.score = 35;
console.log(player);

// Method 2: Square bracket notation
task["name"] = "Connect micro plug";
task["severity"] = "low";
console.log(task)

// adding values of variable(s) as property name or value
var propertyName = "description";
task[propertyName] = "The micro plug is currently removed";
var propertyValue = "5 hrs";
task["eta"] = propertyValue;
console.log(task) 
