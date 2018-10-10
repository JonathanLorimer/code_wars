const expandedForm = n => n
	.toString()
	.split('')
	.reduce((acc, cur, idx, arr) => {
		if (idx === 0) return `${expand(cur, idx, arr)}`
		if (cur === '0') return acc
		return `${acc} + ${expand(cur, idx, arr)}`
}, '')
  
const expand = (c, i, a) => parseInt(c) * (10**(a.length - (i + 1)))