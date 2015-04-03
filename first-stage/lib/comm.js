function getNode(){
	var len = arguments.length;
		one = arguments[0],
		obj = document.getElementById(one);
	return len == 1 ? obj : obj.getElementsByTagName(arguments[1]);
}