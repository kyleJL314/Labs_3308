function loadStatsPage(){

	var table = document.getElementById("stats_table");
	var wins =0;
	var losses =0;
	var row_counter;
	for(row_counter = 2; row_counter < table.rows.length; row_counter++)
	{
		if(table.rows[row_counter].cells[2].innerHTML> table.rows[row_counter].cells[3].innerHTML){

			table.rows[row_counter].cells[4].innerHTML = "CU Boulder";
			wins++;
		}
		else{
			table.rows[row_counter].cells[4].innerHTML = table.rows[row_counter].cells[1].innerHTML;
			losses++;
		}
	}
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	alert("Warning!!!");
}