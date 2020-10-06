var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

function loadPlayersPage(){

	for(let i =0;i<players.length;i++){
		var x =document.createElement("a");
		x.className = "dropdown-item";
		x.text = players[i].name;
		x.id = i;
		x.href="#";

		x.onclick = function() {switchPlayers(i);} 
		document.getElementById("player_selector").appendChild(x);
	}

}
function switchPlayers(player){
	document.getElementById("p_year").innerHTML = players[player].year;
	document.getElementById("p_major").innerHTML = players[player].major;
	document.getElementById("g_played").innerHTML = players[player].games_played;
	document.getElementById("player_img").src = players[player].img;
	document.getElementById("p_yards").innerHTML = players[player].pass_yards;
	document.getElementById("r_yards").innerHTML = players[player].rushing_yards;
	document.getElementById("rec_yards").innerHTML = players[player].receiving_yards;
	document.getElementById("avg_p_yards").innerHTML = (players[player].pass_yards/players[player].games_played).toFixed(2);
	document.getElementById("avg_r_yards").innerHTML = (players[player].rushing_yards/players[player].games_played).toFixed(2);
	document.getElementById("avg_rec_yards").innerHTML = (players[player].receiving_yards/players[player].games_played).toFixed(2);
}