/**
 * @author chandanch
 * DBService to save & get data from DB
 */

(function () {
    // define the app and the module
    var app = angular.module('taskManager');
    var dbService = function ($http) {

        var dbEndpoint = 'SQL://com.sql.proto/df/tasks';

        // get task from DB. For now returns a task object
        var get = function (id) {
            console.log('Fetching task from', dbEndpoint, id);
            return {
                name: 'Correct typos'
            }
        }

        // saves task in DB
        var save = function (task) {
            console.log('Saving task in DB...');
            setTimeout(function () {
                // simulating DB save
                console.log(task.name + ' is saved successfully in DB');
            }, 2000);
        }

        // expose/reveal get & save to other modules
        return {
            get: get,
            save: save
        }
    }

    // create a service 
    app.service('DBService', dbService);

}())