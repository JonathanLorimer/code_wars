// const chain = (fns, acc = false) => {
// 	let keys = Object.keys(fns)
// 	keys.forEach(f => this[f]= (...args) =>{
// 		return this.execute(fns[f], ...args)
// 	})
// 	this.execute = (func, ...args) => {
// 		if (!func) return acc
// 		if (acc) acc = func(acc,...args)
// 		else acc = func(...args)
// 		return chain(fns, acc)
// 	}
// 	return this
// }
const chain = (fns) => {
	function ChainProto(x) {
		this.state = x
	}

	let keys = Object.keys(fns)
	keys.forEach(f => ChainProto.prototype[f]= function(...args) {
		if (this.state)  return new ChainProto(fns[f](this.state, ...args))
		return new ChainProto(fns[f](...args))
	})
	
	ChainProto.prototype.execute = function(){
		return this.state
	} 

	return new ChainProto()
}


function sum(x, y) {
	return x + y;
}

function double(x) {
	return sum(x, x);
}

function minus (x, y) {
	return x - y;
}

function addOne(x) {
	return sum(x, 1);
}


var c = chain({sum, minus, double, addOne});
// console.log(c.sum(3,4))
console.log(c.sum(3, 4).minus(2))
console.log(c.sum(3, 4).execute())
