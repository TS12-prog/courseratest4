(function (window) {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var speakWord="Good Bye";
	var byeSpeaker={};
	byeSpeaker.speak=function(names){
		console.log(speakWord+" "+names);
	}
	window.byeSpeaker=byeSpeaker;
})(window);