function getShortMessages(inputArray){
	var arrayzz = inputArray.map(function(currentvalue){
		return currentvalue.message;
	}).filter(isSmallEnough)
	return arrayzz;
}
function isSmallEnough(elem){
	if(elem.length<50){
		return elem;
	}
	else{
		return;
	}
}

module.exports=getShortMessages;