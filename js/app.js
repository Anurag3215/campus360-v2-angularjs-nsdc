var app = angular.module('campus360', []);

app.controller("dashboardcontroller", function ($scope) {

    $scope.collegename = "FISAT";
    $scope.totalstudents = 1200;
    $scope.totalfaculty = 85;

    $scope.students = [
        "Sumedha",
        "Smruthi",
        "Hiba",
        "Nazeeya"
    ];

    $scope.showstudents = false;
    $scope.showDashboard = true;

    // Function to add a student
    $scope.addstudent = function () {
        $scope.totalstudents++;
    };

    $scope.addfaculty = function () {
        $scope.totalfaculty++;
    };

    console.log("Dashboard controller is loaded");
});