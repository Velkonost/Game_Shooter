var check = true;
var num = 0;
var puck = true;
var play = true;
var score = 0;
var music_checker = true;
var enemies = {};
var difficulty = 10;
var change_color = true;

$(document).ready(function(){ 
	var info = document.getElementById('info');
	var win = document.getElementById('win_logo');
	var all = document.getElementById('wrapper');
	var choose_lvl = document.getElementById('chooser');
	var st = document.createElement("link");
		st.setAttribute("rel","stylesheet");
	var rand = randomInteger(1, 5);
	switch(rand){
		case 1:{
			enemies = set_1;
			st.setAttribute("href","Sets_of_styles/style_1.css");
			break;
		}
		case 2:{
			enemies = set_2;
			st.setAttribute("href","Sets_of_styles/style_2.css");
			break;
		}
		case 3:{
			enemies = set_3;
			st.setAttribute("href","Sets_of_styles/style_3.css");
			break;
		}
		case 4:{
			enemies = set_4;
			st.setAttribute("href","Sets_of_styles/style_4.css");
			break;
		}
		default:{
			enemies = set_5;
			st.setAttribute("href","Sets_of_styles/style_5.css");
			break;
		}
	}
	document.body.appendChild(st);
	choose_lvl.setAttribute('class', 'hidden');
	all.setAttribute('class', 'hidden');
	win.setAttribute('class', 'hidden');
	info.setAttribute('class', 'hidden');
	for(var i = 1; i <= 10; i++){
		var id = "enemy_"+i;
		var enemy = document.getElementById(id);
		enemy.setAttribute('class', 'hidden');
	}
});
function key(value){
	if((value == 32 || value == 13)&& !play){
		change_way(); play_music();
	}
}
function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}
function choose_lvl(value){
	difficulty = value;
}
function go(){
	var all = document.getElementById('wrapper');
	var button = document.getElementById('start');
	var history = document.getElementById('rule');
	var choose_lvl = document.getElementById('chooser');
	$('link[title=fu]')[0].disabled=true;

	history.setAttribute('class', 'hidden');
	choose_lvl.setAttribute('class','');
	button.setAttribute('class', 'hidden');
	all.setAttribute('class', '');
}
function fon_rand(){
	var color = randomInteger(1, 3);
	var html = document.getElementById('html');
	if(change_color){
		if(color == 2){
			html.setAttribute('class', 'fon2');
		}
		else if(color == 3){
			html.setAttribute('class', 'fon3');	
		}
		else{
			html.setAttribute('class', 'fon1');		
		}
		change_color = !change_color;
	}
}
function play_music(){
	if(!music_checker){
		$('#music').html('<embed src="Music/eat.mp3" type="audio/mp3"><noembed><bgsound="music.mp3"></noembed>');
	}
	else{
		$('#music').html('<embed src="Music/pig.mp3" type="audio/mp3"><noembed><bgsound="music.mp3"></noembed>');	
	}
	music_checker = false;
}
function music_win(){
	$('#music').html('<embed src="Music/minions-banana.mp3" type="audio/mp3"><noembed><bgsound="music.mp3"></noembed>');
}
function clock(){
	var idt = document.getElementById('timer'); 
	idt.innerHTML = parseInt(idt.innerHTML) + 0.02; 
	var txt = document.getElementById('txt'); 
	var ids = document.getElementById('id_size'); 
	var size = parseInt(ids.innerHTML); 
	var idx = document.getElementById('id_x'); 
	var x = parseInt(idx.innerHTML); 
	var idy = document.getElementById('id_y'); 
	var y = parseInt(idy.innerHTML); 
		if(y <= 0 && x < size){
			idx.innerHTML = x + 1; 
			txt.style.paddingLeft = x; 
			x += 1;
		}
		else if(x >= 400 && y < size){
			idy.innerHTML = y + 1; 
			txt.style.paddingTop = y; 
			y += 1;
		}
		else if(y >= 400 && x > 0){
			idx.innerHTML = x - 1; 
			txt.style.paddingLeft = x; 
			x -= 1;	
		}
		else if(x <= 0 && y > 0){
			idy.innerHTML = y - 1; 
			txt.style.paddingTop = y; 
			y -= 1;
		}
}
function unclock(){
	var idt = document.getElementById('timer');
	idt.innerHTML = parseInt(idt.innerHTML) + 0.02; 
	var txt = document.getElementById('txt'); 
	var ids = document.getElementById('id_size'); 
	var size = parseInt(ids.innerHTML); 
	var idx = document.getElementById('id_x'); 
	var x = parseInt(idx.innerHTML); 
	var idy = document.getElementById('id_y'); 
	var y = parseInt(idy.innerHTML);  
	if(y <= 0 && x > 0){
		idx.innerHTML = x - 1; 
		txt.style.paddingLeft = x; 
		x -= 1;
	}
	else if(x >= 400 && y > 0){
		idy.innerHTML = y - 1; 
		txt.style.paddingTop = y; 
		y -= 1;
	}
	else if(y >= 400 && x < size){
		idx.innerHTML = x + 1; 
		txt.style.paddingLeft = x; 
		x += 1;	
	}
	else if(x <= 0 && y < size){
		idy.innerHTML = y + 1; 
		txt.style.paddingTop = y; 
		y += 1;
	}	
}
function amazing(){
	var idt = document.getElementById('timer');
	idt.innerHTML = parseInt(idt.innerHTML) + 0.02;  
	var txt = document.getElementById('txt'); 
	var ids = document.getElementById('id_size'); 
	var size = parseInt(ids.innerHTML); 
	var idx = document.getElementById('id_x'); 
	var x = parseInt(idx.innerHTML); 
	var idy = document.getElementById('id_y'); 
	var y = parseInt(idy.innerHTML); 
	if(y < size && x < size){
		idx.innerHTML = x + 1; 
		idy.innerHTML = y + 1; 

		txt.style.paddingTop = y; 
		txt.style.paddingLeft = x;

		x += 1;
		y += 1;
	}
}
function change_way(checker){
	var idx = document.getElementById('id_x'); 
	var idy = document.getElementById('id_y'); 
	var x = parseInt(idx.innerHTML); 
	var y = parseInt(idy.innerHTML); 
	if((x >= enemies[num][0] && x <= enemies[num][1] && y >= enemies[num][2] && y <= enemies[num][3]) || play){
			play = false;
			var result = document.getElementById('score');
			result.innerHTML = score+"/10";
			score ++;
			var id = setInterval(function(){ 
				if(num > 10){
					var game = document.getElementById('page');
					var player = document.getElementById('player');
					var win = document.getElementById('win_logo');
					var intro = document.getElementById('intro');
					var chooser = document.getElementById('chooser');
					var html = document.getElementById('html');

					html.setAttribute('class', '');
					chooser.setAttribute('class', 'hidden');
					intro.setAttribute('class', 'hidden');
					game.setAttribute('class', 'win');
					player.setAttribute('class', 'hidden');
					win.setAttribute('class', '');
					for(var i = 1; i <= 10; i++){
						var id = "enemy_"+i;
						var enemy = document.getElementById(id);
						enemy.setAttribute('class', 'hidden');
					}
				}
				// if(num == 11){
				// 	amazing();
				// }
				// else{
					if(puck){
						unclock();
					}else{
						clock();
					}
				// }
			}, difficulty);
			puck = !puck;
			num ++;
			var id = "enemy_"+num;
			var enemy = document.getElementById(id);
			enemy.setAttribute('class', '');
			if(num > 1){
				var id_prev = "enemy_"+(num-1);
				var enemy_prev = document.getElementById(id_prev);
				enemy_prev.setAttribute('class', 'hidden');
			}
		}
	else{
		var game = document.getElementById('page');
		var player = document.getElementById('player');
		var html = document.getElementById('html');

		html.setAttribute('class', '');
		game.setAttribute('class', 'over');
		player.setAttribute('class', 'hidden');
		for(var i = 1; i <= 11; i++){
			var id = "enemy_"+i;
			var enemy = document.getElementById(id);
			enemy.setAttribute('class', 'hidden');
		}
	}
}
// var enemies = { 
// 	// min_x, max_x, min_y, max_y
	
// }