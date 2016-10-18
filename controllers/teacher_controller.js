app.controller('TeacherController', function ($scope) {
  var myPlayer = videojs('vid1');

  $scope.togglePause = function(){
    if (myPlayer.paused()) {
      myPlayer.play();
    }
    else {
      myPlayer.pause();
    }
  }


  videojs('vid1').ready(function () {
      this.on('timeupdate', function () {
        // var currentTime = Math.floor(this.currentTime());
        // console.log(Math.floor(currentTime));
        console.log(currentTime("seconds"))
        if(currentTime === 3) {
          // playback = false;
          myPlayer.pause();
          // console.log(playback)
        }
        if(currentTime === 7) {
          myPlayer.pause();
        }
        videojs("vid1").on("click", function() {
          currentTime = 4
          myPlayer.play();
        })
        // if(playback){
        //   myPlayer.play()
        // }
      })
    });

  // $(document).ready(function() {
  //   var myPlayer = videojs('vid1');
  //
  //   $('#vid1').bind('timeudpate', function() {
  //     var playTime = Math.round( $(this).get(0).currentTime );
  //     if(playTime == 3) {
  //       console.log("Question box")
  //         // $('#banner').fadeIn(200);
  //     }
  //     // if(playTime == 6) {
  //     //     $('#banner').fadeOut(200);
  //     // }
  //   })
  // });
})

  // $("#modal-close").click(function() {
  //   if(!myPlayer.paused()) {
  //     myPlayer.pause();
  //   }
  // });
  //
  // $('#playPause').click(function(){
  //   return myPlayer.paused() ? myPlayer.play() : myPlayer.pause();
  // });
