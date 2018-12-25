/**
 * Service to add or get user details
 */
var UserService = function() {

    var get = function(id) {
        return {
            name: 'Chandio',
            team: 'MIG Dev',
            roles: 'developer'
        }
    }

    var add =  function(user) {
        console.log(user.name+ ' added successfully');
    }

    return {
        addUser: add,
        getUser: get
    }
}

module.exports = UserService();