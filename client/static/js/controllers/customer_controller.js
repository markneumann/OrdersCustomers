console.log('loading customer_controller');
// Now let's create a controller with some hardcoded data!
OCModule.controller('CustomerController', function($scope, CustomerFactory) {
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    CustomerFactory.index(function(data) {
        console.log("CustomerFactory.index", data);
        $scope.customers = data;
        console.log("$scope.customers =", $scope.customers);
        // anything else that you want to happen after storing customers to $scope
    });

    $scope.addcustomer = function() {
        // note the use of callbacks here
        CustomerFactory.create($scope.new_customer, function(theOutput) {
            console.log("new customer =", $scope.new_customer);
            console.log('returned customer', theOutput);
            $scope.customers.push($scope.new_customer);
            $scope.new_customer = {};
            console.log('new $scope.customers ', $scope.customers);
        });
    };

    $scope.removecustomer = function(customer) {
        var removeThisCustomer =$scope.customers.indexOf(customer);
        console.log('removecustomer: ', removeThisCustomer);
        console.log('$scope.customers = ', $scope.customers);
        console.log('remove_id: ', $scope.customers[removeThisCustomer]._id);
        if(~removeThisCustomer){
            var remove_id = $scope.customers[removeThisCustomer]._id;
            // note the use of callbacks here
            CustomerFactory.remove(remove_id, function() {
                console.log("remove customer =", removeThisCustomer);
                $scope.customers.splice(removeThisCustomer,1);
            });
        }
    };

});
