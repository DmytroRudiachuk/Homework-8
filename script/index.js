function setText(selector, text){

	var el = document.querySelector(selector);	
	el.innerText = text;
};


function setTextAll(selector, text) {
	var elements = document.querySelectorAll(selector);
	elements.forEach(function(s){
		s.innerText = text;
	});
};



setText("p", "Some is different");
setTextAll("div .block a", "or was it ?");

