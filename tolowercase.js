// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:

// Input: "Hello"
// Output: "hello"

var toLowerCase = function (str) {
	const letters = str.split("");
	for (let i = 0; i < letters.length; i++) {
		for (let j = 65; j < 91; j++) {
			if (letters[i] === String.fromCharCode(j)) {
				letters[i] = String.fromCharCode(j + 32);
			}
		}
	}

	return letters.join("");
};

function toLowerCase(str) {
	let letters = Array.from(str);
	let arr = [];
	for (let i = 0; i < letters.length; i++) {
		let num = str.charCodeAt(i);
		if (num >= 65 && num <= 91) {
			num = num + 32;
		}
		let strin = String.fromCharCode(num);
		arr.push(strin);
	}
	return arr.join("");
}
