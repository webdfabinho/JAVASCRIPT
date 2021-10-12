function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));

// solução 2

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    //return item % 2 !== 0;
    return item % 2 === 0;
}

const meuArray = [1, 22, 33, 51, 66, 4, 5, 9];

console.log(filtraPares(meuArray));