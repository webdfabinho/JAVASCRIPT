function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));

// Solução 2

function somaNumeros(arr){
    return arr.reduce(function (prev, current){
        console.log({ prev });
        console.log({ current });
        return prev + current;
    });
}

const arr = [11, 3];

console.log(somaNumeros(arr));