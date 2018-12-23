/**
* Module Pattern: Provides a way to group like methods together
* Allows to encapsulate methods. 
* Create a 'toolbox` with methods that are similar 
*/

// Example for module patterns: Get Data via Ajax request

var HttpService = function() {
    // private var
    var url = 'http://someendpoint';

    var getData = function() {
        console.log('Fetching from', url);
        console.log("Data recevied from request");
    }

    var postData = function(data) {
        console.log('posting data to..', url);
        // adding delay to simulate the request
        setTimeout(function () {
            console.log('data posted successfully');
        }, 2000);
    }

    // return the object with two methods
    // follows the notion of Revealing module pattern where we list the method names
    // in the return method
    return {
        get: getData,
        post: postData
    }
}

module.exports = HttpService();