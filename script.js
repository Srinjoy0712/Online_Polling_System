angular.module('pollApp', [])
    .controller('PollController', function($scope) {
        $scope.options = [
            {id:"option1", text:"Java", votes:0},
            {id:"option2", text:"C++", votes:0},
            {id:"option3", text:"Python", votes:0},
            {id:"option4", text:"HTML", votes:0}
        ];

        $scope.submitVote = function() {
            if (!$scope.selectedOption) {
                alert("Please select an option.");
                return;
            }

            var selectedOptionObj = $scope.options.find(function(option) {
                return option.id === $scope.selectedOption;
            });

            if (selectedOptionObj) {
                selectedOptionObj.votes++;
                $scope.selectedOption = '';
                $scope.displayResult();
            }
        };

        $scope.displayResult = function() {
            $scope.options.forEach(function(option) {
                option.percentage = ((option.votes / $scope.getTotalVotes()) * 100).toFixed(3) || 0;
            });
        };

        $scope.getTotalVotes = function() {
            return $scope.options.reduce(function(total, option) {
                return total + option.votes;
            }, 0);
        };

        $scope.calculatePercentage = function(votes) {
            return ((votes / $scope.getTotalVotes()) * 100).toFixed(3) || 0;
        };

        $scope.displayResult();
    });
