
define(['numbersArray'],function (numbersArray) {
    function sortedArray(){
    	//return sort;
    		var arrNew = numbersArray.arr;
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
    return {
    	sort:sortedArray
    };
});