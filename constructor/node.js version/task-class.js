'use strict'

/**
 * Classes were introduced in ECMASript 2015 or ES6
 * Classes are supported from node version 6 & above 
 */
class Task {
    constructor(name) {
        this.name = name; 
        this.complete = false;
    }

    finishTask() {
        this.complete = true;
        // `this would refer to the object scope`
        console.log('Task ' + this.name + ' ' + 'is now complete');
    }
    
    saveTask() {
        console.log('Task ' + this.name + ' is now saved');
    }
    
    removeTask() {
        console.log(this.name + ' is removed');
    }
    
    showTaskDetails() {
        console.log(this.name + ': completed: ' + this.complete);
    }
}

// creating multiple instances of Task using the new keyword
var task1 = new Task('fetch app logs');
var task2 = new Task('fetch MongoDB logs');
var task3 = new Task('fetch shell logs');
var task4 = new Task('identify failed payments');

// invoking the functions of the objects
task1.saveTask();
task2.showTaskDetails();
task3.removeTask();
task4.finishTask();