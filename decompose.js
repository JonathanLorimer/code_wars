// ORIGINAL SOLUTION
// const decompose = n => {
// 	let sq = n * n
// 	let ref = Array.from(Array(n).keys()).map(e => e * e)
// 	let sqs = [...ref].reverse()
// 	sqs.pop()

// 	let squares = permute(sqs, sq)
	
// 	if (!squares) return null
// 	else return squares
// 		.map(e => ref.indexOf(e))
// 		.reverse()
// }

// const permute = (array, value,  acc = []) => {
	
// 	if (value === 0) return acc		

// 	for (let i = 0; i < array.length; i++){

// 		if (acc[acc.length - 1] <= array[i]) return false

// 		let diff = value - array[i]
// 		let short = array.slice(Math.sqrt(diff) * -1)
		
		

// 		let ans = permute(short, diff, [...acc, array[i]])
// 		if (ans) return ans
// 	}

// 	return false
// }

// REVISED SOLUTION
const decompose = n => {
	let sq = n * n

	let diff = sq - (n-1)**2
	return checker(diff, [n-1])
}

const checker = (diff, acc = []) => {
	
	let diffRoot = Math.sqrt(diff)
	let trueRoot = Math.floor(diffRoot)
	if (diffRoot === trueRoot) return [trueRoot, ...acc]		

	for (let i = trueRoot; i > 0; i--){
		if (i < acc[0]) {
			let branchCheck = checker(diff - i**2, [i, ...acc])
			if (branchCheck && branchCheck[0] < branchCheck[1]){
				return branchCheck 
			}
		}
	}
	return null
}
