// main.js
function vowelOccurrences(file) {
	return map(words => map(vowelCount, words), listOfWordsByLine(read(file)))
}

function vowelCount(word) {
	return reduce((prev, char) => {
	if (
		'a' === char || 'e' === char || 'i' === char || 'o' === char || 'u' === char
	) return ++prev
	else return prev
	}, 0, word)
}

function listOfWordsByLine(string) {
	return map(line => split(/\s+/, line), split('\n', string))
}
// reusable utils in util.js
function reduce(fn, accumulator, list) {
	return [].reduce.call(list, fn, accumulator)
}

function map(fn, list) {
	return [].map.call(list, fn)
}

function split(splitOn, string) {
	return string.split(splitOn)
}

let input = 'line one\nline two\nline three'
console.log(listOfWordsByLine(input)) // [['line','one'],['line','two']]


function* numbers(i) { while (true) yield i++ }

const genArray= (x, y) => {
	let n = numbers(x)
	let array = [];
	for (let num of n){
		array.push(num)
		if (num === y) break;
	}
	return array
}
console.log(genArray(20, 100))

