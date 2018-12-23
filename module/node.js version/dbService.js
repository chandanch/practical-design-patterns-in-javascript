/**
 * Service to get & save data from/to DB
 */

var DBService = function() {
    var dbEndpoint = 'SQL://com.sql.proto/df/tasks';

    // get task from DB. For now returns a task object
    var get = function(id) {
        console.log('Fetching task from', dbEndpoint, id);
        return {
            name: 'Get pending tasks from DB'
        }
    }

    // saves task in DB
    var save = function(task) {
        console.log('Saving task in DB...');
        console.log(task.name + ' is saved successfully in DB');
    }

    // expose/reveal get & save to other modules
    return {
        get: get,
        save: save
    }
}

module.exports = DBService();