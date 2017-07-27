$(document).ready(function(){
	$("img").css({'max-width': '100%'});
});
$(document).ready(function(){
	$("header").find("span").css({'color': 'white', 'background-color': 'grey', 'font-size': '3em', 'cursor': 'pointer', 'padding': '0 0.2em', 'opacity': '0.7'});
	$("header").find("span").hover(function(){
		$(this).css('opacity', '0.6');
	});
});
$(document).ready(function(){
	$("nav").css({'padding':'1em', 'padding':'1em', 'background-color':'#1E90FF', 'color':'white', 'height': 'auto', 'font-family': 'Risque'});
});
$(document).ready(function(){
	$("div:eq(1)").css({"background-color": "#1E90FF", "color": "white" });
	$("a").css({"color": "white" });
	$(".click-here").css({'color': 'black', 'cursor': 'pointer'});
	$(".click-here").click(function(){
		$("div:eq(2)").toggle(1000);
	});
	$("div:eq(2)").css({'display': 'none'})
	$("aside:eq(0)").css({'padding-top': '5em', });
	$("aside:eq(1)").css({'padding-top': '5em', 'lineHeight': '2em' });
	$("aside:eq(2)").css({'padding-top': '5em'});
});
$(document).ready(function(){
	$("h4").css({'font-size': '2em','font-family': 'Lobster', 'letter-spacing': '0.3em', 'cursor': 'pointer'});
	$("h3").css({'font-size': '2em','font-family': 'Audiowide', 'letter-spacing': '0.3em'});
	$("aside").find("p").css({'font-family': 'Audiowide', 'letter-spacing': '0.1em'});
});
$(document).ready(function(){
	$("h4").click(function(){	
		$("#quiz").show(1000);
		$("#game").css({'display': 'block', 'background-color': 'lightgreen'});
	});
});
$(document).ready(function(){
	$("footer").css({'background-color':'black', 'color':'white', 'padding': '2em', 'margin-top': '0.2em', 'letter-spacing': '0.5emem', 'font-family': 'Lobster'});
});

$(document).ready(function(){
	$("#moveOn1").click(function(){
		$("#game2").show(1000).css({'display': 'block', 'background-color': 'lightblue'});	
	});
});
$(document).ready(function(){
	$("#moveOn2").click(function(){
		$("#game2").css({'display': 'block'});	
	});
});



