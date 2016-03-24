console.log('loading customer_factory');
// create the NameFactory
console.log('OCModule',OCModule);
OCModule.factory('CustomerFactory', function($http) {
    var factory = {};
    var customers = [];
    factory.index = function(callback) {
        console.log("factory.index");
        // Where do we get access to $http?
        $http.get('/customers')
        .then(function(output) {
            customers = output.data;
            console.log("output =", output.data);
            callback(customers);
        })
        .catch (function(err) {
            console.log("err =", err );
            callback(err);
        });
    };

    factory.create = function(data, callback, forErrors) {
        console.log("factory.new data:", data);
        console.log('the customer name', data);
        $http.post('/customers',data)
        .then(function(output) {
            console.log("get /new response: ", output.data);
            callback(output.data);
        })
        .catch (forErrors);
    };

    factory.remove = function(data, callback) {
        console.log("factory.remove data:", data);
        $http.get('/customers/remove/' + data)
        .then(function() {
            console.log("remove response");
            callback();
        })
        .catch (function(err){
            console.log("err =", err );
        });
    };

    return factory;
});
