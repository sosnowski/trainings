(function (global) {
	var mapArray;

	if (!global.APP) {
		global.APP = {};
	}

	mapArray = function (array, callback, ctx) {
		
	};

	global.APP.mapArray = mapArray;


}(window));

/*

Przykład użycia:

var arr = [1, 2, 3, 4, 5, 6];

var newArray = mapArray(arr, function (arrElement, index, array) {
	return arrElement + 2;
});

newArray; // [3, 4, 5, 6, 7, 8]
*/
