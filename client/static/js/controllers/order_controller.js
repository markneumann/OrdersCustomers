console.log('loading order_controller');
// Now let's create a controller with some hardcoded data!
OCModule.controller('OrderController', function($scope, OrderFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    OrderFactory.index(function(data) {
        console.log("OrderFactory.index");
        $scope.orders = data;
        console.log("$scope.orders =", $scope.orders);
        // anything else that you want to happen after storing orders to $scope
    });

    $scope.addorder = function() {
        // note the use of callbacks here
        OrderFactory.create($scope.new_order, function(theOutput) {
            console.log("new order =", $scope.new_order);
            console.log('returned order', theOutput);
            $scope.orders.push($scope.new_order);
            $scope.new_order = {};
            console.log('new $scope.orders ', $scope.orders);
        });
    };

    $scope.removeorder = function(order) {
        var removeThisOrder =$scope.orders.indexOf(order);
        console.log('removeorder: ', removeThisOrder);
        console.log('$scope.orders = ', $scope.orders);
        console.log('remove_id: ', $scope.orders[removeThisOrder]._id);
        if(~removeThisOrder){
            var remove_id = $scope.orders[removeThisOrder]._id;
            // note the use of callbacks here
            OrderFactory.remove(remove_id, function() {
                console.log("remove order =", removeThisOrder);
                $scope.orders.splice(removeThisOrder,1);
            });
        }
    };

});
