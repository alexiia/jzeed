// JavaScript Document
$(document).on("pagecreate","#Historia", function(){
	$("p").on("swipe",function(){
		$("span").text("swipe activado!");
	});
});


$(document).on("pagecreate","#Fotos", function(){
	$("Usa").on("swipe",function(){
		$("span").text("swipe activado!");
	});
});


$(document).on("pagecreate","#Equipo", function(){
	$("Usa1").on("swipe",function(){
		$("span").text("swipe activado!");
	});
});