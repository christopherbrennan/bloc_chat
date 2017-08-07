(function() {
  function Room($firebaseArray) {
   
    var ref = firebase.database().ref().child("rooms");
    var newRoom = firebase.database().ref().child("messages").orderByChild('roomId');
    var rooms = $firebaseArray(ref);
    var messages = $firebaseArray(newRoom);
      
    var addChatRoom = function(newRoom) {
        console.log(newRoom);
      rooms.$add({name: newRoom});
    };
      
    var findMessages = function(roomId) {
        return $firebaseArray(newRoom.equalTo(roomId));
      };  

    return {
        all: rooms,
        createRoom: addChatRoom,
        messageFinder: findMessages
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();