const largeDiv = (a, b) => {
	let neg = false
	let solution = [];
	if (b === '0') throw new Error
	if (a === '0') return '0'
	if (a[0] === '-') neg = !neg
	if (a.slice(0,2) === '0.'){
		b = b + '0'.repeat(a.length - 2)
		a = a.slice(2)
	}
}

const longDiv = (a, b) => {
	let ia = parseInt(a)
	let ib = parseInt(b)
	let rem = ia % ib
}