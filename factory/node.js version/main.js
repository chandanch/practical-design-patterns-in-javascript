var moduleFactory = require('./moduleFactory')

// create a new instance of task from module factory
var task1  = new moduleFactory.Task({name: 'Get Server logs', isCompleted: false});

task1.saveTask();

console.log(moduleFactory.userService.getUser(1));
console.log(moduleFactory.projectService.getProjectDetails(1));

// var task1 = new Task({name: 'Check line data', isCompleted: false});
