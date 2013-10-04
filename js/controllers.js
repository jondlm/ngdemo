/*globals angular*/

'use strict';

/* Controllers */
var data = [
  {"id": 0,"netWorth": 123, "guid": "ce0978d8-896c-4b93-b829-8d658b17a1da", "isActive": true, "age": 25, "name": "Donovan Jimenez", "gender": "male", "company": "Cosmosis", "email": "donovanjimenez@cosmosis.com", "phone": "+1 (860) 478-2050", "address": "714 Florence Avenue, Roland, Nevada, 1590"},
  {"id": 1,"netWorth": 102398, "guid": "fef1cdfa-b6cc-4544-8187-fcbc7b01be38", "isActive": true, "age": 20, "name": "Melendez Collier", "gender": "male", "company": "Cablam", "email": "melendezcollier@cablam.com", "phone": "+1 (808) 466-3306", "address": "434 Division Avenue, Lafferty, Kentucky, 8282"},
  {"id": 2,"netWorth": 012938, "guid": "27ccc0cf-4d8c-4c4b-8bc5-e2df080f8944", "isActive": false, "age": 37, "name": "Keisha Weeks", "gender": "female", "company": "Paprikut", "email": "keishaweeks@paprikut.com", "phone": "+1 (803) 566-3096", "address": "676 Hanson Place, Colton, Illinois, 6788"},
  {"id": 3,"netWorth": 9823, "guid": "4d71e722-2a80-410f-8f9d-1db0b613c0d8", "isActive": true, "age": 26, "name": "Freda Vincent", "gender": "female", "company": "Conferia", "email": "fredavincent@conferia.com", "phone": "+1 (912) 545-3757", "address": "763 Garden Place, Roderfield, Minnesota, 7254"},
  {"id": 4,"netWorth": 2972, "guid": "42b3b421-e6d7-4630-9e43-a6740bbe77cb", "isActive": true, "age": 36, "name": "Kerri Gregory", "gender": "female", "company": "Pulze", "email": "kerrigregory@pulze.com", "phone": "+1 (834) 539-2652", "address": "888 Wyckoff Avenue, Brazos, South Carolina, 5079"},
  {"id": 5,"netWorth": 9823, "guid": "653fe24e-976a-4010-bfbd-cd30bee7d0ad", "isActive": false, "age": 24, "name": "Drake Trujillo", "gender": "male", "company": "Thredz", "email": "draketrujillo@thredz.com", "phone": "+1 (968) 497-4000", "address": "830 Dodworth Street, Nelson, Ohio, 3344"},
  {"id": 6,"netWorth": 102398, "guid": "f5ae73dc-6e48-45ec-9881-de46d4f96a26", "isActive": true, "age": 27, "name": "Hogan Weiss", "gender": "male", "company": "Avenetro", "email": "hoganweiss@avenetro.com", "phone": "+1 (830) 448-3438", "address": "417 Balfour Place, Navarre, Michigan, 4308"},
  {"id": 7,"netWorth": 19874, "guid": "8fb08a49-b4d8-4606-8aa3-55b776e69e7a", "isActive": false, "age": 34, "name": "Nolan Witt", "gender": "male", "company": "Sportan", "email": "nolanwitt@sportan.com", "phone": "+1 (965) 465-2732", "address": "529 Meeker Avenue, Salunga, Oregon, 5154"},
  {"id": 8,"netWorth": 102417, "guid": "1cd8a292-edb4-46cb-8dfd-7a0f2528952f", "isActive": true, "age": 35, "name": "Alvarado Curtis", "gender": "male", "company": "Geekus", "email": "alvaradocurtis@geekus.com", "phone": "+1 (831) 564-2871", "address": "626 Dwight Street, Davenport, Tennessee, 9695"},
  {"id": 9,"netWorth": 109231, "guid": "b10d633c-94fb-4d4f-a839-31ab43c46e95", "isActive": true, "age": 37, "name": "Carpenter Bryant", "gender": "male", "company": "Metroz", "email": "carpenterbryant@metroz.com", "phone": "+1 (894) 552-2635", "address": "709 Visitation Place, Gerber, Montana, 7508"},
  {"id": 10,"netWorth": 8472, "guid": "0a125b76-df9c-4795-a509-5b0eb1d5e1c0", "isActive": false, "age": 25, "name": "Goldie Fernandez", "gender": "female", "company": "Zoxy", "email": "goldiefernandez@zoxy.com", "phone": "+1 (843) 469-2630", "address": "185 Conover Street, Edgewater, New York, 7978"}
];

angular.module('myApp.controllers', []).
  controller('main', function($scope) {
    $scope.data = data;
    $scope.test = 'Hello';


    $scope.addContact = function() {
      $scope.data.push({
        name: $scope.contactName,
        company: $scope.contactCompany,
        email: $scope.contactEmail,
        phone: $scope.contactPhone,
        netWorth: $scope.contactNetWorth
      });
      
      $scope.contactName = '';
      $scope.contactCompany = '';
      $scope.contactEmail = '';
      $scope.contactPhone = '';
      $scope.contactNetWorth = '';
    };

  });
