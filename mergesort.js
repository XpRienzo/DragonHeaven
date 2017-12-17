(function() {
	
var MSort = function(array, comparator){
	if (array.length === 1) return array;
	
	let middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle);
	
	return m(MSort(left, comparator), MSort(right, comparator), comparator);
};

var m = function(left, right, comp) {
	let ret = [];
	let il = 0;
	let ir = 0;
	
	while (il < left.length && ir < right.length) {
		if (comp(left[il], right[ir]) <= 0) {
			ret.push(left[il]);
			il += 1;
		}
		else {
			ret.push(right[ir]);
			ir += 1;
		}
	}
	return ret.concat(left.slice(il)).concat(right.slice(ir));
};

module.exports = MSort;

})();