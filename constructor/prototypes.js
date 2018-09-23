/**
 * Prototype: An encapsulation of properties that an object links to
 * Prototype allows to create methods of an object and links the method to
 * multiple copies of the object. 
 * Each copy of an object will have access to the methods of the object prototpye 
 * and will not have their own copies
 * Prototype syntax: <ClassName>.prototype.<methodname> = function() {....}
 * There will be only 1 copy of the method(s) sitting inside the object prototype
 * Every object copy will just link to that prototype
 */

// Adapting task constructor to prototype means of constructor
var Task = function(name) {
    // `this` would refer to the object scope`
    this.name = name; 
    this.complete = false;
}

// creating the methods on the task prototype
Task.prototype.finishTask = function() {
    this.complete = true;
    // `this would refer to the object scope`
    console.log('Task ' + this.name + ' ' + 'is now complete');
}

Task.prototype.saveTask = function() {
    console.log('Task ' + this.name + ' is now saved');
}

Task.prototype.removeTask = function() {
    console.log(this.name + ' is removed');
}

Task.prototype.showTaskDetails = function() {
    console.log(this.name + ': completed: ' + this.complete);
}

// creating multiple tasks using new keyword. i.e. creating multiple copies of task
var task1 = new Task('fetch app logs');
var task2 = new Task('fetch MongoDB logs');
var task3 = new Task('fetch shell logs');
var task4 = new Task('identify failed payments');

// invoking the functions of the objects
task1.saveTask();
task2.showTaskDetails();
task3.removeTask();
task4.finishTask();