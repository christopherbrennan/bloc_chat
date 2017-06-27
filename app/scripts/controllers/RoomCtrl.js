(function() {
    function RoomCtrl($scope, Room) {
        $scope.allRooms = Room.all;
        $scope.sayHello = function() {
            alert("hello");
        }
//        $scope.open = function() {
//    
//            var modalInstance = $uibModal.open({
//                animation: true,
//                templateUrl: '/templates/newRoom.html',
//                controller: 'ModalCtrl'
//            });
//    
//            modalInstance.result.then(function (newName) {
//                Room.createRoom(newName);
//            })
//        }
    }
    

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();