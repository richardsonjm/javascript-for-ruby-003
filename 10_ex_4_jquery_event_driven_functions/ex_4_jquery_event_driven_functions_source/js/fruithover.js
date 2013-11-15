$(document).ready(function(){
	
  //first, let's dim the thumbnails
  $('#gallery img').fadeTo(1000,0.2);

  //create function for mouse over

  function mouseOn() {
    $(this).fadeTo(20,1);
  }

  //create function for mouse off

  function mouseOff() {
    $(this).fadeTo(500,0.2);
  }

  //event triggers on hover runs function

  $('#gallery img').hover(mouseOn,mouseOff);

  //fancybox plugin 

  $('#gallery a').attr('rel', 'gallery1');


  $('#gallery a').fancybox();
	

});