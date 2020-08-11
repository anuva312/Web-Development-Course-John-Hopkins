(function (global){
	var speakWord = "Good Bye";
	var byeSpeaker = {};
	byeSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}
	global.byeSpeaker = byeSpeaker;
})(window)


