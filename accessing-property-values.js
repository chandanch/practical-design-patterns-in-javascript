/**
* Propety values can be accessed using two ways:
* 1. Dot notation: <objectname>.<propertyname>
* 2. Square bracket notation: <objectname>["<propertyname>"]
*/

// creation of object and adding properties & values: Generic way of object creation
var userDetails = {
  name: 'chandio',
  zipcode: 3490,
  age: 22,
  isActive: true,
  boiush: "cladameir",
  preferredBeverage: "Coca shake"
}

// Method 1: Accessing property value using Dot notation
console.log("User name", userDetails.name);

// Method 2: Accessing property value using square bracker notation
console.log("User age", userDetails["age"]);
console.log("User boiush", userDetails["boiush"]);

// Accessing property value dynamically based on value of the variable
var code = "zipcode";
console.log("User zip code", userDetails[code]);
