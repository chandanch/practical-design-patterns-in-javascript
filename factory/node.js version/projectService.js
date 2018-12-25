/**
 * Service to add or get project details
 */
var ProjectService = function() {

    var get = function(id) {
        return {
            name: 'HMS File System',
            members: ['sam', 'john', 'pete'],
            active: true
        }
    }

    var add =  function(project) {
        console.log(project.name+ ' created successfully');
    }

    return {
        addProject: add,
        getProjectDetails: get
    }
}

module.exports = ProjectService();