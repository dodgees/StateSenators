angular.module("stateSenatorsApp", [])
    .controller('mainCtrl', ['$scope', '$http', function($scope, $http){
        console.log("Response data")

    $scope.state = "";
    $scope.states = [{"name": "Nebraska",
                       "code": "Ne"},
                    {"name": "Texas",
                      "code": "Tx"},
                    {"name": "North Dakota",
                    "code": "Nd"},
                    {"name": "South Dakota",
                    "code": "Sd"},
                    {"name": "New York",
                    "code": "Ny"}];


    $scope.getStateBillData = function(){
        var base_url = "http://openstates.org/api/v1/bills/?state=";
        var billUrl = base_url + $scope.state["code"] + "&sort=updated_at&page=1&per_page=5";
        console.log(billUrl);
        $http.get(billUrl).then(function(response){
            $scope.bills = response.data;
        });
    };


    }]);


// Set background image to flag
