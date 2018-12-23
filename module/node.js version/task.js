var DBService = require('./dbService');

// creating a task object
var Task = function(data) {
    // `this` would refer to the object scope`
    this.name = data.name; 
    this.complete = false;
}

Task.prototype.finishTask = function() {
    this.complete = true;
    // `this would refer to the object scope`
    console.log('Task ' + this.name + ' ' + 'is now complete');
}

Task.prototype.saveTask = function() {
    // save task in DB by passing the task object: this represents the task object here
    DBService.save(this);
    console.log('Task ' + this.name + ' is now saved');
}

Task.prototype.removeTask = function() {
    console.log(this.name + ' is removed');
}

Task.prototype.showTaskDetails = function() {
    console.log(this.name + ': completed: ' + this.complete);
}

module.exports = Task;