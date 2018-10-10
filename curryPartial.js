const curryPartial = (fn, ...args) => {
	if (args.length > 0){
		// partial application
		return partial(fn, ...args)
	}
	else {
		//curry
		return curry(fn)
	}

}

// const partial = (fn, ...argsInHand) => (...additionalArgs) => fn(...argsInHand, ...additionalArgs)

// const curry = fn => {
// 	const arity = fn.length
// 	const given = (...argsInHand) => (...additionalArgs) => {
// 		const args = argsInHand.concat(additionalArgs)
// 		if (args.length >= arity) return fn(...args)
// 		else return given(...args)
// 	}
// 	return given()
// }
// const partial = (fn, ...argsInHand) => (...additionalArgs) => curryPartial(fn, ...argsInHand, ...additionalArgs)

// const curry = fn => {
// 	const arity = fn.length
// 	const given = (...argsInHand) => (...additionalArgs) => {
// 		const args = argsInHand.concat(additionalArgs)
// 		if (args.length >= arity) return fn(...args)
// 		else return curryPartial(fn, ...args)
// 	}
// 	return given()
// }

const partial = (fn, ...argsInHand) => (...additionalArgs) => fn(...argsInHand, ...additionalArgs)

const curry = fn => {
	const arity = fn.length
	const given = (...argsInHand) => (...additionalArgs) => {
		const args = argsInHand.concat(additionalArgs)
		if (args.length >= arity) return fn(...args)
		else return given(...args)
	}
	return given()
}


const add = (a, b, c) => a + b + c

var curriedAdd = curryPartial(add)
console.log(curriedAdd)
// console.log(curriedAdd(1))
// console.log(curriedAdd(1)(2))
console.log(curriedAdd(1)(2, 3, 4)); //6

var partialAdd = curryPartial(add, 1);
console.log(partialAdd(2, 3)); //6