$(document).ready(function(){
	
	$("#hover1").hover(function(){
    $(this).find('.front').slideUp("slow");
  },function(){
    $(this).find('.front').slideDown("slow");
  });

  $("#hover2").hover(function(){
    $(this).find('.front').fadeTo("slow",0.2);
  },function(){
    $(this).find('.front').fadeTo("slow", 1);
  });

	
});