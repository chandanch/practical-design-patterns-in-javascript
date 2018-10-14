(function () {
    var app = angular.module('taskManager');

    // enclosing the task within a factory to incorporate into an angular application
    app.factory('Task', function () {
        var Task = function (data) {
            this.name = data.name;
            this.completed = data.completed
        }

        Task.prototype.complete = function () {
            console.log('completing task: ' + this.name);
            this.completed = true;
        };

        Task.prototype.save = function () {
            console.log('saving Task: ' + this.name);
        };
        // return the task object (similar to module.exports in node.js)
        return Task;
    });

}());