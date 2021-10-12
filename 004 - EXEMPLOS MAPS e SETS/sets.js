/* Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], 
retorne outro array apenas com valores únicos. */

// Solução 1

function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));

// Solução 2

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));