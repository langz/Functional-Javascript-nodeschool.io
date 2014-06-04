function repeat(operation, num){
	if(num===0){
	}
	else{
		operation();
		repeat(operation, num-1);
	}
}
function repeat2(operation, num){
	if(num<=0) return;
	operation();
	return repeat2(operation, --num)
}

module.exports=repeat;