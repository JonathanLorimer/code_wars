const mix = (s1, s2) => {
	const a1 = s1.split('')
	const a2 = s2.split('')
	const a = a1
		.concat(a2)
		.filter((e, i, a) => a.indexOf(e) === i && e !== ' ')
	
	const ref1 = buildRef(a1)
	const ref2 = buildRef(a2)
	
	for (let key in ref1){
		if (ref1[key] === 1 || key === key.toUpperCase() || key === ' ') delete ref1[key] 
	}
	for (let key in ref2){
		if (ref2[key] === 1 || key === key.toUpperCase() || key === ' ') delete ref2[key] 
	}

	return a
		.map(e => {
			if (!ref1.hasOwnProperty(e) && !ref2.hasOwnProperty(e)) return null
			else if (ref1[e] === ref2[e]) return `=:${e.repeat(ref1[e])}` 
			else if (ref1[e] > ref2[e] || !ref2.hasOwnProperty(e))	return `1:${e.repeat(ref1[e])}`
			else return `2:${e.repeat(ref2[e])}`
		})
		.filter(e => e)
		.sort((a,b) => b.length - a.length || (a < b ? -1 : 1))
		.join('/')
}

const buildRef = s => s
	.reduce((ac, s) => {
		if (ac[s]) ac[s]++
		else ac[s] = 1
		return ac
	}, {})

console.log(mix("Are they here", "yes, they are here")) // "2:eeeee/2:yy/=:hh/=:rr"
console.log(mix("looping is fun but dangerous", "less dangerous than coding")) // "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"