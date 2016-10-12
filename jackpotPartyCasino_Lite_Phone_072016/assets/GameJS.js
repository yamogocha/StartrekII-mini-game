var restartGame = function() {
	totalSpin = 0;
	spinClickable = true;
	mNectarGame.total = 1500000;
	mNectarGame.bet = 45500;
	mNectarGame.win = 0;
	mNectarGame.animationTime = 3000;
	mNectarGame.animationSteps = 50;
	updateNum();
	slightOfHand(spin1);
	clearEffect();
	clearTimeout(gotoend);
	document.getElementById("outro-container").style.display = 'none';
	document.getElementById("spin").style.display = "block";
	document.getElementById("bluebar").className = "bluebar";
}
// CALL THIS WHEN THE USER FINISHES PLAYING YOUR BUILD
// this sends the user to the end of the game if the retry is clicked and the dl is not clicked
var finishGameplay = function() {
	if (typeof gotoEndScreen != 'undefined') {
		//this is a function in the engineering templates and will only work once this project is uploaded to the UI
		gotoEndScreen();
		//report that the user has finished the game
		if (typeof mn != 'undefined'){mn("play","100%");}
	}
	else {
		displayInstallScreen();
	}
}

var spin1 = [
				[2,11,4,7,10,3,2,8,5,12,9,3,5,5,2,5,8,4], //reel1
				[6,8,6,10,12,7,2,8,5,3,5,3,5,9,4,6,10,2],  //reel2
				[8,11,6,10,8,5,2,8,12,6,9,3,5,5,2,7,9,5], //reel3
				[12,12,10,1,6,7,2,8,5,5,9,3,5,9,2,6,4,3], //reel4
				[10,4,6,11,2,7,2,5,5,10,9,3,5,5,6,8,9,10] //reel5
			];

var spin2 = [
				[5,9,6,2,6,7,2,7,7,5,9,3,5,2,11,4,7,10],
				[5,11,1,11,6,7,2,8,7,2,9,3,5,6,8,6,10,12],
				[7,11,7,7,2,7,2,8,5,8,9,3,5,8,11,6,10,8],
				[11,9,6,5,7,7,2,8,4,12,2,3,5,12,12,10,1,6],
				[6,3,11,5,6,7,7,8,7,4,9,3,5,10,4,6,11,2]
			];

var spin3 = [
				[6,7,9,5,12,7,2,8,2,5,5,3,5,5,9,6,2,6],
				[7,2,11,10,12,7,2,8,7,8,9,3,5,5,11,1,11,6],
				[1,6,8,9,12,6,2,8,3,8,9,3,5,7,11,7,7,2],
				[10,12,11,6,5,7,2,12,2,3,9,3,5,11,9,6,5,7],
				[9,3,11,5,6,2,2,8,2,6,9,3,5,6,3,11,5,6]
			];

var spin4 = [
				[1,2,3,10,3,7,2,8,6,6,9,3,5,6,7,9,5,12],
				[1,1,9,1,3,1,2,8,7,2,9,3,5,7,2,11,10,12],
				[3,5,9,4,3,7,2,8,8,4,9,8,5,1,6,8,9,12],
				[3,7,10,8,3,7,2,8,3,10,9,3,5,10,12,11,6,5],
				[4,2,3,1,6,7,2,8,3,6,9,3,6,9,3,11,5,6]
			];

var totalSpin = 0;
var gotoend;
var spinClickable = true;
var mNectarGame = {};
	mNectarGame.total = 1500000;
	mNectarGame.bet = 45500;
	mNectarGame.win = 0;
	mNectarGame.animationTime = 3000;
	mNectarGame.animationSteps = 50;

function delimitNumbers(str) {
return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
  return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
});
}

var updateNum = function(){
	var total = delimitNumbers(mNectarGame.total);
	document.getElementById("total").innerHTML = total;
	var win = delimitNumbers(mNectarGame.win);
	document.getElementById("win").innerHTML = win;
	var bet = delimitNumbers(mNectarGame.bet);
	document.getElementById("bet").innerHTML = bet;
}
updateNum();

var animateNum = function(winValues){
	//time per step
	var duration = mNectarGame.animationTime / mNectarGame.animationSteps;
	// value of each step
	var singleAmount = winValues / mNectarGame.animationSteps;

	incrementNum(duration, singleAmount, winValues);
}

var incrementNum = function(duration, singleAmount, winValues){
	mNectarGame.win += singleAmount;
	mNectarGame.total += singleAmount;
	updateNum();
	setTimeout(function(){
		if (mNectarGame.win != winValues){
			incrementNum(duration, singleAmount, winValues);
		}
	}, duration);
}

document.getElementById("betdown").style.display = "none";
var betup = function(){
	if(mNectarGame.bet == 45500){
		document.getElementById("betdown").style.display = "block";
	}
	
	if(mNectarGame.bet == 364000){
		document.getElementById("betup").style.display = "none";
	}
	mNectarGame.bet *= 2;
	updateNum();
	document.getElementById("betup").className += " click";
	setTimeout(function(){
		document.getElementById("betup").className = "betup";
	}, 50);
}

var betdown = function(){
	if(mNectarGame.bet == 91000){
		document.getElementById("betdown").style.display = "none";
	}
	if(mNectarGame.bet == 728000){
		document.getElementById("betup").style.display = "block";
	}
	mNectarGame.bet /= 2;
	updateNum();
	document.getElementById("betdown").className += " click";
	setTimeout(function(){
		document.getElementById("betdown").className = "betdown";
	}, 50);
}

