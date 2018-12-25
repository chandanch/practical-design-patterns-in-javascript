var TaskHandler = function() {

    console.log('Creating an instance of Task Handler');

    // counter to determine the no. of invocation of save()
    var taskSaveCount = 0;

    var save = function(task) {
        // increment the counter by 1 every time save is called
        taskSaveCount += 1;
        console.log(task.name + ' saved sucessfully', 'save count: ' + taskSaveCount);
    }

    var remove = function(task) {
        console.log(task.name + 'removed successfully')
    }

    return {
        save: save,
        remove: remove
    }
}

// create a single instance of TaskHandler, thuss Singleton pattern
// Note: module.exports will always cache the exported the module and hence we always get a single instance of a module
// module.exports = TaskHandler(); 
// Another way to create a single instance of TaskHandler, thus Singletion pattern
module.exports = new TaskHandler; // this way is used in most of the libs/module