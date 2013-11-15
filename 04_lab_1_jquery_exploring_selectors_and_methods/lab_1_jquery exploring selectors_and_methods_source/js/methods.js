// initialize jQuery command after all page elements load
	    			
$(document).ready(function(){

//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

	//hide
	$("#b1").click(function(){
		$("#p1").hide(1000);
	});
		
	//show
	$("#b2").click(function(){
		$("#p1").show(1000);
	})
			
	//toggle
	$("#b3").click(function(){
		$("#p1").toggle(1000);
	})
		
	//css
	$("#b4").click(function(){
		$("#p2").css("color", "blue");
	})
	
		
	//css (multiple property changes)
	
	$("#b5").click(function(){
		$("#p2").css({"font-weight": "bolder", "color": "red"});
	})

		
	//html
	$("#b6").click(function(){
		$("#p3").html("<b>Bang!</b> from way downtown...");
	})

		
	//prepend
	$("#b7").click(function(){
		$("#p3").prepend("<b>Bang!</b>");
	})

	//append
	$("#b8").click(function(){
		$("#p3").append("<b>Brooklyn wins!</b>");
	})
		
	//before
	$("#b9").click(function(){
		$("#p4").before("<b>Furthermore,</b>");
	})
		 
	//after
	$("#b10").click(function(){
		$("#p4").after("<b>THE END</b>");
	})
		 
	//wrap
	$("#b11").click(function(){
		$("#p5").wrap("<div></div>");
	})

		 
	//addClass
	$("#b12").click(function(){
		$("#p5").addClass("awesome");
	})

		 
	//clone
	$("#b13").click(function(){
		$("ul li").clone().prependTo("ul");
	})
		 
	//fadeOut
	$("#b14").click(function(){
		$("#p6").fadeOut(1600, "linear");
	})
		 
	//fadeIn
	$("#b15").click(function(){
		$("#p6").fadeIn("slow");
	})
		  
	//fadeToggle
	$("#b16").click(function(){
		$("#p6").fadeToggle(1600, "linear");
	})
		  
	//slideUp
	$("#b17").click(function(){
		$(".box-content").slideUp("slow");
	})
		 
	//slideDown
	$("#b18").click(function(){
		$(".box-content").slideDown("slow");
	})

	//slideToggle
	$(".box-header").click(function(){
		$(".box-content").slideToggle("slow");
	})
		  
	//animate
	$("#b19").click(function(){
		$(".box-animate").animate({
			left:'250px',
    	opacity:'0.5',
    	height:'150px',
    	width:'150px'
		});
	})
		 
});