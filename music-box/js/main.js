$(document).ready(function() {
    // console.log( "ready!" );
    var cNote = document.getElementById('cAudio');
    $('#c').mousedown(function(){
		cNote.currentTime = 0;
		cNote.play();
		cNote.animateCss('bounce');
	});
	
	/*$('#c').mouseover(function(){
		cNote.currentTime = 0;
		cNote.play();
	});*/



	var aNote = document.getElementById('aAudio');
	$('#a').mousedown(function(){
		aNote.currentTime = 0;
		aNote.play();
	});
	/*$('#a').mouseover(function(){
		aNote.currentTime = 0;
		aNote.play();
	});*/



	var bNote = document.getElementById('bAudio');
	$('#b').mousedown(function(){
		bNote.currentTime = 0;
		bNote.play();
	});
	/*$('#b').mouseover(function(){
		bNote.currentTime = 0;
		bNote.play();
	});*/



	var dNote = document.getElementById('dAudio');
	$('#d').mousedown(function(){
		dNote.currentTime = 0;
		dNote.play();
	});
	/*$('#d').mouseover(function(){
		dNote.currentTime = 0;
		dNote.play();
	});*/



	var eNote = document.getElementById('eAudio');
	$('#e').mousedown(function(){
		eNote.currentTime = 0;
		eNote.play();
	});
	/*$('#e').mouseover(function(){
		eNote.currentTime = 0;
		eNote.play();
	});*/



	var fNote = document.getElementById('fAudio');
	$('#f').mousedown(function(){
		fNote.currentTime = 0;
		fNote.play();
	});
	/*$('#f').mouseover(function(){
		fNote.currentTime = 0;
		fNote.play();
	});*/

	
	var gNote = document.getElementById('gAudio');
	$('#g').mousedown(function(){
		gNote.currentTime = 0;
		gNote.play();
	});
	/*$('#g').mouseover(function(){
		gNote.currentTime = 0;
		gNote.play();
	});*/

	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

});






