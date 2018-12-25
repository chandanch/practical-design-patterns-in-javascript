/**
 * Singleton Pattern: Restricts to create only one instance of an object throught the application
 * 
*/

var TaskRepo = (function () {
    // variable to hold the instance of task: Instance holder
    var taskRepo;
    var createRepo = function() {
        // create a new instance of task
        var taskRepo = new Object('Task');
        // return the newly created instance
        return taskRepo;
    }

    return {
        // gateway to instance creation/resuse
        getInstance: function() {
            // check if the new instance is already created
            if (!taskRepo) {
                // if not created then create a new instance of task
                taskRepo = createRepo();
            }
            // return  the new/existing instance
            return taskRepo;
        }
    }
})();

// get the instance of task
var task1 = TaskRepo.getInstance();
var task2 = TaskRepo.getInstance();

if (task1 == task2) {
    console.log('task 1 & task 2 are same');
}


