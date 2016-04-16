var check = true;
var num = 0;
var puck = true;
var play = true;
var score = 0;
var music_checker = true;

$(document).ready(function(){ 
	var info = document.getElementById('info');
	var win = document.getElementById('win_logo');
	var all = document.getElementById('wrapper');

	all.setAttribute('class', 'hidden');
	win.setAttribute('class', 'hidden');
	info.setAttribute('class', 'hidden');
	for(var i = 1; i <= 10; i++){
		var id = "enemy_"+i;
		var enemy = document.getElementById(id);
		enemy.setAttribute('class', 'hidden');
	}
});
function go(){
	var all = document.getElementById('wrapper');
	var button = document.getElementById('start');
	var history = document.getElementById('rule');

	history.setAttribute('class', 'hidden');
	button.setAttribute('class', 'hidden');
	all.setAttribute('class', '');
}
function play_music(){
	if(!music_checker){
		$('#music').html('<embed src="eat.mp3" type="audio/mp3"><noembed><bgsound="music.mp3"></noembed>')
	}
	else{
		$('#music').html('<embed src="pig.mp3" type="audio/mp3"><noembed><bgsound="music.mp3"></noembed>')	
	}
	music_checker = false;
}
function music_win(){
	$('#music').html('<embed src="minions-banana.mp3" type="audio/mp3"><noembed><bgsound="music.mp3"></noembed>')
}
function clock(){
	var idt = document.getElementById('timer'); 
	idt.innerHTML = parseInt(idt.innerHTML) + 0.02; 
	// Текст который движется 
	var txt = document.getElementById('txt'); 
	// Размер квадрата 
	var ids = document.getElementById('id_size'); 
	var size = parseInt(ids.innerHTML); 
	// Координаты 
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
			result.innerHTML = score;
			score ++;
			var id = setInterval(function(){ 
				if(num > 10){
					var game = document.getElementById('page');
					var player = document.getElementById('player');
					var win = document.getElementById('win_logo');

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
			}, 10);
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
		game.setAttribute('class', 'over');
		player.setAttribute('class', 'hidden');
		for(var i = 1; i <= 11; i++){
			var id = "enemy_"+i;
			var enemy = document.getElementById(id);
			enemy.setAttribute('class', 'hidden');
		}
	}
}
var enemies = { 
	// min_x, max_x, min_y, max_y
	0: [0,0,0,0],
	1: [310, 400, 0, 70],
	2: [0, 90, 0, 70],
	3: [310, 400, 90, 180],
	4: [0, 100, 0, 80],
	5: [0, 100, 0, 80],
	6: [0, 100, 320, 400],
	7: [310, 400, 320, 400],
	8: [230, 350, 0, 80],
	9: [90, 200, 300, 400],
	10:[0, 90, 0, 70]
}