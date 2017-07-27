function check2(){

	let question2_1 = document.quiz2.question2_1.value;
	let question2_2 = document.quiz2.question2_2.value;
	let question2_3 = document.quiz2.question2_3.value;
	let correct = 0;
	
	if(question2_1 == "Nigeria"){
		correct++;
	}
	if(question2_2 == "7"){
		correct++;
	}
	if(question2_3 == "asia"){
		correct++;
	}

	
	
	let messages = ["Congratulations. You are our champion!!", "Not good enought. You need 3 points to go", "Just awful! You need 3 points to go"];
	let picture = "imgs/win.jpg";

	let range = 0;
	
	if(correct < 1){
		range = 2;
	}
	if(correct > 0 && correct < 3){
		range = 1;
	}
	if (correct > 2){
		range = 0;
	}

	document.getElementById("after_submit_2").style.visibility="visible";
	
	document.getElementById("message_2").innerHTML = messages[range];
	document.getElementById("message_2").style.fontSize="20px";
	document.getElementById("number_correct_2").innerHTML = "You got " + correct + " correct!";
	if(question2_1 == "Nigeria" && question2_2 == "7" && question2_3 == "asia"){
		document.getElementById("picture").src = picture;
	}
}