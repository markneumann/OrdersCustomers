console.log('loading order_factory');
// create the NameFactory
OCModule.factory('OrderFactory', function($http) {
    var factory = {};
    var orders = [];

    factory.index = function(callback) {
        console.log("factory.index");
        // Where do we get access to $http?
        $http.get('/orders')
        .then(function(output) {
            orders = output.data;
            console.log("output =", output.data);
            callback(orders);
        })
        .catch (function(err) {
            console.log("err =", err );
        });
    };

    // factory.create = function(data, callback) {
    //     console.log("factory.new data:", data);
    //     console.log('the order name', data);
    //     $http.post('/order/new/',data)
    //     .then(function(output) {
    //         console.log("get /new response: ", output.data);
    //         callback(output.data);
    //     })
    //     .catch (function(err){
    //         console.log("err =", err );
    //     });
    // };
    //
    // factory.remove = function(data, callback) {
    //     console.log("factory.remove data:", data);
    //     $http.get('/cusomter/remove/' + data)
    //     .then(function() {
    //         console.log("remove response");
    //         callback();
    //     })
    //     .catch (function(err){
    //         console.log("err =", err );
    //     });
    // };

    return factory;
});
