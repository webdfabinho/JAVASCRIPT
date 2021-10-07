/* Atividade 1: Alunos Aprovados
1 Crie uma função que recebe o array alunos e um número que irá representar a média 
final; 
2 Percorra o array e popule um novo array auxiliar apenas com os alunos 
cujas notas são maiores ou iguais à média final;
3 Utilize a técnica "object destructuring" para manipular as propriedades desejadas 
de cada aluno. */

// solução 01

const alunos = [
	{
		nome: 'Carol',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Fabio',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Gustavo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));

// solução 2

const alunos = [
	{
		nome: 'Carol',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Fabio',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Gustavo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Mayara',
		nota: 3,
		turma: '2C',
	},
    {
		nome: 'Rebeca',
		nota: 4,
		turma: '2C',
	},
];

function alunosAprovados(arr, media) {
	let aprovados = [];

	for (let i = 0; i < arr.length; i++) {
		const {nota, nome} = arr[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));