/**
 * Factory: imports all the dependencices at once place
 * The imported dependencies are stored in a object and the object will returned
 */
var moduleFactory = function() {
    // refers to the object scope of `moduleFactory`
    var modules = this;

    // add all the modules than needs to be imported
    var moduleList = [
        {name: 'userService', path: './userService'},
        {name: 'projectService', path: './projectService'},
        {name: 'Task', path: './task'}
    ]

    // import each of the module into modules object
    moduleList.forEach(function (moduleDep) {
        // add the module name as property and import a specific module from the path
        modules[moduleDep.name] = require(moduleDep.path);
    })
}

module.exports = new moduleFactory;