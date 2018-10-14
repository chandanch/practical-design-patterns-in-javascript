var Task = require('./task');

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