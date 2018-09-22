/**
* Inheritance: An object's properties & methods can be inherited   to other objects usingthe Object.createMethod() for inheritance. 
*/


// base object
var task = {};
task.title = 'Check Log';
task.description = 'Check app logs for failed login';
task.showDetails = function() {
  return this.title + ': ' + this.description;
}

console.log(task.showDetails())

// derived object: inherited properites(title, description) and a function(showDetails) from task object
var urgentTask = Object.create(task);
urgentTask.description = 'is an urgent task'
console.log(urgentTask.showDetails());
