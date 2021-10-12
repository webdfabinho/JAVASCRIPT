/*Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar 
o valor de this. Crie seus próprios objetos para esta atividade!*/


// solução 1
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));

// solução 2

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Carol',
	idade: 40,
};

const pessoa2 = {
	nome: 'Fabio',
	idade: 46,
};

const pessoa3 = {
	nome: 'Gustavo',
	idade: 18,
};

const pessoa4 = {
	nome: 'Mayara',
	idade: 20,
};

console.log(calculaIdade.call(pessoa2, 15));
console.log(calculaIdade.apply(pessoa3, [15]));