$(function(){

  $('#timeForm').submit(function(event) {
      event.preventDefault();
      var inputTime = $('#inputTime').val();
      var inputH = parseInt(inputTime.slice(0,2))
      var inputM = parseInt(inputTime.slice(3,5))

      console.log(inputTime);
      console.log(inputH);
      console.log(inputM);


      // output.forEach(function(element) {
      //   $('#solution').append("<li>" + element + "</li>");
      // });
    });



});
