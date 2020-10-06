function viewStudentStats(id, toggle){
//alert("Warning!!!");
	if(toggle){
		document.getElementById(id).style.visibility = "inherit";
		document.getElementById(id).style.height ="auto"
	}
	else{
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height ="0px";
	}

}