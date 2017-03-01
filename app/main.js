requirejs(['numbersArray','sortArray','searchArray'],function (numbersArray,getSortedArray) {
	//добавляєм масив і сортуєм його
	console.log(getSortedArray.sorted(numbersArray.setArray([12,-16,8,45,2,3,4])));
	//
});