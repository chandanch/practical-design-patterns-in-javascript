(function(){
    var app = angular.module('taskManager', []);
    
    // load the Task factry in the task controller
    var taskController = function(Task) {
        var ctrl = this;
        ctrl.tasks = [
            new Task({name: 'task1'}),
            new Task({name: 'task2', completed: false})
        ];
    }

    app.controller('taskCtrl', taskController)
}());