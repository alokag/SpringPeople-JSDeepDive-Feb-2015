
function getSpinner(){
	var count = 0;
	function inc(){
		return ++count;
	}
	function dec(){
		return --count;
	}
	return {
		up : inc,
		down : dec
	}
}



var spinner = getSpinner()//;
spinner.up(); // => 1
spinner.up(); // => 2
spinner.up(); // => 3
spinner.up(); // => 4

spinner.down(); // => 3
spinner.down(); // => 2
spinner.down(); // => 2
spinner.down(); // => 1
spinner.down(); // => 0


function memoize(fn){
	var cache = {};
	return function(){
		var key = window.JSON.stringify(arguments);
		if (typeof cache[key] === "undefined")
			cache[key] = fn.apply(this,arguments);
		return cache[key];
	}
}

function add(x,y){
	console.log("processing");
	return x + y;
}

var cachedAdd = memoize(add);
