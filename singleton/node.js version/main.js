var taskHandler = require('./taskHandler');

var task1 = {name: 'Get server logs'};
var task2 = {name: 'Purge cache'};
var task3 = {name: 'Check app logs'};

taskHandler.save(task1);
taskHandler.save(task2);
taskHandler.save(task3);

