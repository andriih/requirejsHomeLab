
define(['numbersArray'],function (numbersArray) {
    function sortedArray(){
    		var arrNew = numbersArray.arr;
    		console.log(arrNew);
			   var len = arrNew.length;
			   for (var i = len-1; i>=0; i--){
			     for(var j = 1; j<=i; j++){
			       if(arrNew[j-1]>arrNew[j]){
			           var temp = arrNew[j-1];
			           arrNew[j-1] = arrNew[j];
			           arrNew[j] = temp;
			        }
			     }
			   }
   	return arrNew;
    }
    //EXPORT
    return {
    	sorted:sortedArray
    };
});