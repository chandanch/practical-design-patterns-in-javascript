var Task = require('./task');
var DBService = require('./dbService');

// creating multiple tasks using new keyword. i.e. creating multiple copies of task
var task1 = new Task(DBService.get(1));
var task2 = new Task({name: 'fetch MongoDB logs'});
var task3 = new Task('fetch shell logs');
var task4 = new Task('identify failed payments');

// invoking the functions of the objects
task1.saveTask();
task2.saveTask();
