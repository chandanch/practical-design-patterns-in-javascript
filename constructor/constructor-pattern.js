/**
 * Constructor pattern: Allows us to create/make new objects within the object scope. 
 * We create a copy of the object using the `new` keyword
 * Any function can be a constructor function
 * The new keyword does the following when we place it in front of a function
 * 1. Creates a brand new object
 * 2. Links to object prototype
 * 3. Binds 'this' to the new object
 * 4. Implicitly returns this
 */

var Task = function(name) {
    // `this` would refer to the object scope`
    this.name = name; 
    this.complete = false;

    this.finishTask = function() {
        
        this.complete = true;
        // `this would refer to the object scope`
        console.log('Task ' + this.name + ' ' + 'is now complete');
    }

    this.saveTask = function() {
        console.log('Task ' + this.name + ' is now saved');
    }

    this.removeTask = function() {
        console.log(this.name + ' is removed');
    }

    this.showTaskDetails = function() {
        console.log(this.name + ': completed: ' + this.complete);
    }
} // new keyword would implicitly return this

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
