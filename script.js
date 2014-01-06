$(document).ready(function(){
	$("#basecamp").hover(function(){
		$(".original").toggleClass("hidden");
		$("#basecamphidden").toggleClass("hidden");
	});
	$("#highrise").hover(function(){
		$(".original").toggleClass("hidden");
		$("#highrisehidden").toggleClass("hidden");
	});
	$("#campfire").hover(function(){
		$(".original").toggleClass("hidden");
		$("#campfirehidden").toggleClass("hidden");
	});
});

