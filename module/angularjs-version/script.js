(function(){
    var app = angular.module('taskManager', []);
    
    // load the Task factry in the task controller
    var taskController = function(Task, DBService) {
        var ctrl = this;
        ctrl.tasks = [
            // get the task from DBsevice and create a new instance of task
            new Task(DBService.get(1)),
            new Task({name: 'Build iOS app', completed: false})
        ];
    }

    app.controller('taskCtrl', taskController)
}());