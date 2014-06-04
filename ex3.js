function doubleAll(numbers){
	var arrayzz= [];
	numbers.map(function(currentValue, index, arr){
		arrayzz.push(currentValue*2);
	});
	return arrayzz;
}
module.exports = doubleAll;