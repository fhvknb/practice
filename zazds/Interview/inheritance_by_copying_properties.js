
void (function(){
	// var arr = [1, 2, 3];
	// var obj = {
	// 	a: 1,
	// 	b: 2,
	// 	c: 3
	// }
	// for(var i in arr) {
	// 	console.log(i);
	// 	console.log('------');
	// }


	function extendDeep(parent, child) {
		var i,
			toStr = Object.prototype.toString,
			astr = "[object Array]";

		child = child || {};

		for(i in parent) {
			if(parent.hasOwnProperty(i)) {

				if(typeof parent[i] === 'object') {
						// 
						child[i] = (toStr.call(parent[i]) === astr) ? [] : {};

						extendDeep(parent[i], child[i]);
				}else {
					child[i] = parent[i];
				}
			};
		}

		return child;

	}

	var papa = {
		name: 'dada',
		mony: [1, 2, 3]
	};


	var aa = extendDeep(papa);
	aa.mony.push(4);
	console.log(papa);
	console.log(aa);
	


})();