var replaceImages = function (reelInfo){
	for (var r = 1; r <= 5; r++) {
		var currentReel = reelInfo[r-1];
		for (var e = 1 ; e <=18 ; e++) {
			var element = "reel" + r + "-" + e;  
			document.getElementById(element).className = "image" + currentReel[e-1];
		};
	};
}
replaceImages(spin1);

//set top px
for (var r = 1; r <= 5; r++) {
	for (var e = 1 ; e <=18 ; e++) {
		var element = "reel" + r + "-" + e;  
		var currentReel
		document.getElementById(element).style.top =(e-1)*53+ "px" ;
	};
};

var spin = function (){
	totalSpin++;
	document.getElementById("text").innerHTML = "Luck!";
	document.getElementById("spin").style.display = "none";
	mNectarGame.wonNum = 0;
	mNectarGame.total -= mNectarGame.bet;
	updateNum();

	document.getElementById("reel1").className = "reel-spin";
	setTimeout(function(){
		document.getElementById("reel2").className = "reel-spin";
	 }, 200);
	setTimeout(function(){
		document.getElementById("reel3").className = "reel-spin";
	 }, 400);
	setTimeout(function(){
		document.getElementById("reel4").className = "reel-spin";
	 }, 600);
	setTimeout(function(){
		document.getElementById("reel5").className = "reel-spin";
	 }, 800);

	setTimeout(function(){
		if(totalSpin===1){
		 	slightOfHand(spin2);
		 	document.getElementById("box1").className = "box rb1";
			document.getElementById("box2").className = "box rb2";
			document.getElementById("box3").className = "box rb3";
			document.getElementById("line1").className = "rline1";
			document.getElementById("line2").className = "rline2";
			document.getElementById("bluebar").className = "bluebar bar1";
		 	setTimeout(function(){
			 	var winAmount = mNectarGame.bet*1.5;
			 	mNectarGame.total +=winAmount;
			 	animateNum(winAmount);
		    }, 300);

		setTimeout(function(){
			document.getElementById("spin").style.display = "block";
			spinClickable=true;
			clearEffect();
	 	}, 4000);	

		 }
	 }, 1800);

	setTimeout(function(){
		if(totalSpin===2){
		 	slightOfHand(spin3);
		 	document.getElementById("bluebar").className = "bluebar bar2";
			setTimeout(function(){
				spinClickable=true;
		 		document.getElementById("spin").style.display = "block";
			}, 500);
		}
	}, 1800);

	setTimeout(function(){
		if (totalSpin===3){
		 	slightOfHand(spin4);
		 	document.getElementById("reel1-17").className = "image5 out";
		 	document.getElementById("reel4-18").className = "image5 out";
		 	document.getElementById("reel5-17").className = "image5 out";
		 	document.getElementById("explosionsprite").className = "sprite explosionsprite out";
			document.getElementById("explosionsprite2").className = "sprite explosionsprite2 out";
			document.getElementById("explosionsprite3").className = "sprite explosionsprite3 out";
			document.getElementById("wildstar").className = "wildstar star1 out";
			document.getElementById("wildstar2").className = "wildstar star2 out";
			document.getElementById("wildstar3").className = "wildstar star3 out";
		 	document.getElementById("box1").className = "box pb1";
			document.getElementById("box2").className = "box pb2";
			document.getElementById("box3").className = "box pb3";
			document.getElementById("box4").className = "box pb4";
			document.getElementById("box5").className = "box pb5";
			document.getElementById("bluebar").className = "bluebar bar3";
		 	setTimeout(function(){
			 	var winAmount = mNectarGame.bet*2.5;
			 	mNectarGame.total +=winAmount;
			 	animateNum(winAmount);
		    }, 800);
		 	
			gotoend = setTimeout(function(){
				if (typeof gotoEndScreen != 'undefined') {
					gotoEndScreen();
					if(typeof mn != 'undefined'){mn("play","100%");}
				}
				else {
					displayInstallScreen();
				}

			}, 6000);
		}
	}, 1800);

	if (totalSpin === 1){
		if (typeof mn != 'undefined'){mn("play","25%");}
	}

	if (totalSpin === 2){
		if (typeof mn != 'undefined'){mn("play","50%");}
	}
	
	if (totalSpin === 3){
		if (typeof mn != 'undefined'){mn("play","75%");}
	}
}

var slightOfHand = function(reelInfo){

	document.getElementById("reel1").className = "reel-top";
	document.getElementById("reel2").className = "reel-top";
	document.getElementById("reel3").className = "reel-top";
	document.getElementById("reel4").className = "reel-top";
	document.getElementById("reel5").className = "reel-top";
	replaceImages(reelInfo);
}

var clickSpin = function(){
	if(spinClickable===true){
		spin();
		spinClickable=false;
	}
}

var clearEffect = function(){
	document.getElementById("wildstar").className = "";
	document.getElementById("wildstar2").className = "";
	document.getElementById("wildstar3").className = "";
	document.getElementById("explosionsprite").className = "";
	document.getElementById("explosionsprite2").className = "";
	document.getElementById("explosionsprite3").className = "";
	document.getElementById("box1").className = ""
	document.getElementById("box2").className = ""
	document.getElementById("box3").className = ""
	document.getElementById("box4").className = ""
	document.getElementById("box5").className = ""
	document.getElementById("line1").className = ""
	document.getElementById("line2").className = ""
}