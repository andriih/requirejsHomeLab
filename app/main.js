requirejs(['numbersArray','sortArray','searchArray'],function (numbersArray,getSortedArray,searchInArray) {
	//добавляєм масив і сортуєм його
	//console.log(getSortedArray.sorted(numbersArray.setArray([12,-16,8,45,2,3,4])));

	var sort = getSortedArray.sorted(numbersArray.setArray([12,-16,8,45,2,3,4]));
	console.log(sort);//Array [ -16, 2, 3, 4, 8, 12, 45 ]
	
	//метод searchForElement(arr,el) arr- масив el-елемент який шукаєм
	//повертаєм індекс шуканого елемента
	var search = searchInArray.searchForElement(sort,8);
	console.log(search);//4
});

