/********** OUTRO SPECIFIC JAVASCRIPT **********/
displayIdleScreen = function() {
	document.getElementById("outro-container").style.display = 'block';
	document.getElementById("top-button").className = 'mng-install-idle';
	document.getElementById("top-button").onclick = clickDownload;
	document.getElementById("bottom-button").className = 'mng-idle-retry';
	document.getElementById("bottom-button").onclick = clickRetry;
	document.getElementById("dl-div").className = 'mng-idle-click-url';
}

displayInstallScreen = function() {
	document.getElementById("outro-container").style.display = 'block';
	
	document.getElementById("top-button").className = 'mng-install-dl';
	document.getElementById("top-button").onclick = clickDownload;
	document.getElementById("bottom-button").className = 'mng-install-thanks';
	document.getElementById("bottom-button").onclick = clickDownload;
	document.getElementById("dl-div").className = 'mng-install-click-url';
}

displayErrorScreen = function() {
	document.getElementById("outro-container").style.display = 'block';
	document.getElementById("top-button").className = 'mng-error-retry';
	document.getElementById("top-button").onclick = clickRetry;
	document.getElementById("bottom-button").className = 'mng-error-dl';
	document.getElementById("bottom-button").onclick = clickDownload;
	document.getElementById("dl-div").className = 'mng-error-click-url';
}

var clickRetry = function() {
	if (typeof startTestDrive != 'undefined') {
		startTestDrive();
	}
	else {
		restartGame();
	}
}

var clickDownload = function() {
	if (typeof mnUserClickDownload != 'undefined') {

		mnUserClickDownload();
	}
	else {
		window.location.href = 'https://itunes.apple.com/us/app/jackpot-party-casino-slots/id575980917?mt=8';
	}
}
/********** OUTRO SPECIFIC JAVASCRIPT **********/