var app = angular.module("campus360", []);

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

    // Variables for Filter Demo
    $scope.fee = 25000;
    $scope.date = new Date();
    $scope.number = 12345.6789;

    $scope.addstudent = function () {
        $scope.totalstudents++;
    };

    $scope.addfaculty = function () {
        $scope.totalfaculty++;
    };

    console.log("Dashboard controller is loaded");

});