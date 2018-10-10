const guessExpression = exp => {
	let components = exp.match(/(\w+)/g)
	let [num1, num2, value] = components
	let first = parseInt(`1${'0'.repeat(num1.length - 1)}`)
	let limit = first * 10

	while (first < limit){
		if (value % first === 0){
			let ref = serialize(num1, first)
			let guess = parseInt(
				num2
					.split('')
					.map(e => ref[e])
					.join('')
				)
			if (value / first === guess) return (`${first} * ${guess} = ${value}`)
		}
		first++
	}
}

const serialize = (p, n) => p
	.split('')
	.reduce((acc, cur, idx) => {
		acc[cur] = parseInt(n.toString()[idx])
		return acc
	},{})

let exp = `
ABC
*   CBA
-------
= 39483
`

console.log(guessExpression(exp)) //"123 * 321 = 39483"