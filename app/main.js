requirejs(['numbersArray','sortArray'],function (numbersArray,getSortedArray) {
	//console.log(numbersArray.setArray([12,-16,8,45,2,3,4]));
	console.log(getSortedArray.sorted(numbersArray.setArray([12,-16,8,45,2,3,4])));
	//console.log(getSortedArray.sorted());
});