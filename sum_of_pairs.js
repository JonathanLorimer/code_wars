const sum_pairs = (a, s) => {
	let ref = {}
	
	for (let i = 0; i < a.length; i++){
		let n = a[i]
		if (ref[`${n}`]) return [parseInt(ref[n]), parseInt(n)]
		if (n < 0){
			ref[`${s + n}`] = `${n}`
		} else {
			ref[`${s - n}`] = `${n}`
		}
	}

	return undefined
}

console.log(sum_pairs([1,-2,3,0,-6,1], -6))