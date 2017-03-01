define([],function(){
	function searchInArray(arrNew,arrItem){
		var n = arrNew.length, i = 0;   
		arrNew[n] = arrItem ;
		    
		while (arrNew[ i ] !== arrItem) i++;                            
		    if (i < n) return i;
		    else return -1;  
	}

	return{
		searchForElement:searchInArray
	}
});