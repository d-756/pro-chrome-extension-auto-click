$(document).ready(function() {
  var timer = setInterval(function(){
    var str_confirm_array = $('button span:contains("Confirm")');
    if(str_confirm_array[0]) {
      str_confirm_array[0].click(); 
      // clearInterval(timer);
    }
  }, 500);
});
