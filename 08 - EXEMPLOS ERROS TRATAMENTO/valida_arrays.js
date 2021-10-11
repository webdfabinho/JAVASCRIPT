/* Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho
 corresponda ao número enviado como parâmetro na função. Caso contrário, um 
 erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance 
um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */

function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
	}
}

console.log(validaArrays([1, 2, 3], 0));

// solução 2

function validaArray (arr, num){
try{
    if (!arr && !num) throw new ReferenceError ("Envie os Parâmetros!");

    if (typeof arr != 'object') throw new TypeError("Array precisa ser do tipo Object!");

    if (typeof num != 'number') throw new TypeError("Array precisa ser do tipo Object!");

    if (arr.length !== num) throw new RangeError("Tamanho invalido!");

    return arr;

}
catch(e){
    if (e instanceof ReferenceError){
        console.log("Esse Erro é um ReferenceError!");
        console.log(e.message);
    }
    else if (e instanceof TypeError){
        console.log("Esse Erro é um TypeError!");
        console.log(e.message);
    }
    else if (e instanceof RangeError){
        console.log("Esse Erro é um RamgeError!");
        console.log(e.message);
    }
    else{
        console.log("Tipo de erro não esperado!" + e);
    }
}
} 

//console.log(validaArray());
//console.log(validaArray(5, 5));
//console.log(validaArray([], 'a'));
//console.log(validaArray([], 5));
console.log(validaArray([1, 2, 3, 4, 5], 5));