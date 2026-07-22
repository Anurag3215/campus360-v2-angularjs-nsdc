var app = angular.module('campus360', []);

app.controller("dashboardcontroller", function ($scope) {


    $scope.collegename = "FISAT";
    $scope.totalstudent = 1500;
    $scope.totalfaculty = 80;

    $scope.students = [
        "Thomas", "Anurag", "Sumedha", "Annet", "Taniya", "Agnet"
    ];

    $scope.addstudent = function (){
        $scope.totalstudent++

        $scope.showstudent=true;

        $scope.show
    };

    console.log("dashboard controller is loaded");
});

